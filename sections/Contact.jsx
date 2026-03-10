import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact(){

return(

<section className="max-w-6xl mx-auto py-24 px-6 text-center">

<h2 className="text-4xl font-semibold text-green-400 mb-4">
Let's Connect
</h2>

<p className="text-gray-400 max-w-xl mx-auto">
Open to cybersecurity, DevSecOps, and security engineering opportunities.
Feel free to reach out or explore my work.
</p>

<div className="contact-container">

<a
href="mailto:rishikaul74@gmail.com"
className="contact-card"
>

<Mail size={26} className="contact-icon"/>

<h3 className="contact-title">
Email
</h3>

<p className="contact-desc">
Send message
</p>

</a>


<a
href="https://github.com/Rishi-kaul"
target="_blank"
className="contact-card"
>

<Github size={26} className="contact-icon"/>

<h3 className="contact-title">
GitHub
</h3>

<p className="contact-desc">
View projects
</p>

</a>


<a
href="https://linkedin.com/in/rishi-kaul-"
target="_blank"
className="contact-card"
>

<Linkedin size={26} className="contact-icon"/>

<h3 className="contact-title">
LinkedIn
</h3>

<p className="contact-desc">
Professional profile
</p>

</a>

</div>

</section>

)

}