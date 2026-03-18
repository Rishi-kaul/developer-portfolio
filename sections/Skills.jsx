export default function Skills() {

const skillCategories = [

{
name: "🔐 Security",
skills: ["Wireshark","Nmap","Burp Suite","Metasploit","OWASP","Threat Intel"]
},

{
name: "☁️ Cloud",
skills: ["AWS","Azure","GCP","Docker","Kubernetes","Terraform"]
},

{
name: "📊 Monitoring",
skills: ["Splunk","ELK","Prometheus","Grafana","CloudWatch"]
},

{
name: "💻 Development",
skills: ["Python","Bash","C/C++","JavaScript","SQL","Git"]
}

];

return (

<section className="max-w-6xl mx-auto py-24 px-6">

<h2 className="text-4xl font-bold text-green-400 text-center mb-6">
Skills & Expertise
</h2>

<p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
Core technologies used for defensive security,
infrastructure monitoring and secure development.
</p>


{/* Skill Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

{skillCategories.map((category, idx) => (

<div
key={idx}
className="
p-6
rounded-xl
bg-black/60
backdrop-blur-lg
shadow-[0_0_25px_rgba(0,255,170,0.08)]
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_0_30px_rgba(0,255,170,0.2)]
"
>

<h3 className="text-green-300 font-semibold mb-4 text-lg flex items-center gap-2">
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
text-green-300
transition
hover:bg-green-500/20
hover:shadow-[0_0_8px_rgba(0,255,170,0.4)]
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

<div className="mt-14 flex flex-wrap justify-center gap-4 text-sm">

<span className="cert-pill">Top 20% NPTEL Cloud (IIT Kharagpur)</span>
<span className="cert-pill">Top 100 Anveshanam CTF</span>
<span className="cert-pill">CTFLearn • HackTheBox • TryHackMe</span>
<span className="cert-pill">100+ GitHub Stars</span>

</div>

</section>

);

}