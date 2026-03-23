const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8001;

// ✅ Middleware (IMPORTANT)
app.use(express.json());

// ✅ Connect to MongoDB
connectToMongoDB(
  "mongodb+srv://youtube:shashank2005@cluster0.uua0qbf.mongodb.net/url-shortener",
)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

// ✅ Routes
app.use("/url", urlRoute);

// ✅ Start server
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
