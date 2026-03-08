export default function StartupDashboard() {

  const fundingGoal = 5000000;
  const raised = 1000000;

  const progress = (raised / fundingGoal) * 100;

  return (

    <div className="border border-green-900 p-6 rounded-xl bg-black">

      <h3 className="text-green-400 text-2xl mb-6">
        Startup Dashboard
      </h3>

      <div className="space-y-6">

        {/* Funding */}

        <div>
          <p className="text-green-400">
            Seed Funding Progress
          </p>

          <div className="w-full bg-gray-800 h-4 rounded mt-2">
            <div
              className="bg-green-400 h-4 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>

        
        </div>

        {/* Prototype */}

        <div>
          <p className="text-green-400">
            Prototype Progress
          </p>
          <p className="text-gray-400">
            Hardware Prototype v1 – 60% Complete
          </p>
        </div>

        {/* Units */}

        <div>
          <p className="text-green-400">
            Units Planned
          </p>
          <p className="text-gray-400">
            First batch: 500 units
          </p>
        </div>

        {/* Market */}

        <div>
          <p className="text-green-400">
            Market Size
          </p>
          <p className="text-gray-400">
            ₹8,750 Cr India Laptop Spare Parts Market
          </p>
        </div>

      </div>

    </div>

  );
}