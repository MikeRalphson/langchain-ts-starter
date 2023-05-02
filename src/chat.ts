import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0 });

const inputs = [
  new SystemChatMessage("You are a helpful assistant that translates English to French."),
  new HumanChatMessage("Translate: I love programming."),
];

console.log(inputs);

const response = await chat.call(inputs);
console.log(response);
