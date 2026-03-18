"use client";

const blocks = [
  { label: "Laptop Hardware",   icon: "💻", desc: "Host device under test" },
  { label: "BUGOS Hardware",    icon: "🔌", desc: "Diagnostic interface" },
  { label: "Diagnostic Engine", icon: "⚙️",  desc: "AI fault analysis" },
  { label: "Cloud Database",    icon: "☁️",  desc: "Fault log & patterns" },
];

export default function BugosArchitecture() {
  return (
    <div className="arch-wrapper">
      {blocks.map((b, i) => (
        <div key={i} className="arch-item-wrapper">
          <div className="arch-block">
            <div className="arch-icon">{b.icon}</div>
            <div className="arch-label">{b.label}</div>
            <div className="arch-desc">{b.desc}</div>
          </div>
          {i < blocks.length - 1 && (
            <div className="arch-arrow">→</div>
          )}
        </div>
      ))}
    </div>
  );
}
