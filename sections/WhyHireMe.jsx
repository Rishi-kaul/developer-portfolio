export default function WhyHireMe() {

  const items = [
    {

      title: "🎯Practical Security Experience",
      text:
        "Built malware analysis labs, file integrity monitoring systems, and detection engineering tools with real-world threat insights. 100+ GitHub stars across security projects."
    },
    {
      title: " 📚 Continuous Learning",
      text:
        "Top 20% in NPTEL Cloud Computing (IIT Kharagpur). Multiple cybersecurity certifications and deep self-driven learning across networking, security engineering, and DevSecOps."
    },
    {
      title: " 🏆 CTF & Security Competitions",
      text:
        "Top 100 in Anveshanam CTF (IIT Jammu & DRDO). Active CTFLearn competitor with strong problem-solving ability under pressure."
    }
  ];

  return (

    <section className="max-w-6xl mx-auto py-24 px-6">

      <h2 className="text-4xl md:text-5xl text-green-400 text-center mb-16 font-semibold">
        Why Hire Me
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {items.map((item, i) => (

          <div
            key={i}
            className="
            group
            relative
            bg-black/60
            p-8
            rounded-2xl
            backdrop-blur-lg
            shadow-lg
            transition
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(0,255,150,0.25)]
            "
          >

            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-green-300 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.text}
            </p>

            {/* Glow overlay */}

            <div
              className="
              absolute inset-0
              rounded-2xl
              opacity-0
              group-hover:opacity-100
              transition
              pointer-events-none
              bg-gradient-to-r
              from-green-500/10
              to-cyan-500/10
              "
            />

          </div>

        ))}

      </div>

    </section>
  );
}