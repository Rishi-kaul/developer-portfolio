export default function About(){

return(

<section className="max-w-6xl mx-auto py-28 px-6 text-center">

<h2 className="text-4xl font-bold text-green-400 mb-6">
Expertise
</h2>

<p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
Cybersecurity professional specializing in defensive security,
threat detection, and resilient infrastructure protection across
modern cloud and enterprise environments.
</p>


{/* SKILL TAGS */}

<div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">

<span className="skill-pill">Blue Team Operations</span>

<span className="skill-pill">SIEM Monitoring</span>

<span className="skill-pill">Threat Detection</span>

<span className="skill-pill">DevSecOps</span>

<span className="skill-pill">Cloud Security</span>

<span className="skill-pill">Network Security</span>

<span className="skill-pill">Incident Response</span>

<span className="skill-pill">Security Automation</span>

</div>

</section>

)

}