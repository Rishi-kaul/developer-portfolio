"use client";

export default function AISidebar({ askAI }){

return(

<div className="ai-sidebar">

<h3 className="sidebar-title">AI Tools</h3>

<button
className="sidebar-btn"
onClick={()=>askAI("Explain BUGOS startup")}
>
BUGOS Startup
</button>

<button
className="sidebar-btn"
onClick={()=>askAI("Show projects")}
>
Projects
</button>

<button
className="sidebar-btn"
onClick={()=>askAI("What security tools does Rishi know")}
>
Skills
</button>

<button
className="sidebar-btn"
onClick={()=>askAI("Why should a company hire Rishi")}
>
Why hire Rishi
</button>

</div>

);

}