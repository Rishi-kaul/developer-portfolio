export const careerMap = {

  nodes: [

    { id: "SOC Analyst", group: "role" },
    { id: "Security Engineer", group: "role" },
    { id: "DevSecOps Engineer", group: "role" },

    { id: "Threat Monitoring", group: "skill" },
    { id: "SIEM Monitoring", group: "skill" },
    { id: "Incident Response", group: "skill" },

    { id: "Wireshark", group: "tool" },
    { id: "Splunk", group: "tool" },
    { id: "Docker", group: "tool" },
    { id: "Kubernetes", group: "tool" },

  ],

  links: [

    { source: "SOC Analyst", target: "Threat Monitoring" },
    { source: "SOC Analyst", target: "SIEM Monitoring" },
    { source: "SOC Analyst", target: "Incident Response" },

    { source: "Threat Monitoring", target: "Wireshark" },
    { source: "SIEM Monitoring", target: "Splunk" },

    { source: "DevSecOps Engineer", target: "Docker" },
    { source: "DevSecOps Engineer", target: "Kubernetes" }

  ]


  

};