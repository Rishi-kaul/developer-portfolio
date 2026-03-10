"use client";

import { useEffect, useState } from "react";
import { careerMap } from "@/data/careerMap";

export default function CareerMap() {

  const [Graph, setGraph] = useState(null);

  useEffect(() => {
    import("react-force-graph-2d").then(mod => {
      setGraph(() => mod.default);
    });
  }, []);

  if (!Graph) return null;

  const colors = {
    role: "#00ffa6",
    skill: "#3b82f6",
    tool: "#f59e0b",
    project: "#ef4444"
  };

  return (

    <section className="max-w-6xl mx-auto py-24 px-6">

      <h2 className="text-4xl text-green-400 text-center mb-4">
        Cyber Career Map
      </h2>

      <p className="text-gray-400 text-center mb-12">
        Interactive visualization of roles, skills, and technologies.
      </p>

      <div className="bg-black/60 rounded-2xl p-6 backdrop-blur-lg shadow-[0_0_40px_rgba(0,255,150,0.15)]">

        <Graph
          graphData={careerMap}

          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.004}

          nodeCanvasObject={(node, ctx, globalScale) => {

            const label = node.id;
            const fontSize = 14 / globalScale;

            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            const color = colors[node.group] || "#00ffa6";

            // glowing node
            ctx.beginPath();
            ctx.arc(node.x, node.y, 7, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 15;
            ctx.fill();

            // label
            ctx.shadowBlur = 0;
            ctx.fillStyle = "#00ffa6";
            ctx.fillText(label, node.x, node.y + 15);

          }}

        />

      </div>

    </section>
  );
}