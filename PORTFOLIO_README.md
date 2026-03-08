# 🏴‍☠️ Cybersecurity Professional Portfolio

A modern, interactive developer portfolio built with Next.js 14, React, and Tailwind CSS. Themed with a hacker/cybersecurity aesthetic featuring terminal interfaces, animated skill graphs, and real-time AI chatbot integration.

## ✨ Features

### 🎯 Core Sections
- **Hero** - Landing page with career tagline, social links, and interactive terminal
- **About** - Professional summary with core competencies and recognition highlights
- **Why Hire Me** - Key differentiators (practical experience, continuous learning, CTF achievements)
- **Target Roles** - Clear positioning for SOC Analyst, Security Engineer, DevSecOps Engineer
- **Skills** - Categorized skills showcase with certifications and achievements
- **Skills Graph** - Interactive force-graph visualization of 40+ skills and expertise areas
- **Projects** - Gallery of 9 real GitHub security projects with star counts and links
- **Startup Dashboard** - BUGOS startup pitch with investor interest form
- **GitHub Stats** - Dynamic GitHub analytics and repository highlights
- **AI Chat** - OpenAI-powered chatbot for user inquiries
- **Contact** - Multi-channel contact section with email, LinkedIn, GitHub, CTFLearn

### 🎨 Visual Features
- **Neon Green Cybersecurity Theme** - #00ff9f glow effects and shadows
- **Glassmorphism Design** - Backdrop blur, semi-transparent cards
- **Animations** - Blinking cursor, matrix rain background, card hover effects
- **Boot Screen** - Startup sequence with terminal boot animation
- **Terminal Component** - Interactive command-line interface for navigation
- **Dark Mode** - Black backgrounds with green accents for reduced eye strain

### 🚀 Technical Features
- **Server/Client Components** - Optimized Next.js 14 App Router architecture
- **Dynamic Imports** - Lazy-loaded heavy components (SkillsGraph, Force-Graph)
- **API Integration** - OpenAI Chat API endpoint, Investor form backend
- **Responsive Design** - Mobile-friendly layouts with Tailwind breakpoints
- **Performance Optimized** - Code splitting, image optimization, efficient rendering

## 📁 Project Structure

```
developer-portfolio/
├── app/
│   ├── page.tsx              # Main layout with all sections
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles & animations
│   └── api/
│       ├── chat/             # OpenAI chat endpoint
│       └── investor/         # Investor form handler
├── sections/
│   ├── Hero.jsx              # Landing section
│   ├── About.jsx             # Professional summary
│   ├── WhyHireMe.jsx         # Key differentiators
│   ├── Roles.jsx             # Target positions
│   ├── Skills.jsx            # Skills showcase
│   ├── SkillsGraph.jsx       # Force-graph visualization
│   ├── Projects.jsx          # Project gallery
│   ├── Startup.jsx           # Startup pitch
│   ├── GithubStats.jsx       # GitHub analytics
│   ├── AISection.jsx         # AI chatbot
│   └── Contact.jsx           # Contact information
├── components/
│   ├── Terminal.jsx          # Terminal interface
│   ├── BootScreen.jsx        # Startup animation
│   ├── MatrixBackground.jsx  # Binary rain effect
│   ├── InvestorForm.jsx      # Investor inquiry form
│   ├── StartupDashboard.jsx  # Startup metrics
│   └── Footer.jsx            # Footer section
├── data/
│   ├── projects.js           # Real GitHub projects
│   └── skills.js             # Skills network data
├── public/                   # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.ts           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── README.md                # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18+
- **Styling**: Tailwind CSS 3+
- **Visualization**: react-force-graph-2d with D3
- **AI Integration**: OpenAI API (gpt-4o-mini)
- **TypeScript**: Full type safety
- **Deployment**: Vercel-optimized

## 📊 Skills Showcase

### 🔐 Security & Blue Team (8+ skills)
Wireshark, Nmap, Burp Suite, Metasploit, Trivy, OWASP, IDS/IPS, Reverse Engineering

### ☁️ Cloud & Infrastructure (9+ skills)
AWS, Azure, GCP, Docker, Kubernetes, Linux, VirtualBox, CI/CD, Terraform

### 📊 Monitoring & SIEM (7+ skills)
Splunk, ELK Stack, Prometheus, Grafana, CloudWatch, Security Logs

### 💻 Development & Scripting (9+ skills)
Python, Bash, C, C++, JavaScript, SQL, Git, GitHub, REST APIs

## 🎯 Real GitHub Projects

1. **🧪 Malware Analysis Lab** ⭐17 - VirtualBox threat analysis environment
2. **🔐 ShieldNet** ⭐15 - File integrity monitoring system
3. **🍯 Phantom-Trap** ⭐9 - Honeypot detection system
4. **🌐 Web Security Scanner** ⭐9 - OWASP-focused vulnerability scanner
5. **🔑 SHA1 Password Exploit** ⭐14 - Cryptanalysis demonstration
6. **📊 Honeypot Analytics** ⭐9 - Threat intelligence platform
7. **🛡️ API Security Framework** ⭐9 - DevSecOps testing suite
8. **🔍 Network Scanner** - Network reconnaissance tool
9. **🆕 CVE Research** - Latest security research

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd developer-portfolio

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local

# Add your OpenAI API key
echo "NEXT_PUBLIC_OPENAI_API_KEY=your-api-key-here" >> .env.local
```

