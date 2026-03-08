"use client";

import { useEffect, useState } from "react";
import skills from "@/data/skills";

export default function SkillsGraph() {

  const [Graph, setGraph] = useState(null);

  useEffect(() => {
    import("react-force-graph-2d").then((mod) => {
      setGraph(() => mod.default);
    });
  }, []);

  if (!Graph) {
    return (
      <section className="h-screen flex items-center justify-center text-green-400">
        Loading Skill Graph...
      </section>
    );
  }

  return (

    <section id="skills" className="h-screen">

      <h2 className="text-4xl text-center text-green-400 mb-10">
        Skill Network
      </h2>

      <Graph
        graphData={skills}
        backgroundColor="#050505"

        nodeAutoColorBy="group"

        linkColor={() => "rgba(0,255,159,0.2)"}

        linkDirectionalParticles={3}
        linkDirectionalParticleSpeed={0.004}
        linkDirectionalParticleWidth={2}

        cooldownTicks={100}

        d3VelocityDecay={0.25}
        d3AlphaDecay={0.01}

        nodeCanvasObject={(node, ctx, globalScale) => {

          const label = node.id;
          const fontSize = 12 / globalScale;

          ctx.font = `${fontSize}px monospace`;

          ctx.fillStyle = "#00ff9f";

          ctx.shadowColor = "#00ff9f";
          ctx.shadowBlur = 10;

          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI, false);
          ctx.fill();

          ctx.shadowBlur = 0;

          ctx.fillStyle = "#9fffd6";

          ctx.fillText(label, node.x + 10, node.y + 4);
        }}

        nodePointerAreaPaint={(node, color, ctx) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
          ctx.fill();
        }}

        onNodeClick={(node) => {
          alert("Skill: " + node.id);
        }}

      />

    </section>
  );
}
