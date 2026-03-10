"use client";

import Link from "next/link";

export default function Navbar() {

return (

<nav className="ai-navbar">

<div className="ai-navbar-container">

{/* Logo */}

<div className="ai-logo">

<span className="logo-glow">Rishi Kaul</span>

</div>

{/* Links */}

<div className="ai-links">

<Link href="/">Home</Link>

<Link href="/#projects">Projects</Link>

<Link href="/startup">Startup</Link>
<Link href="/ai">AI Assistant</Link>

<Link href="/#contact">Contact</Link>

<a
href="https://github.com/Rishi-kaul"
target="_blank"
>
GitHub
</a>

</div>

{/* AI Status */}

<div className="ai-status">

<span className="ai-dot"></span>

AI Online

</div>

</div>

</nav>

)

}