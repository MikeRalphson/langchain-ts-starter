import { ChatOpenAI } from "langchain/chat_models/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import {
  RequestsGetTool,
  RequestsPostTool,
  AIPluginTool,
} from "langchain/tools";
import * as dotenv from 'dotenv';

dotenv.config();

async function main(domain: string, input: string) {
  const tools = [
    new RequestsGetTool(),
    new RequestsPostTool(),
    await AIPluginTool.fromPluginUrl(`https://${domain}/.well-known/ai-plugin.json`),
  ];
  const agent = await initializeAgentExecutorWithOptions(
    tools,
    new ChatOpenAI({ temperature: 0 }),
    { agentType: "chat-zero-shot-react-description", verbose: true }
  );

  const result = await agent.call({ input });
  console.log({ result });
}

// main('www.klarna.com','what t shirts are available in klarna?');
// main('apis.guru','How many APIs are available in the APIs.guru OpenAPI Directory?');
main('dev.to','What is one good article on dev.to specifically about the history of the OpenAPI Specification?');
