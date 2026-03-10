export default function Roles() {

const roles = [

{
icon: "🔵",
title: "SOC Analyst",
skills: [
"Real-time threat monitoring",
"Security alert triage",
"Incident investigation",
"Threat hunting operations"
]
},

{
icon: "🛡️",
title: "Security Engineer",
skills: [
"Security tool deployment",
"Vulnerability management",
"Defense automation",
"Security architecture"
]
},

{
icon: "⚙️",
title: "DevSecOps Engineer",
skills: [
"CI/CD pipeline security",
"Container hardening",
"Infrastructure security",
"Security automation"
]
}

];

return (

<section className="max-w-6xl mx-auto py-28 px-6">

{/* Title */}

<h2 className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-6">
Target Roles
</h2>

<p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
Roles where I can apply defensive security expertise, build detection systems,
and improve infrastructure resilience.
</p>


{/* Cards */}

<div className="grid md:grid-cols-3 gap-8">

{roles.map((role, i) => (

<div
key={i}
className="
group
relative
p-7
rounded-xl
bg-black/60
border border-green-900/40
backdrop-blur-md
transition-all
duration-300
hover:-translate-y-2
hover:border-green-400/40
hover:shadow-[0_0_30px_rgba(0,255,170,0.15)]
"
>

{/* icon */}

<div className="text-3xl mb-4">
{role.icon}
</div>


{/* title */}

<h3 className="text-lg font-semibold text-green-300 mb-4">
{role.title}
</h3>


{/* skills */}

<ul className="space-y-2 text-gray-400 text-sm leading-relaxed">

{role.skills.map((skill, idx) => (

<li key={idx} className="flex gap-2">

<span className="text-green-400 mt-[2px]">▹</span>

<span>{skill}</span>

</li>

))}

</ul>

</div>

))}

</div>

</section>

);

}