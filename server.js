// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3001;

const WIDGET_ID = "YOUR_WIDGET_ID";
const API_KEY = "YOUR_API_KEY";

app.get("/resync-instagram", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.sociablekit.com/v1/widget/${WIDGET_ID}/resync`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (!response.ok) throw new Error("Resync failed");

    const data = await response.json();
    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
