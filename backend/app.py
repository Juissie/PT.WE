from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/')
def home():
    return 'Welcome to the Flask Backend API!'

if __name__ == '__main__':
    app.run(debug=True)