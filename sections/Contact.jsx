import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact(){

return(

<section className="max-w-5xl mx-auto py-24 text-center">

<h2 className="section-title">
Let's Connect
</h2>

<div className="grid md:grid-cols-3 gap-6 mt-10">

<a href="mailto:rishikaul74@gmail.com" className="card">
<Mail className="mx-auto mb-3"/>
<p>Email</p>
</a>

<a href="https://github.com/Rishi-kaul" className="card">
<Github className="mx-auto mb-3"/>
<p>GitHub</p>
</a>

<a href="https://linkedin.com/in/rishi-kaul-" className="card">
<Linkedin className="mx-auto mb-3"/>
<p>LinkedIn</p>
</a>

</div>

</section>

)

}