// const express = require("express");
// const cors = require("cors");
// const { HfInference } = require("@huggingface/inference");
import express from "express"
import cors from "cors"
import { HfInference } from "@huggingface/inference";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Hugging Face Inference API
const hf = new HfInference("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")

// Route to generate text
app.post("/generate", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await hf.textGeneration({
            model: "Qwen/Qwen2.5-Coder-32B-Instruct",
            inputs: prompt,
            parameters: { max_new_tokens: 300 },
        });
        res.json({ generated_text: response.generated_text });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to generate text" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