### Environment Variables

Create `.env.local` file:

```env
# OpenAI API Configuration
NEXT_PUBLIC_OPENAI_API_KEY=sk-your-key-here

# Optional: Email service (for investor form)
SENDGRID_API_KEY=your-sendgrid-key
SENDER_EMAIL=your-email@example.com
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the portfolio.

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🎨 Customization

### Update Personal Information

**Hero Section** - `sections/Hero.jsx`
```jsx
<p className="text-gray-300">Your Name Here</p>
<p className="text-gray-400">Your Title Here</p>
```

**Contact Links** - `sections/Contact.jsx`
```jsx
Email: your-email@example.com
LinkedIn: your-linkedin-url
GitHub: your-github-profile
```

### Add Your Projects

Edit `data/projects.js`:
```javascript
{
  title: "Project Name",
  description: "Brief description",
  stack: ["Tech1", "Tech2"],
  github: "https://github.com/your-username/repo",
  stars: "14"
}
```

### Customize Colors

Edit `app/globals.css` and `tailwind.config.ts`:
```css
/* Primary theme color */
--neon-green: #00ff9f;

/* Dark backgrounds */
--bg-primary: #050505;
--bg-secondary: #1a1a1a;
```

### Update Skills Graph

Edit `data/skills.js` to add/remove skills and categories:
```javascript
{ id: "New Skill", group: "category_name" },
{ source: "Category", target: "New Skill" }
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: Base styles
- **Tablet**: `md:` Tailwind breakpoints
- **Desktop**: Full layout

Test responsiveness:
```bash
npm run dev
# Open DevTools (F12) and use device emulation
```

## 🔗 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

**Netlify**:
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

**GitHub Pages** (requires custom setup):
```bash
npm run export
# Push static export to gh-pages branch
```

## 🔒 API Integration

### OpenAI Chat API

Endpoint: `/api/chat`
- Handles user messages
- Returns AI responses
- Currently configured for gpt-4o-mini

### Investor Form API

Endpoint: `/api/investor`
- Receives investor inquiries
- Validates form data
- Future: Send email notifications

## 🐛 Troubleshooting

### SkillsGraph Not Rendering
```bash
# Restart dev server
npm run dev

# Clear cache
rm -rf .next node_modules
npm install
```

### API Errors
- Check `.env.local` has valid OpenAI API key
- Verify API rate limits haven't been exceeded
- Check browser console for error messages

### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run build

# Clear Tailwind cache
rm -rf .next
npm run dev
```

## 📈 Performance Tips

1. **Image Optimization** - Use Next.js `<Image>` component
2. **Code Splitting** - Already implemented with dynamic imports
3. **Lazy Loading** - SkillsGraph loads on client only
4. **CSS Classes** - Tailwind purges unused styles in production

## 🔐 Security Practices

- ✅ Environment variables for sensitive keys
- ✅ Type-safe React with TypeScript
- ✅ Validated form inputs
- ✅ CORS headers configured
- ⚠️ TODO: Add rate limiting for API endpoints
- ⚠️ TODO: Implement email verification for forms

## 📚 Learning Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Force-Graph](https://github.com/vasturiano/react-force-graph-2d)
- [OpenAI API](https://platform.openai.com/docs)

## 📝 License

This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio!

## 🤝 Contributing

Suggestions and improvements welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your portfolio variation

## 👋 Connect

- **Email**: rishikaul74@gmail.com
- **LinkedIn**: [linkedin.com/in/rishi-kaul-](https://linkedin.com/in/rishi-kaul-)
- **GitHub**: [github.com/Rishi-kaul](https://github.com/Rishi-kaul)
- **CTFLearn**: [ctflearn.com](https://ctflearn.com)

---

**⚡ Built with passion for cybersecurity and full-stack development. Terminal-inspired, browser-optimized, always learning.**
