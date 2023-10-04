import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

export const runtime = "edge";
const config = new Configuration({
  apiKey: process.env.OPENAI_API,
});
const openai = new OpenAIApi(config);
console.log(`API Key: ${process.env.OPENAI_API}`);

export async function POST(req: Request) {
  const body = await req.json();
  const { messages } = body;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
