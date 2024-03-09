from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import getResponse

app = Flask(__name__)
CORS(app)  # setting up cors


# defining routes

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # make sure that text is valid
    response = getResponse(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)  # debug is true for testing
