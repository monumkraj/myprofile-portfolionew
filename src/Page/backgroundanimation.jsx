import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function CosmicNeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ------------------
    // Stars (cosmic)
    // ------------------
    const stars = [];
    const starCount = 250;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 1.5 + 0.5,
        color: `hsl(${Math.random() * 360}, 80%, 80%)`,
      });
    }

    // ------------------
    // Shooting stars
    // ------------------
    const shootingStars = [];
    for (let i = 0; i < 5; i++) {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 150 + 50,
        speed: Math.random() * 15 + 10,
        angle: Math.random() * 0.3 - 0.15,
        opacity: Math.random(),
      });
    }

    // ------------------
    // Neural network nodes
    // ------------------
    const neurons = [];
    const neuronCount = 50; // nodes for neural connections
    const maxConnectDistance = 180;

    for (let i = 0; i < neuronCount; i++) {
      neurons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: 2 + Math.random() * 2,
      });
    }

    // ------------------
    // Draw function
    // ------------------
    const draw = () => {
      // Background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "#0e0e0fff");
      gradient.addColorStop(0.5, "#080808ff");
      gradient.addColorStop(1, "#020202ff");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Sun in center
      const sunRadius = 80;
      const sunGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        sunRadius
      );
      sunGradient.addColorStop(0, "#FFD700");
      sunGradient.addColorStop(0.3, "#FF8C00");
      sunGradient.addColorStop(1, "rgba(255,140,0,0)");
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.fill();

      // ------------------
      // Draw stars
      // ------------------
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = s.color;
        ctx.fill();

        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;
      });

      // ------------------
      // Draw shooting stars
      // ------------------
      shootingStars.forEach((sh) => {
        ctx.save();
        ctx.translate(sh.x, sh.y);
        ctx.rotate(sh.angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(sh.length, 0);
        ctx.strokeStyle = `rgba(255,255,255,${sh.opacity})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#fff";
        ctx.stroke();
        ctx.restore();

        sh.x += sh.speed * Math.cos(sh.angle);
        sh.y += sh.speed * Math.sin(sh.angle);
        if (sh.x > canvas.width || sh.y > canvas.height) {
          sh.x = Math.random() * canvas.width;
          sh.y = Math.random() * canvas.height / 2;
          sh.opacity = Math.random();
        }
      });

      // ------------------
      // Draw neurons
      // ------------------
      neurons.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.9)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "cyan";
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        // Bounce edges
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // ------------------
      // Connect neurons (neural network lines)
      // ------------------
      for (let i = 0; i < neuronCount; i++) {
        const n1 = neurons[i];
        for (let j = i + 1; j < neuronCount; j++) {
          const n2 = neurons[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < maxConnectDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,255,255,${1 - dist / maxConnectDistance})`;
            ctx.lineWidth = 0.6;
            ctx.shadowBlur = 4;
            ctx.shadowColor = "cyan";
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
}

export default CosmicNeuralBackground;
