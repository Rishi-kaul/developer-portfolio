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
<div className="hero-links">

<a
href="mailto:rishikaul74@gmail.com"
className="hero-btn"
>

<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-.5a.5.5 0 0 0-.5.5v.217l6.5 3.9 6.5-3.9V4a.5.5 0 0 0-.5-.5H2zm13 2.383l-4.708 2.825L15 11.383V5.883zM14.247 12l-4.709-2.825L8 10.417l-1.538-1.242L1.753 12H14.247zM1 11.383l4.708-2.675L1 5.883v5.5z"/>
</svg>

Email

</a>


<a
href="https://github.com/Rishi-Kaul"
target="_blank"
className="hero-btn"
>
GitHub
</a>


<a
href="https://linkedin.com"
target="_blank"
className="hero-btn"
>
LinkedIn
</a>

</div>
<div className="mt-16">
<Terminal />
</div>

</section>

)

}