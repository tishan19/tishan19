# ai_chat.py (Flask backend)
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = "YOUR_API_KEY_HERE"

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_msg = data.get("message", "")

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_msg}]
    )

    ai_reply = response["choices"][0]["message"]["content"]
    return jsonify({"reply": ai_reply})

if __name__ == "__main__":
    app.run(debug=True)
<!-- chat.html -->
<div style="text-align:center;padding:20px;">
  <h2>Chat with AI ??</h2>
  <input id="userInput" placeholder="Type your message" style="width:70%;padding:10px;">
  <button onclick="sendToAI()">Send</button>
  <p id="aiResponse" style="margin-top:20px;color:#1db954;"></p>
</div>

<script>
  async function sendToAI() {
    const message = document.getElementById("userInput").value;
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    document.getElementById("aiResponse").innerText = data.reply;
  }
</script>
# For example
if "sad" in user_msg:
    ai_reply += "\nHere's a motivational quote for you: 'Every storm runs out of rain!' ??"
