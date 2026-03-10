"use client";

import InvestorForm from "@/components/InvestorForm";
import StartupDashboard from "@/components/StartupDashboard";
import BugosArchitecture from "@/components/BugosArchitecture";/*
import PrototypePreview from "@/components/PrototypePreview";*/
import FundingCounter from "@/components/FundingCounter";
export default function Startup() {

  return (

    <section id="startup" className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-4xl md:text-5xl text-green-400 text-center mb-16 font-semibold">
        BUGOS Startup
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
        Board Universal Gadget Operating System (BUGOS) is a non-invasive laptop
        diagnostic system designed to detect motherboard faults without opening
        the device.
      </p>

      {/* PRODUCT ARCHITECTURE */}

      <div className="grid md:grid-cols-4 gap-6 mb-20">

      
        <BugosArchitecture/>

      </div>


      {/* ROADMAP */}

      <div className="mb-20">

        <h3 className="text-green-400 text-xl mb-8 text-center">
          Startup Roadmap
        </h3>

        <div className="flex justify-between items-center roadmap">

          <Step label="Prototype"/>
          <Step label="Beta"/>
          <Step label="Launch"/>
          <Step label="Scaling"/>

        </div>

      </div>


      {/* FUNDING */}

      <div className="glass-card mb-20">

        <h3 className="text-green-400 text-xl mb-3">
          Seed Funding
        </h3>

        <p className="text-gray-400 mb-6">
          Raising <span className="text-green-400 font-semibold">₹50 Lakhs</span> to build the first production batch.
        </p>

        <div className="flex items-center gap-6 mb-8 flex-wrap">

        <a
          href="mailto:founder@bugos.tech"
          className="btn-primary mr-2"
      >
          Become Investor
      </a>

      <a
      href="https://github.com/Rishi-kaul/Laptop-Diagnostic-Pro"
      target="_blank"
      className="btn-secondary"
    >
      View GitHub
    </a>

    </div>

        {/* PROGRESS BAR */}

        <div>

          <div className="flex justify-between text-gray-400 text-sm mb-2">
            <FundingCounter/>
            <span>Seed Round</span>
            <span>₹0L / ₹50L</span>
          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{ width: "0%" }}
            />

          </div>

        </div>

      </div>


      {/* DASHBOARD + INVESTOR FORM */}

      <div className="grid md:grid-cols-2 gap-12">
        

        <StartupDashboard/>

        <InvestorForm/>

      </div>

    </section>

  );
}


function ArchCard({title}) {

  return (
    <div className="arch-card">
      {title}
    </div>
  )

}

function Step({label}) {

  return (
    <div className="roadmap-step">
      {label}
    </div>
  )

}