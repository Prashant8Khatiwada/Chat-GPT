import express from "express";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Configuration, OpenAIApi } from "openai";

const app = express();

env.config();

app.use(cors());
app.use(bodyParser.json());

// configure openai routes
const configuration = new Configuration({
  organization: "org-Emp3hTYnEYDzVNi3cyTCzSVf",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

// dummy routes to test
// app.get("/", (req, res) => {
//   res.send("Hello From Prashant");
// });

// post routes for  making request
app.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      temperature: 0.5,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.json({ message: response.data.choices[0].text });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// listening on port
app.listen(5000, () =>
  console.log("Server is running on port https://localhost:5000")
);
