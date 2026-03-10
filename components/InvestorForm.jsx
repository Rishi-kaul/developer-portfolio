"use client";

export default function InvestorForm(){

  return(

    <div className="glass-card">

      <h3 className="text-green-400 text-xl mb-6">
        Investor Interest
      </h3>

      <form className="space-y-4">

        <input
          placeholder="Name"
          className="form-input"
        />

        <input
          placeholder="Email"
          className="form-input"
        />

        <input
          placeholder="Investment Amount"
          className="form-input"
        />

        <textarea
          placeholder="Message"
          className="form-input"
        />

        <button className="btn-primary w-full">
          Submit Interest
        </button>

      </form>

    </div>

  )

}