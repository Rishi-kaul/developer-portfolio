"use client";

import { useEffect,useState } from "react";

export default function FundingCounter(){

const target=5000000; // ₹50L
const current=0;

const [count,setCount]=useState(0);

useEffect(()=>{

let start=0;

const interval=setInterval(()=>{

start+=0;

if(start>=current){
start=current;
clearInterval(interval);
}

setCount(start);

},20);

},[]);

return(

<div className="funding">

<h3 className="text-green-400 mb-4">
Live Funding
</h3>

<div className="funding-number">

₹{count.toLocaleString()}

</div>

<div className="progress-bar">

<div
className="progress-fill"
style={{width:`${(current/target)*100}%`}}
/>

</div>

<p className="text-gray-400 mt-2">
Goal ₹50,00,000
</p>

</div>

)

}