"use client";

export default function FundingCounter() {
  return (
    <div className="funding-display">
      <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
        Total Raised
      </p>
      <div className="funding-number">₹0</div>
      <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "6px" }}>
        Goal: ₹50,00,000
      </p>
    </div>
  );
}
