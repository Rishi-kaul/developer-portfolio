export default function WhyHireMe(){

  return(

    <section className="max-w-6xl mx-auto py-20 px-6">

      <h2 className="text-4xl text-green-400 text-center mb-12">
        Why Hire Me
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="border border-green-900 p-6 rounded-lg bg-black/50 hover:border-green-400 transition">
          <h3 className="text-green-400 mb-3 text-xl font-semibold">🎯 Practical Experience</h3>
          <p className="text-gray-400">
            Built <b>malware analysis labs</b>, <b>security monitoring tools</b>, and <b>detection engineering systems</b> with real-world threat insights. 100+ GitHub stars across security projects.
          </p>
        </div>

        <div className="border border-green-900 p-6 rounded-lg bg-black/50 hover:border-green-400 transition">
          <h3 className="text-green-400 mb-3 text-xl font-semibold">📚 Continuous Learning</h3>
          <p className="text-gray-400">
            <b>Top 20% in NPTEL</b> Cloud Computing (IIT Kharagpur). Multiple <b>industry certifications</b> in cybersecurity and networking. Self-taught security skills with demonstrated expertise.
          </p>
        </div>

        <div className="border border-green-900 p-6 rounded-lg bg-black/50 hover:border-green-400 transition">
          <h3 className="text-green-400 mb-3 text-xl font-semibold">🏆 CTF Competitor</h3>
          <p className="text-gray-400">
            <b>Top 100 in Anveshanam CTF</b> (IIT Jammu & DRDO). Active CTFLearn participant. Problem-solving mindset and proven ability to work under pressure.
          </p>
        </div>

      </div>

    </section>

  )

}