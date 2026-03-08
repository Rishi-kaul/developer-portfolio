export default function Roles(){

  return(

    <section className="max-w-6xl mx-auto py-20 px-6">

      <h2 className="text-4xl text-green-400 text-center mb-10">
        🎯 Target Roles
      </h2>

      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Seeking positions where I can apply my defensive security expertise and help build resilient systems.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border border-green-900 p-6 rounded-lg bg-black/50 hover:border-green-400 transition">
          <h3 className="text-green-400 text-xl font-semibold mb-3">🔵 SOC Analyst</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✓ Real-time threat monitoring</li>
            <li>✓ Security alert triage</li>
            <li>✓ Incident investigation</li>
            <li>✓ Threat hunting operations</li>
          </ul>
        </div>

        <div className="border border-green-900 p-6 rounded-lg bg-black/50 hover:border-green-400 transition">
          <h3 className="text-green-400 text-xl font-semibold mb-3">🛡️ Security Engineer</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✓ Security tool deployment</li>
            <li>✓ Vulnerability management</li>
            <li>✓ Defense automation</li>
            <li>✓ Security architecture</li>
          </ul>
        </div>

        <div className="border border-green-900 p-6 rounded-lg bg-black/50 hover:border-green-400 transition">
          <h3 className="text-green-400 text-xl font-semibold mb-3">⚙️ DevSecOps Engineer</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✓ CI/CD pipeline security</li>
            <li>✓ Container hardening</li>
            <li>✓ Infrastructure security</li>
            <li>✓ Security automation</li>
          </ul>
        </div>

      </div>

    </section>

  )

}