"use client";

import { useState } from "react";

export default function InvestorForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/investor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setStatus("Interest submitted successfully.");
      setForm({ name:"", email:"", interest:"", message:"" });
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (

    <div className="max-w-lg mx-auto bg-black/70 border border-green-900 rounded-xl p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,159,0.15)]">

      <h3 className="text-green-400 text-2xl text-center mb-6 font-semibold">
        Investor Interest
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="bg-black border border-green-900 rounded-lg px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-black border border-green-900 rounded-lg px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400"
          required
        />

        <input
          name="interest"
          value={form.interest}
          onChange={handleChange}
          placeholder="Investment Interest (₹)"
          className="bg-black border border-green-900 rounded-lg px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="bg-black border border-green-900 rounded-lg px-4 py-3 text-green-300 placeholder-green-700 focus:outline-none focus:border-green-400 h-28"
        />

        <button
          className="mt-2 bg-green-500 text-black py-3 rounded-lg font-semibold hover:bg-green-400 transition shadow-[0_0_15px_rgba(0,255,159,0.6)]"
        >
          Submit Interest
        </button>

        {status && (
          <p className="text-green-400 text-center mt-2">
            {status}
          </p>
        )}

      </form>

    </div>

  );
}