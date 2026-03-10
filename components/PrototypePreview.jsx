"use client";

import { useState } from "react";

export default function PrototypePreview(){

const [step,setStep]=useState(0);

const steps=[
"Connect Laptop",
"Scan Hardware",
"Analyze Voltage Rails",
"Detect Fault"
];

return(

<div className="prototype">

<h3 className="text-green-400 text-xl mb-4">
Prototype Preview
</h3>

<div className="prototype-box">

{steps[step]}

</div>

<div className="flex gap-3 mt-6">

<button
className="btn-secondary"
onClick={()=>setStep((step+1)%steps.length)}
>
Next Step
</button>

</div>

</div>

)

}