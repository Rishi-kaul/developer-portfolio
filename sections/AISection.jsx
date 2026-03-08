"use client";

import { useState } from "react";

export default function AISection() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!message) return;

    try {

      const userMsg = { role: "user", text: message };
      setChat(c => [...c, userMsg]);
      setMessage("");

      // Add thinking indicator
      setLoading(true);
      setChat(c => [...c, { role: "ai", text: "🤔 Thinking...", isLoading: true }]);

      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      // Replace loading message with actual response
      setChat(c => {
        const updated = [...c];
        updated[updated.length - 1] = { role: "ai", text: data.reply };
        return updated;
      });

      setLoading(false);

    } catch (error) {

      console.error("Chat error:", error);
      setChat(c => [...c, { role: "ai", text: "❌ AI request failed. Please try again." }]);
      setLoading(false);

    }

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) sendMessage();
  };

  return (

    <section className="max-w-2xl mx-auto py-20 px-6">

      <h2 className="text-3xl text-green-400 text-center mb-2 font-semibold">
        Recruiter AI Assistant
      </h2>

      <p className="text-gray-400 text-center mb-6 text-sm">
        Ask anything about Rishi's skills, projects, or startup.
      </p>

      <div className="bg-black border border-green-900 rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,159,0.15)]">

        <div className="flex flex-wrap gap-2 mb-4">

          <button
            onClick={() => setMessage("What cybersecurity projects has Rishi built?")}
            className="chip"
          >
            Projects
          </button>

          <button
            onClick={() => setMessage("What security tools does Rishi know?")}
            className="chip"
          >
            Security Tools
          </button>

          <button
            onClick={() => setMessage("Explain the BUGOS startup idea")}
            className="chip"
          >
            BUGOS Startup
          </button>

          <button
            onClick={() => setMessage("Why should a company hire Rishi?")}
            className="chip"
          >
            Why Hire
          </button>

          <button
            onClick={() => setMessage("Summarize Rishi's experience")}
            className="chip"
          >
            Experience
          </button>

        </div>

        <div className="h-64 overflow-y-auto mb-4 space-y-3 bg-black/50 p-4 rounded-lg border border-green-900/50">

          {chat.length === 0 && (
            <p className="text-gray-500 text-center text-sm py-8">Start a conversation...</p>
          )}

          {chat.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <span className={`inline-block px-4 py-2 rounded-lg max-w-xs ${
                m.role === "user"
                  ? "bg-green-500 text-black font-semibold"
                  : "bg-gray-800 text-green-300 border border-green-700"
              }`}>
                {m.isLoading ? (
                  <span className="inline-flex items-center gap-1">
                    {m.text}
                    <span className="inline-block animate-pulse">●</span>
                  </span>
                ) : (
                  m.text
                )}
              </span>
            </div>
          ))}

        </div>

        <div className="flex gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about projects, skills, or BUGOS..."
            disabled={loading}
            className="flex-1 bg-black border border-green-900 rounded-lg px-4 py-3 text-green-300 focus:outline-none focus:border-green-400 disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition font-semibold disabled:bg-green-700 disabled:cursor-not-allowed"
          >
            {loading ? "⏳" : "Ask"}
          </button>
        </div>

      </div>

    </section>

  );
}