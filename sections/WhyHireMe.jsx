export default function WhyHireMe() {

const items = [

{
icon: "🎯",
title: "Practical Security Experience",
text:
"Built malware analysis labs, file integrity monitoring systems, and detection engineering tools with real-world threat insights. Security-focused projects with strong GitHub engagement."
},

{
icon: "📚",
title: "Continuous Learning",
text:
"Top 20% in NPTEL Cloud Computing (IIT Kharagpur). Constantly improving skills across networking, cloud security, and DevSecOps practices."
},

{
icon: "🏆",
title: "CTF & Security Competitions",
text:
"Top 100 in Anveshanam CTF (IIT Jammu & DRDO). Active competitor solving real security challenges under pressure."
}

];

return (

<section className="max-w-6xl mx-auto py-28 px-6">

{/* Title */}

<h2 className="text-4xl md:text-5xl font-bold text-green-400 text-center mb-6">
Why Hire Me
</h2>

<p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
A cybersecurity engineer focused on defensive security, threat detection,
and building resilient systems for modern infrastructure.
</p>


{/* Cards */}

<div className="grid md:grid-cols-3 gap-8">

{items.map((item, i) => (

<div
key={i}
className="
group
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

{/* icon */}

<div className="text-3xl mb-4">
{item.icon}
</div>


{/* title */}

<h3 className="text-lg font-semibold text-green-300 mb-3">
{item.title}
</h3>


{/* text */}

<p className="text-gray-400 text-sm leading-relaxed">
{item.text}
</p>

</div>

))}

</div>

</section>

);

}