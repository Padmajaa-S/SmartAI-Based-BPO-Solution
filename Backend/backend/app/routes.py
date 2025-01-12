from flask import Blueprint, request, jsonify
from .utils import transcribe_audio, analyze_sentiment

# Create the Blueprint
main = Blueprint('main', __name__)

@main.route('/upload-audio', methods=['POST'])
def upload_audio():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']

    try:
        # Step 1: Transcribe audio to text
        text = transcribe_audio(file)

        # Step 2: Perform sentiment analysis
        sentiment = analyze_sentiment(text)

        # Step 3: Determine priority
        if sentiment["polarity"] < -0.5:
            priority = "High"
        elif -0.5 <= sentiment["polarity"] < 0:
            priority = "Medium"
        else:
            priority = "Low"

        return jsonify({
            "text": text,
            "sentiment": sentiment,
            "priority": priority
        })
    except Exception as e:
        # Log the full error traceback
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500