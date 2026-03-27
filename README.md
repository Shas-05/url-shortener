🚀 URL Shortener API








A fast and minimal URL Shortener Backend built using Node.js, Express, and MongoDB.
It allows users to generate short URLs, redirect them, and track usage analytics.

✨ Features
🔗 Shorten long URLs
🔁 Redirect using short links
📊 Track visit history
📈 Analytics endpoint (click count + timestamps)
⚡ REST API (frontend-ready)
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB Atlas
ODM: Mongoose
ID Generator: nanoid / shortid
API Testing: Thunder Client / Postman
📁 Project Structure
url-shortener/
│
├── controllers/
│   └── url.js
│
├── models/
│   └── url.js
│
├── routes/
│   └── url.js
│
├── connect.js
├── index.js
├── package.json
⚙️ Setup & Installation
1️⃣ Clone the repo
git clone https://github.com/YOUR_USERNAME/url-shortener.git
cd url-shortener
2️⃣ Install dependencies
npm install
3️⃣ Setup MongoDB (Atlas Recommended)

Get your MongoDB connection string:

mongodb+srv://username:password@cluster.mongodb.net/url-shortener
4️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
PORT=8001
5️⃣ Start server
npm start

OR (dev mode):

nodemon index.js
🚀 API Endpoints
🔗 Create Short URL

POST /url

Request:
{
  "url": "https://google.com"
}
Response:
{
  "id": "abc123"
}
🔁 Redirect

GET /:shortID

👉 Example:

http://localhost:8001/abc123

Redirects to original URL.

📊 Analytics

GET /url/analytics/:shortId

Example:
http://localhost:8001/url/analytics/abc123
Response:
{
  "totalClicks": 3,
  "analytics": [
    { "timestamp": 1710000000000 }
  ]
}
🧪 Testing

Use Thunder Client or Postman

POST → /url
GET → /abc123
GET → /url/analytics/abc123
🧠 How It Works
User sends URL → /url
Server generates short ID
Stores in MongoDB
Visiting short URL:
Finds original URL
Redirects user
Logs visit timestamp
⚠️ Common Issues
Problem	Cause	Fix
MongoDB connection error	DB not running	Use Atlas / check URI
argument handler is required	Missing route handler	Fix router
req.body undefined	Missing middleware	express.json()
MODULE_NOT_FOUND	Missing package	npm install
🔮 Future Enhancements
🔐 Authentication (JWT)
🎯 Custom short URLs
🌐 Frontend (Next.js)
📊 Analytics Dashboard
🚀 Deployment (Render / Vercel)
👨‍💻 Author

Shashank Gupta
