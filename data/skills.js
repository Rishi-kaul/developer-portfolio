const skills = {

nodes: [

{ id: "Rishi", group: "center" },

/* categories */

{ id: "Security", group: "category" },
{ id: "DevOps", group: "category" },
{ id: "Development", group: "category" },
{ id: "Cloud", group: "category" },
{ id: "Monitoring", group: "category" },

/* security & blue team */

{ id: "Wireshark", group: "security" },
{ id: "Nmap", group: "security" },
{ id: "Burp Suite", group: "security" },
{ id: "Metasploit", group: "security" },
{ id: "Trivy", group: "security" },
{ id: "OWASP", group: "security" },
{ id: "IDS/IPS", group: "security" },
{ id: "Reverse Eng", group: "security" },

/* devops & infrastructure */

{ id: "Docker", group: "devops" },
{ id: "Kubernetes", group: "devops" },
{ id: "Git", group: "devops" },
{ id: "GitHub", group: "devops" },
{ id: "Linux", group: "devops" },
{ id: "VirtualBox", group: "devops" },
{ id: "CI/CD", group: "devops" },

/* programming */

{ id: "Python", group: "development" },
{ id: "Bash", group: "development" },
{ id: "C", group: "development" },
{ id: "C++", group: "development" },
{ id: "JavaScript", group: "development" },
{ id: "SQL", group: "development" },

/* cloud & monitoring */

{ id: "AWS", group: "cloud" },
{ id: "Azure", group: "cloud" },
{ id: "GCP", group: "cloud" },
{ id: "Splunk", group: "monitoring" },
{ id: "ELK Stack", group: "monitoring" },
{ id: "Prometheus", group: "monitoring" },
{ id: "Threat Intel", group: "monitoring" }

],

links: [

/* center connections */

{ source: "Rishi", target: "Security" },
{ source: "Rishi", target: "DevOps" },
{ source: "Rishi", target: "Development" },
{ source: "Rishi", target: "Cloud" },
{ source: "Rishi", target: "Monitoring" },

/* security */

{ source: "Security", target: "Wireshark" },
{ source: "Security", target: "Nmap" },
{ source: "Security", target: "Burp Suite" },
{ source: "Security", target: "Metasploit" },
{ source: "Security", target: "Trivy" },
{ source: "Security", target: "OWASP" },
{ source: "Security", target: "IDS/IPS" },
{ source: "Security", target: "Reverse Eng" },

/* devops */

{ source: "DevOps", target: "Docker" },
{ source: "DevOps", target: "Kubernetes" },
{ source: "DevOps", target: "Git" },
{ source: "DevOps", target: "GitHub" },
{ source: "DevOps", target: "Linux" },
{ source: "DevOps", target: "VirtualBox" },
{ source: "DevOps", target: "CI/CD" },

/* development */

{ source: "Development", target: "Python" },
{ source: "Development", target: "Bash" },
{ source: "Development", target: "C" },
{ source: "Development", target: "C++" },
{ source: "Development", target: "JavaScript" },
{ source: "Development", target: "SQL" },

/* cloud */

{ source: "Cloud", target: "AWS" },
{ source: "Cloud", target: "Azure" },
{ source: "Cloud", target: "GCP" },

/* monitoring */

{ source: "Monitoring", target: "Splunk" },
{ source: "Monitoring", target: "ELK Stack" },
{ source: "Monitoring", target: "Prometheus" },
{ source: "Monitoring", target: "Threat Intel" }

]

};

export default skills;
