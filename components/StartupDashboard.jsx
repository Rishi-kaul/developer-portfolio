export default function StartupDashboard(){

  return(

    <div className="glass-card">

      <h3 className="text-green-400 text-xl mb-6">
        Startup Dashboard
      </h3>

      <div className="space-y-4 text-gray-400">

        <DashboardItem label="Hardware Prototype" value="v1 — 60% Complete"/>
        <DashboardItem label="Units Planned" value="First batch: 500"/>
        <DashboardItem label="Market Size" value="₹8,750Cr India Laptop Repair Market"/>
        <DashboardItem label="Technicians Targeted" value="500,000+" />

      </div>

    </div>

  )

}

function DashboardItem({label,value}){

  return(

    <div className="flex justify-between">

      <span>{label}</span>

      <span className="text-green-400">
        {value}
      </span>

    </div>

  )

}