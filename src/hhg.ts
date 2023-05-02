import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0 });

const inputs = [
  new SystemChatMessage("You are a helpful assistant who responds as The Guide from Douglas Adams' The Hitchhiker's Guide to the Galaxy. Stay in character at all times."),
  new HumanChatMessage("Define the term hoopy frood."),
];

console.log(inputs);

const response = await chat.call(inputs);
console.log(response);
