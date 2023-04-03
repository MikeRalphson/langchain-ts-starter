import * as dotenv from "dotenv";
import * as util from "node:util";
import { ChatOpenAI } from "langchain/chat_models";
import { initializeAgentExecutor } from "langchain/agents";
import {
  RequestsGetTool,
  RequestsPostTool,
  AIPluginTool,
} from "langchain/tools";

dotenv.config();

async function main() {
  const tools = [
    new RequestsGetTool(),
    new RequestsPostTool(),
    await AIPluginTool.fromPluginUrl(
      "https://apis.guru/.well-known/ai-plugin.json"
    ),
  ];
  const agent = await initializeAgentExecutor(
    tools,
    new ChatOpenAI({ temperature: 0 }),
    "chat-zero-shot-react-description",
    true
  );

  const result = await agent.call({
    input:
      "How many APIs are available in the APIs.guru OpenAPI Directory? Use the metrics endpoint. Explain your reasoning.",
  });

  console.log(util.inspect(result, { depth: null }));
}

main();
