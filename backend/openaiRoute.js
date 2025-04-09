const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

router.post("/generate-plan", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: `Create a custom travel plan: ${prompt}` }
      ],
      temperature: 0.7
    });

    const message = completion.choices[0]?.message?.content;
    res.json({ plan: message });
  } catch (err) {
    console.error("❌ Error generating plan:", err);
    res.status(500).json({ error: "Failed to generate travel plan." });
  }
});

module.exports = router;
