export default function Skills() {

const skillCategories = [

{
name: "🔐 Security & Blue Team",
skills: [
"Wireshark",
"Nmap",
"Burp Suite",
"Metasploit",
"Trivy",
"OWASP",
"IDS/IPS",
"Reverse Engineering",
"Threat Intelligence"
]
},

{
name: "☁️ Cloud & Infrastructure",
skills: [
"AWS",
"Azure",
"GCP",
"Docker",
"Kubernetes",
"Linux",
"VirtualBox",
"CI/CD",
"Terraform"
]
},

{
name: "📊 Monitoring & SIEM",
skills: [
"Splunk",
"ELK Stack",
"Prometheus",
"Grafana",
"CloudWatch",
"Security Logs",
"Alert Management"
]
},

{
name: "💻 Development & Scripting",
skills: [
"Python",
"Bash",
"C",
"C++",
"JavaScript",
"SQL",
"Git",
"GitHub",
"REST APIs"
]
}

];

return (

<section className="max-w-6xl mx-auto py-28 px-6">

{/* Title */}

<h2 className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-6">
Skills & Expertise
</h2>

<p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
A comprehensive toolkit for defensive security, infrastructure
hardening, and secure development practices.
</p>


{/* Skill Categories */}

<div className="grid md:grid-cols-2 gap-8">

{skillCategories.map((category, idx) => (

<div
key={idx}
className="
relative
p-7
rounded-xl
bg-black/60
border border-green-900/40
backdrop-blur-md
transition-all
duration-300
hover:-translate-y-1
hover:border-green-400/40
hover:shadow-[0_0_30px_rgba(0,255,170,0.15)]
"
>

<h3 className="text-green-300 font-semibold mb-4 text-lg">
{category.name}
</h3>


<div className="flex flex-wrap gap-2">

{category.skills.map((skill, sidx) => (

<span
key={sidx}
className="
px-3 py-1
text-xs
rounded-full
bg-green-500/10
border border-green-500/20
text-green-300
transition
hover:bg-green-500/20
hover:border-green-400
"
>
{skill}
</span>

))}

</div>

</div>

))}

</div>


{/* Certifications */}

<div
className="
mt-20
p-7
rounded-xl
bg-black/60
border border-green-900/40
backdrop-blur-md
max-w-3xl
mx-auto
"
>

<h3 className="text-green-300 font-semibold mb-5 text-lg text-center">
Certifications & Recognition
</h3>

<ul className="space-y-3 text-gray-400 text-sm">

<li className="flex gap-2">
<span className="text-green-400">▹</span>
Top 20% in NPTEL Cloud Computing (IIT Kharagpur)
</li>

<li className="flex gap-2">
<span className="text-green-400">▹</span>
Top 100 Anveshanam CTF (IIT Jammu & DRDO)
</li>

<li className="flex gap-2">
<span className="text-green-400">▹</span>
Active competitor on CTFLearn, HackTheBox, and TryHackMe
</li>

<li className="flex gap-2">
<span className="text-green-400">▹</span>
100+ GitHub stars across security projects
</li>

</ul>

</div>

</section>

);

}