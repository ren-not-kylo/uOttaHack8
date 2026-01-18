import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json()); // IMPORTANT for reading JSON body
app.use(express.static("src"));




const GEMINI_ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;


app.post("/api/gemini", async (req, res) => {
  try {
    const { prompt } = req.body;

    const geminiRes = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    const data = await geminiRes.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);

