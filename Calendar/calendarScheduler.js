// calendarScheduler.js
const fs = require('fs');
const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const destroyer = require('server-destroy');
const path = require('path');

// Constants
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');
const PORT = 3000;
const REDIRECT_PATH = '/oauth2callback';
const REDIRECT_URI = `http://localhost:${PORT}${REDIRECT_PATH}`;

class CalendarScheduler {
    constructor() {
        this.auth = null;
        this.calendar = null;
        console.log('Initializing CalendarScheduler...');
    }

    async initialize() {
        try {
            this.auth = await this.authorize();
            this.calendar = google.calendar({ version: 'v3', auth: this.auth });
            console.log('✓ Calendar scheduler initialized successfully');
            return true;
        } catch (error) {
            console.error('✗ Failed to initialize calendar scheduler:', error.message);
            return false;
        }
    }

    async authorize() {
        try {
            if (!fs.existsSync(CREDENTIALS_PATH)) {
                throw new Error(`Credentials file not found at ${CREDENTIALS_PATH}`);
            }

            const content = fs.readFileSync(CREDENTIALS_PATH, 'utf-8');
            const credentials = JSON.parse(content);
            const { client_secret, client_id } = credentials.web;

            const oAuth2Client = new google.auth.OAuth2(
                client_id,
                client_secret,
                REDIRECT_URI // Using the correctly formatted redirect URI
            );

            // Check for existing token
            if (fs.existsSync(TOKEN_PATH)) {
                console.log('Found existing token, attempting to use it...');
                const token = fs.readFileSync(TOKEN_PATH, 'utf-8');
                oAuth2Client.setCredentials(JSON.parse(token));
                return oAuth2Client;
            }

            console.log('No existing token found, starting new authentication flow...');
            return await this.getNewToken(oAuth2Client);
        } catch (error) {
            console.error('Authorization error:', error.message);
            throw error;
        }
    }

    async getNewToken(oAuth2Client) {
        return new Promise((resolve, reject) => {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: ['https://www.googleapis.com/auth/calendar'],
                prompt: 'consent' // Force consent screen to ensure refresh token
            });

            console.log('\n=== Authorization Required ===');
            console.log('1. Click this URL to authorize the application:');
            console.log(authUrl);
            console.log('\n2. You will be redirected after authorization');
            console.log('3. Wait for the confirmation message');
            console.log('===============================\n');

            let server = null;

            // Create server to handle OAuth callback
            server = http
                .createServer(async (req, res) => {
                    try {
                        const parsedUrl = new url.URL(req.url, `http://localhost:${PORT}`);
                        
                        // Only handle the oauth callback path
                        if (parsedUrl.pathname === REDIRECT_PATH) {
                            const code = parsedUrl.searchParams.get('code');
                            if (!code) {
                                throw new Error('No code received from Google');
                            }

                            // Send response to browser
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(`
                                <html>
                                    <body style="font-family: Arial, sans-serif; text-align: center; padding-top: 50px;">
                                        <h2>Authentication Successful!</h2>
                                        <p>You can close this window and return to the application.</p>
                                    </body>
                                </html>
                            `);

                            // Clean up server
                            server.destroy();

                            try {
                                // Exchange code for tokens
                                const { tokens } = await oAuth2Client.getToken(code);
                                oAuth2Client.setCredentials(tokens);
                                
                                // Save tokens
                                fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
                                console.log('✓ Token stored successfully');
                                
                                resolve(oAuth2Client);
                            } catch (error) {
                                console.error('✗ Error getting token:', error.message);
                                reject(error);
                            }
                        }
                    } catch (error) {
                        console.error('Callback error:', error.message);
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        res.end('Authentication failed! Please try again.');
                        server.destroy();
                        reject(error);
                    }
                })
                .listen(PORT, () => {
                    console.log(`\nLocal server listening on http://localhost:${PORT}`);
                });

            destroyer(server);
        });
    }

    async scheduleCall(callDetails) {
        try {
            const {
                customerEmail,
                urgencyLevel = 'MEDIUM',
                duration = 30,
                subject,
                description
            } = callDetails;

            // Calculate start time (example: schedule for next available slot)
            const startTime = new Date();
            startTime.setHours(startTime.getHours() + 1); // Start from next hour
            startTime.setMinutes(0, 0, 0); // Start at the beginning of the hour

            const endTime = new Date(startTime);
            endTime.setMinutes(startTime.getMinutes() + duration);

            const event = {
                summary: subject || 'Customer Support Call',
                description: description || 'Follow-up call with customer',
                start: {
                    dateTime: startTime.toISOString(),
                    timeZone: 'Asia/Kolkata',
                },
                end: {
                    dateTime: endTime.toISOString(),
                    timeZone: 'Asia/Kolkata',
                },
                attendees: [{ email: customerEmail }],
                reminders: {
                    useDefault: false,
                    overrides: [
                        { method: 'email', minutes: 15 },
                        { method: 'popup', minutes: 10 },
                    ],
                },
            };

            const response = await this.calendar.events.insert({
                calendarId: 'primary',
                resource: event,
                sendUpdates: 'all',
            });

            console.log('✓ Call scheduled successfully:', response.data.htmlLink);
            return response.data;
        } catch (error) {
            console.error('✗ Error scheduling call:', error.message);
            throw error;
        }
    }
}

// Test function
async function testScheduler() {
    try {
        const scheduler = new CalendarScheduler();
        await scheduler.initialize();

        const result = await scheduler.scheduleCall({
            customerEmail: 'test@example.com',
            urgencyLevel: 'HIGH',
            duration: 30,
            subject: 'Test Call',
            description: 'This is a test call'
        });

        console.log('Test scheduling result:', result);
    } catch (error) {
        console.error('Test failed:', error.message);
        process.exit(1);
    }
}

// Run test if called directly
if (require.main === module) {
    testScheduler();
}

module.exports = CalendarScheduler;
