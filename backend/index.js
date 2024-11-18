// import express from "express"
// import cors from "cors"
// import bodyParser from "body-parser"
import OpenAI from "openai";

// const OpenAI = require("openai")
// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const {Configuration, OpenAIApi} = require("openai")

const openai = new OpenAI({
    apiKey: "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", // This is also the default, can be omitted
  });

// const app = express()
// app.use(bodyParser.json())
// app.use(cors())

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
  });
  console.log(chatCompletion.choices[0].message);
chatCompletion()
// const port = 8000
// app.listen(port,()=>{
//     console.log(`Server is listening on port ${port}`);
    
// })