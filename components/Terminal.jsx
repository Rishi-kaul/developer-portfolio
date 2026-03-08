"use client"

import { useState } from "react"

export default function Terminal(){

const [input,setInput] = useState("")
const [history,setHistory] = useState([
"RishiOS v1.0 initialized",
"Type 'help' to list commands"
])

const commands = {

help: () =>
`Available commands:
help
about
projects
skills
contact
clear`,

about: () =>
"Cybersecurity professional focused on blue team operations, threat detection and DevSecOps.",

projects: () =>
"ShieldNet | Phantom Trap | Malware Analysis Lab | Web Security Scanner",

skills: () =>
"Wireshark, Nmap, Burp Suite, Docker, Kubernetes, Python, Linux",

contact: () =>
"Email: rishikaul74@gmail.com",

clear: () => "__CLEAR__"

}

const suggestions = Object.keys(commands)
.filter(c => c.startsWith(input))
.slice(0,3)

const handleCommand = () => {

const cmd = input.trim().toLowerCase()

let output

if(commands[cmd]){

output = commands[cmd]()

}else{

output = "Command not found"

}

if(output === "__CLEAR__"){

setHistory([])

}else{

setHistory([...history, `$ ${cmd}`, output])

}

setInput("")

}

return(

<div className="terminal-card">

<div className="terminal-output">

{history.map((line,i)=>(
<p key={i}>{line}</p>
))}

</div>

<div className="terminal-input">

<span>$</span>

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
onKeyDown={(e)=> e.key==="Enter" && handleCommand()}
placeholder="type a command"
/>

</div>

<div className="terminal-suggestions">

{suggestions.map((s,i)=>(
<button
key={i}
onClick={()=>setInput(s)}
>
{s}
</button>
))}

</div>

</div>

)

}