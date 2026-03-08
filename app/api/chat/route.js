export const dynamic = "force-dynamic";

import OpenAI from "openai";

export async function POST(req) {
  try {
    const { message } = await req.json();

    // If API key is missing, return safe response
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        reply: "AI assistant is temporarily disabled."
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an assistant answering questions about developer Rishi Kaul."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    return Response.json({
      reply: response.choices[0].message.content
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json({
      reply: "AI assistant failed to respond."
    });
  }
}