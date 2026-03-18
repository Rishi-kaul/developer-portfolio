"use client";

import InvestorForm from "@/components/InvestorForm";
import StartupDashboard from "@/components/StartupDashboard";
import BugosArchitecture from "@/components/BugosArchitecture";
import FundingCounter from "@/components/FundingCounter";

const roadmapSteps = [
  { label: "Prototype", icon: "🔬", status: "active",   desc: "Hardware v1 — 60% complete" },
  { label: "Beta",      icon: "🧪", status: "upcoming", desc: "50 units to select technicians" },
  { label: "Launch",   icon: "🚀", status: "upcoming", desc: "500-unit first batch" },
  { label: "Scaling",  icon: "📈", status: "upcoming", desc: "Pan-India distribution" },
];

const keyMetrics = [
  { value: "₹8,750 Cr",  label: "Market Size",       sub: "India Laptop Repair" },
  { value: "5,00,000+",  label: "Target Users",       sub: "Technicians nationwide" },
  { value: "500 Units",  label: "First Batch",        sub: "Production planned" },
  { value: "v1 — 60%",  label: "Prototype Stage",    sub: "Hardware development" },
];

export default function Startup() {
  return (
    <section id="startup" className="max-w-6xl mx-auto px-6 pb-24">

      {/* ── HERO ── */}
      <div className="startup-hero-section">
        <span className="startup-badge-pill">🚀 Startup</span>
        <h1 className="startup-main-title">BUGOS</h1>
        <p className="startup-tagline">Board Universal Gadget Operating System</p>
        <p className="startup-hero-desc">
          A non-invasive laptop diagnostic system designed to detect motherboard
          faults without opening the device — empowering technicians with
          AI-powered diagnostics.
        </p>
        <div className="startup-hero-cta">
          <a href="mailto:founder@bugos.tech" className="btn-primary">
            Become an Investor
          </a>
          <a
            href="https://github.com/Rishi-kaul/Laptop-Diagnostic-Pro"
            target="_blank"
            className="btn-secondary"
          >
            View GitHub →
          </a>
        </div>
      </div>

      {/* ── KEY METRICS ── */}
      <div className="startup-metrics-grid">
        {keyMetrics.map((m, i) => (
          <div key={i} className="startup-metric-card">
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-sub">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* ── ARCHITECTURE ── */}
      <SectionHeading title="Product Architecture" sub="How BUGOS works end-to-end" />
      <BugosArchitecture />

      {/* ── ROADMAP ── */}
      <SectionHeading title="Startup Roadmap" sub="Our journey from prototype to scale" />
      <div className="startup-roadmap-grid">
        {roadmapSteps.map((step, i) => (
          <RoadmapCard key={i} step={step} />
        ))}
      </div>

      {/* ── FUNDING ── */}
      <SectionHeading title="Seed Funding Round" sub="₹50L target to build the first production batch" />
      <div className="glass-card startup-funding">
        <div className="funding-top-row">
          <FundingCounter />
          <div className="funding-actions">
            <a href="mailto:founder@bugos.tech" className="btn-primary">Invest Now</a>
            <a
              href="https://github.com/Rishi-kaul/Laptop-Diagnostic-Pro"
              target="_blank"
              className="btn-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
        <div>
          <div className="funding-progress-labels">
            <span className="text-sm text-gray-500">Seed Round</span>
            <span className="text-sm font-semibold text-green-400">₹0L / ₹50L</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "0%" }} />
          </div>
        </div>
      </div>

      {/* ── DASHBOARD + FORM ── */}
      <div className="startup-bottom-grid">
        <StartupDashboard />
        <InvestorForm />
      </div>

    </section>
  );
}

function SectionHeading({ title, sub }) {
  return (
    <div className="startup-section-heading">
      <h2 className="startup-section-title">{title}</h2>
      {sub && <p className="startup-section-sub">{sub}</p>}
    </div>
  );
}

function RoadmapCard({ step }) {
  const active = step.status === "active";
  return (
    <div className={`roadmap-card${active ? " roadmap-card-active" : ""}`}>
      <div className="roadmap-card-icon">{step.icon}</div>
      <div className="roadmap-card-label">{step.label}</div>
      <div className="roadmap-card-desc">{step.desc}</div>
      {active && <span className="roadmap-badge">Current</span>}
    </div>
  );
}
