"use client";

import { useState } from "react";

export default function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="glass-card">
      <h3 className="dashboard-title">Investor Interest</h3>

      {submitted ? (
        <div className="form-success">
          <div className="form-success-icon">✅</div>
          <p style={{ color: "#00ffa6", fontWeight: 600, fontSize: "18px" }}>Thank you!</p>
          <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "6px" }}>
            We’ll reach out shortly.
          </p>
        </div>
      ) : (
        <form className="investor-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input placeholder="Your Name"      type="text"  className="form-input" required />
            <input placeholder="Email Address"  type="email" className="form-input" required />
          </div>
          <input
            placeholder="Investment Amount (₹)"
            type="text"
            className="form-input"
          />
          <textarea
            placeholder="Message (optional)"
            className="form-input form-textarea"
            rows={4}
          />
          <button type="submit" className="btn-primary" style={{ width: "100%" }}>
            Submit Interest →
          </button>
        </form>
      )}
    </div>
  );
}
