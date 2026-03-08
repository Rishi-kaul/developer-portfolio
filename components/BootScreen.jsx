"use client";

import { useEffect, useState } from "react";

export default function BootScreen({ onFinish }) {

  const bootLines = [
    "Booting RishiOS v1.0...",
    "Loading kernel modules...",
    "Initializing security stack...",
    "Starting networking services...",
    "Loading developer profile...",
    "System ready."
  ];

  const [lines, setLines] = useState([]);

  useEffect(() => {

    let i = 0;

    const interval = setInterval(() => {

      setLines((prev) => [...prev, bootLines[i]]);
      i++;

      if (i === bootLines.length) {
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 1000);
      }

    }, 700);

  }, []);

  return (

    <div className="h-screen flex items-center justify-center bg-black text-green-400 font-mono">

      <div>

        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}

      </div>

    </div>
  );
}