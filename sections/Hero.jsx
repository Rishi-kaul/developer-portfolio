import { Github, Linkedin, Mail } from "lucide-react";
import Terminal from "@/components/Terminal";

export default function Hero(){

return(

<section className="cyber-bg min-h-screen flex flex-col justify-center items-center text-center py-20">

<h1 className="hero-name">
Rishi Kaul
</h1>

<p className="text-gray-400 mt-4">
Cybersecurity • Blue Team • DevSecOps
</p>

<div className="flex gap-4 mt-8">

<a href="mailto:rishikaul74@gmail.com" className="card flex items-center gap-2">
<Mail size={18}/> Email
</a>

<a href="https://github.com/Rishi-kaul" className="card flex items-center gap-2">
<Github size={18}/> GitHub
</a>

<a href="https://linkedin.com/in/rishi-kaul-" className="card flex items-center gap-2">
<Linkedin size={18}/> LinkedIn
</a>

</div>

<div className="mt-16">
<Terminal />
</div>

</section>

)

}