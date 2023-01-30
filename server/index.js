import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

// configure openai routes
const configuration = new Configuration({
  organization: "org-Emp3hTYnEYDzVNi3cyTCzSVf",
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

// dummy routes to test
app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from prashant",
  });
});

// post routes for  making request
app.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

// listening on port
app.listen(5000, () =>
  console.log("Server is running on port https://localhost:5000")
);
