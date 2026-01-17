import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static("src"));

// Example API route
app.get("/api/data", async (req, res) => {
  const apiKey = process.env.API_KEY;

  // Call external API here
  fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`)


  res.json({ message: "API request successful" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
