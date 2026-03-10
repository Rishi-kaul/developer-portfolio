"use client";

import { useState } from "react";
import AIChat from "@/components/AIChat";
import AISidebar from "@/components/AISidebar";

export default function AIPage(){

const [prompt,setPrompt]=useState("");

function askAI(text){
setPrompt(text);
}

return(

<div className="ai-layout">

<AISidebar askAI={askAI}/>

<AIChat externalPrompt={prompt}/>

</div>

);

}