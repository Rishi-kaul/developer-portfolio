"use client";

import InvestorForm from "@/components/InvestorForm";
import StartupDashboard from "@/components/StartupDashboard";

export default function Startup() {

  return (

    <section id="startup" className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl text-green-400 text-center mb-12">
        🚀 Startup Idea
      </h2>

      <div className="bg-black border border-green-900 rounded-xl p-10 shadow-[0_0_40px_rgba(0,255,159,0.15)]">

        {/* PRODUCT NAME */}

        <h3 className="text-3xl font-bold text-green-400 mb-4">
          BUGOS
        </h3>

        <p className="text-gray-400 mb-10">
          <b>Board Universal Gadget Operating System</b> is a non-invasive laptop
          diagnostic tool that allows repair technicians to identify motherboard
          faults without disassembling the laptop.
        </p>

        {/* PROBLEM */}

        <div className="grid md:grid-cols-2 gap-10 mb-12">

          <div>
            <h4 className="text-green-400 text-xl mb-3">
              Problem
            </h4>

            <ul className="text-gray-400 space-y-2">
              <li>• 45 minutes wasted opening laptops</li>
              <li>• 40% misdiagnosis rate</li>
              <li>• Lack of professional diagnostic tools</li>
              <li>• ₹8,750 crore spare parts market with inefficiencies</li>
            </ul>
          </div>

          {/* SOLUTION */}

          <div>
            <h4 className="text-green-400 text-xl mb-3">
              Solution
            </h4>

            <ul className="text-gray-400 space-y-2">
              <li>• Non-invasive diagnostics via USB-C / HDMI / Power</li>
              <li>• Voltage rail analysis</li>
              <li>• Thermal imaging fault detection</li>
              <li>• Cloud-based component database</li>
            </ul>
          </div>

        </div>

        {/* TECHNICAL PROTOTYPE */}

        <div className="mt-12">

          <h4 className="text-green-400 text-xl mb-4">
            Technical Prototype
          </h4>

          <p className="text-gray-400 mb-4">
            The initial prototype of BUGOS is being developed as an embedded
            diagnostic platform capable of reading voltage rails, battery data,
            and system logs without disassembling the laptop.
          </p>

          <p className="text-gray-400">
            The development repository is publicly available for transparency and
            technical collaboration.
          </p>

        </div>

        {/* MARKET */}

        <div className="mb-12">

          <h4 className="text-green-400 text-xl mb-3">
            Market Opportunity
          </h4>

          <p className="text-gray-400">
            India’s laptop spare parts market is valued at
            <b> ₹8,750 crore ($1.05B)</b> and the global repair services industry
            exceeds <b>$8.2B</b>. With over <b>500,000 repair shops in India</b>,
            BUGOS aims to become the first diagnostic tool technicians use before opening a device.
          </p>

        </div>

        {/* FUNDRAISING */}

        <div className="border-t border-green-900 pt-10">

          <h4 className="text-green-400 text-xl mb-4">
            Seed Funding
          </h4>

          <p className="text-gray-400 mb-6">
            We are currently raising <b>₹50 Lakhs</b> to build the first production
            batch and expand the diagnostic database.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="mailto:founder@bugos.tech"
              className="px-6 py-3 bg-green-500 text-black rounded-lg hover:bg-green-400 transition"
            >
              Become an Investor
            </a>

            <a
              href="https://github.com/Rishi-kaul/Laptop-Diagnostic-Pro"
              target="_blank"
              className="px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
            >
              View GitHub Project
            </a>

          </div>

          <div className="mt-10">

            <h4 className="text-green-400 text-xl mb-3">
              Seed Round Progress
            </h4>

            <div className="w-full bg-gray-800 rounded-full h-4">

              <div className="bg-green-400 h-4 rounded-full" style={{width: "20%"}} />

            </div>

            <p className="text-gray-400 mt-2">
    
            </p>

          </div>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-20">

        <StartupDashboard />

        <InvestorForm />

      </div>

    </section>

  );
}