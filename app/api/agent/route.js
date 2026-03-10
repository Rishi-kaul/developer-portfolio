import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledge } from "@/data/knowledge";
import { searchLocalAI } from "@/lib/localBrain";

export async function POST(req){

try{

const { message } = await req.json();

console.log("User question:", message);

/* ---------- LOCAL AI FIRST ---------- */

const localAnswer = searchLocalAI(message);

if(localAnswer){

console.log("Local AI used");

return Response.json({
reply: localAnswer
});

}

/* ---------- GEMINI AI ---------- */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
model: "gemini-1.5-flash"
});

const prompt = `
You are an AI recruiter assistant for Rishi Kaul.

Answer questions about his:

• cybersecurity skills
• projects
• experience
• BUGOS startup

Knowledge:
${knowledge}

User Question:
${message}
`;

const result = await model.generateContent(prompt);
const response = await result.response;

const text = response.text();

return Response.json({
reply: text
});

}

/* ---------- FALLBACK ---------- */

catch(error){

console.error("AI error:", error);

return Response.json({
reply: `
I am currently experiencing high demand on the AI server.

However here is a quick summary:

Rishi Kaul is a cybersecurity focused systems engineer with experience in:

• blue team security
• malware analysis
• security monitoring
• DevSecOps
• infrastructure engineering

You can explore his projects and startup BUGOS on this portfolio.
`
});

}

}