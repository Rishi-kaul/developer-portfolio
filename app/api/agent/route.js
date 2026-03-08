import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledge } from "@/data/knowledge";

export async function POST(req) {

  try {

    const { message } = await req.json();

    console.log("User question:", message);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
You are an AI recruiter assistant for Rishi Kaul, a cybersecurity professional.

Answer questions about his skills, projects, experience, and startup idea.

Be professional, concise, and focus on technical competencies.

Knowledge Base:
${knowledge}

User Question:
${message}

Provide a helpful, professional response.
`;

    console.log("Sending prompt to Gemini...");

    const result = await model.generateContent(prompt);

    const response = result.response;
    const text = response.text();

    console.log("Gemini response received:", text.substring(0, 100));

    return Response.json({ reply: text });

  } catch (error) {

    console.error("Agent Error:", error.message);
    console.error("Stack:", error.stack);

    return Response.json({ 
      reply: "AI agent failed to respond. Please try again." 
    }, { status: 500 });

  }

}
