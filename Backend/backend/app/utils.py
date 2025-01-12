import os
from google.cloud import speech_v1p1beta1 as speech
from transformers import pipeline

# Set up Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "C:\Users\vigne\Downloads\optimal-aurora-447116-t1-edec8310a20e.json"

# Initialize Google Speech-to-Text client
client = speech.SpeechClient()

# Initialize sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis")

def transcribe_audio(file):
    # Save the uploaded file temporarily
    file_path = "temp_audio.wav"
    file.save(file_path)

    # Check if the file is in a supported format
    if not file_path.endswith(".wav"):
        raise ValueError("Unsupported file format. Please upload a WAV file.")

    # Read the audio file
    with open(file_path, "rb") as audio_file:
        content = audio_file.read()

    # Configure the audio settings
    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code="en-US",  # Change language code as needed
    )

    # Transcribe audio using Google Speech-to-Text API
    response = client.recognize(config=config, audio=audio)

    # Extract transcribed text
    text = ""
    for result in response.results:
        text += result.alternatives[0].transcript + " "

    return text.strip()

def analyze_sentiment(text):
    # Use Hugging Face's sentiment analysis pipeline
    result = sentiment_pipeline(text)[0]
    return {
        "label": result["label"],
        "polarity": 1 if result["label"] == "POSITIVE" else -1 if result["label"] == "NEGATIVE" else 0,
    }