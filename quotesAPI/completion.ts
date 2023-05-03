import { inspect } from "node:util";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function main() {
  // const prompt = "According to Douglas Adams, what is the answer to the meaning of life, the universe, and everything?";
  // const prompt = "What is a famous quote attributed to Douglas Adams?";
  const prompt = "What is a famous quote misattributed to Mark Twain?";
  const temperature = 0.5;
  const top_p = 1.0;
  const n = 1;

  const completion = await openai.createCompletion({
model: "text-davinci-003",
prompt, temperature, top_p, n, max_tokens: 250,
  });
  process.stdout.write(`${prompt}:>`);
  console.log(`  ${completion.data.choices[0].text}`);
}

main();
