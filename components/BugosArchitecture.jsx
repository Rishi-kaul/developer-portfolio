"use client";

export default function BugosArchitecture(){

const blocks = [
"Laptop Hardware",
"BUGOS Hardware",
"Diagnostic Engine",
"Cloud Database"
];

return(

<div className="architecture">

{blocks.map((b,i)=>(
<div key={i} className="arch-node">

{b}

{i !== blocks.length-1 && <div className="arch-line"/>}

</div>
))}

</div>

)

}