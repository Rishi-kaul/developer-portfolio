const items = [
  { icon: "🔬", label: "Hardware Prototype",   value: "v1 — 60% Complete",             trend: "↑" },
  { icon: "📦", label: "Units Planned",        value: "First batch: 500",             trend: "→" },
  { icon: "📊", label: "Market Size",          value: "₹8,750 Cr",                      trend: "↑" },
  { icon: "👷", label: "Technicians Targeted", value: "500,000+",                     trend: "↑" },
];

export default function StartupDashboard() {
  return (
    <div className="glass-card">
      <h3 className="dashboard-title">Startup Dashboard</h3>
      <div className="dashboard-grid">
        {items.map((item, i) => (
          <div key={i} className="dashboard-item">
            <div className="dashboard-item-icon">{item.icon}</div>
            <div className="dashboard-item-content">
              <div className="dashboard-item-label">{item.label}</div>
              <div className="dashboard-item-value">
                <span>{item.value}</span>
                <span className="dashboard-trend">{item.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
