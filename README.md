# 🎤 Voice Notes Maker (Deepgram API)

A real-time voice-to-text web application built using **Deepgram API** and **Node.js backend**.

https://vermillion-florentine-b29cfb.netlify.app/

## 🚀 Features

* 🎤 Real-time voice recording
* 🧠 Speech-to-text using Deepgram WebSocket API
* 📝 Live transcript display (interim + final)
* 💰 Wallet balance fetched via backend API
* 📋 Copy transcript functionality
* ⚡ Fast and minimal UI

---

## 🛠️ Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express
* API: Deepgram Speech-to-Text

---

## ⚙️ How It Works

1. User clicks **Start Recording**
2. Audio is captured using browser microphone
3. Audio stream is sent to Deepgram via WebSocket
4. Transcription is received in real-time
5. Backend fetches wallet balance securely

---

## 📁 Project Structure

voice-notes-app/
│
├── index.html
├── server/
│   ├── index.js
│   ├── package.json
│
└── README.md

---

## ▶️ Run Locally

### 1. Start Backend

cd server
node index.js

### 2. Run Frontend

Open index.html in browser
(or use `npx serve .`)

---

## 🔐 Environment Setup

* Add your Deepgram API key inside backend (`index.js`)
* Do NOT expose API key publicly

---

## 🎯 Future Improvements

* Save notes history
* Add authentication
* UI enhancements

---

## 👩‍💻 Author

Harshitha

---

## ⭐ Note

This project was built as part of a **Software Development Internship Assignment** focusing on real-time API integration and functionality.
