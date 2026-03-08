export default function Skills() {

  const skillCategories = [
    {
      name: "🔐 Security & Blue Team",
      skills: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "Trivy", "OWASP", "IDS/IPS", "Reverse Engineering", "Threat Intelligence"]
    },
    {
      name: "☁️ Cloud & Infrastructure",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Linux", "VirtualBox", "CI/CD", "Terraform"]
    },
    {
      name: "📊 Monitoring & SIEM",
      skills: ["Splunk", "ELK Stack", "Prometheus", "Grafana", "CloudWatch", "Security Logs", "Alert Management"]
    },
    {
      name: "💻 Development & Scripting",
      skills: ["Python", "Bash", "C", "C++", "JavaScript", "SQL", "Git", "GitHub", "REST APIs"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <h2 className="text-4xl text-green-400 text-center mb-4">
        🛠️ Skills & Expertise
      </h2>

      <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        A comprehensive toolkit for defensive security, infrastructure hardening, and secure development practices.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx}
            className="border border-green-900 p-6 rounded-lg bg-black/50 hover:border-green-400 transition"
          >
            <h3 className="text-green-400 font-semibold mb-4 text-lg">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sidx) => (
                <span
                  key={sidx}
                  className="px-3 py-1 text-sm bg-green-900/20 border border-green-700 rounded-full text-gray-300 hover:bg-green-900/40 hover:border-green-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 border border-green-900 rounded-lg bg-black/50">
        <h3 className="text-green-400 font-semibold mb-3">📜 Certifications & Recognition</h3>
        <ul className="space-y-2 text-gray-400">
          <li>✓ <span className="text-green-400">Top 20%</span> NPTEL Cloud Computing (IIT Kharagpur)</li>
          <li>✓ <span className="text-green-400">Top 100</span> Anveshanam CTF (IIT Jammu & DRDO)</li>
          <li>✓ <span className="text-green-400">Active Competitor</span> CTFLearn | HackTheBox | TryHackMe</li>
          <li>✓ <span className="text-green-400">100+ GitHub Stars</span> across security projects</li>
        </ul>
      </div>

    </section>
  );

}
