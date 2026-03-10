"use client";

import { useEffect,useState } from "react";

export default function AttackSimulation(){

const attacks=[
"Suspicious SSH login attempt",
"Port scanning detected",
"SQL Injection attempt blocked",
"Malware signature detected",
"Brute force attack detected"
];

const [logs,setLogs]=useState([]);

useEffect(()=>{

const interval=setInterval(()=>{

const random=attacks[Math.floor(Math.random()*attacks.length)];

setLogs(l=>[random,...l.slice(0,5)]);

},3000);

return ()=>clearInterval(interval);

},[]);

return(

<div className="soc">

<h3 className="text-green-400 mb-4">
Live Threat Monitor
</h3>

{logs.map((l,i)=>(
<div key={i} className="soc-log">
⚠ {l}
</div>
))}

</div>

)
}