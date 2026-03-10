"use client";

import { useState, useRef, useEffect } from "react";

export default function AIChat({ externalPrompt }) {

const [message, setMessage] = useState("");
const [chat, setChat] = useState([]);
const [loading, setLoading] = useState(false);

const messagesEndRef = useRef(null);

/* -----------------------------
AUTO SCROLL TO BOTTOM
----------------------------- */

useEffect(() => {
messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [chat, loading]);

/* -----------------------------
SEND MESSAGE
----------------------------- */

async function send(msgOverride){

const msg = msgOverride || message;

if(!msg) return;

const user = { role:"user", text:msg };

setChat(c => [...c, user]);

setMessage("");

setLoading(true);

try{

const res = await fetch("/api/agent",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({ message: msg })
});

const data = await res.json();

setChat(c => [...c,{
role:"ai",
text:data.reply
}]);

}catch{

setChat(c => [...c,{
role:"ai",
text:"⚠️ AI service temporarily unavailable."
}]);

}

setLoading(false);

}

/* -----------------------------
EXTERNAL PROMPT FROM SIDEBAR
----------------------------- */

useEffect(()=>{

if(externalPrompt){
send(externalPrompt);
}

},[externalPrompt]);

/* -----------------------------
UI
----------------------------- */

return(

<div className="chat-container">

{/* ------------------ MESSAGES ------------------ */}

<div className="chat-messages">

{chat.length === 0 && (

<p className="chat-empty">
Ask about projects, cybersecurity skills, or the BUGOS startup.
</p>

)}

{chat.map((m,i)=>(

<div
key={i}
className={`chat-bubble ${m.role}`}
>

<div className="chat-text">
{m.text}
</div>

</div>

))}

{loading && (

<div className="chat-bubble ai">
AI is thinking...
</div>

)}

<div ref={messagesEndRef} />

</div>

{/* ------------------ INPUT ------------------ */}

<div className="chat-input">

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ask about BUGOS, projects, or cybersecurity..."
onKeyDown={(e)=> e.key === "Enter" && send() }
/>

<button onClick={()=>send()}>
Send
</button>

</div>

</div>

);

}