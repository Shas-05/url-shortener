const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 8001;
const URL = require("./models/url");

app.get("/:shortID", async (req, res) => {
  const shortID = req.params.shortID;

  const entry = await URL.findOne({ shortID });

  if (!entry) {
    return res.status(404).send("URL not found");
  }

  // Optional: track visit history
  entry.visitHistory.push({
    timestamp: Date.now(),
  });

  await entry.save();

  res.redirect(entry.redirectURL);
});

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
