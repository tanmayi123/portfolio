// app.js
import Home from "./routes/home.js";
import About from "./routes/about.js";
import Experience from "./routes/experience.js";
import Projects from "./routes/projects.js";
import Skills from "./routes/skills.js";
import Contact from "./routes/contact.js";
import Chatbot from "./routes/chatbot.js";
import Carnival from "./routes/carnival.js";

const app = document.getElementById("app");

function mount() {
  app.innerHTML = "";
  app.appendChild(Home());
  app.appendChild(About());
  app.appendChild(Experience());
  app.appendChild(Projects());
  app.appendChild(Skills());
  app.appendChild(Contact());
  
  // Add carnival as overlay to body (not in app flow)
  const carnivalOverlay = Carnival();
  document.body.appendChild(carnivalOverlay);
  
  // Add chatbot
  document.body.appendChild(Chatbot());
  
  // Carnival entrance button handler
  setTimeout(() => {
    const entranceBtn = document.getElementById('carnival-entrance-btn');
    if (entranceBtn) {
      entranceBtn.addEventListener('click', () => {
        const overlay = document.getElementById('carnival-overlay');
        if (overlay) {
          overlay.style.display = 'flex';
          document.body.style.overflow = 'hidden'; // Disable scrolling
        }
      });
    }
  }, 100);
  
  // start at top
  window.scrollTo(0, 0);
}

window.addEventListener("load", mount);

// Scroll-triggered animations for all sections except home
window.addEventListener('load', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });

  // Observe all sections except home
  const sections = document.querySelectorAll('#about, #experience, #projects, #skills, #contact');
  sections.forEach(section => {
    section.classList.add('scroll-animate');
    observer.observe(section);
  });
});

// Create subtle neural network background
window.addEventListener('load', () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'neural-bg-canvas';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create neural network nodes
  const layers = [
    { nodes: 5, x: 0.15 },
    { nodes: 8, x: 0.35 },
    { nodes: 7, x: 0.65 },
    { nodes: 5, x: 0.85 }
  ];

  const neurons = [];
  layers.forEach((layer, layerIndex) => {
    const spacing = canvas.height / (layer.nodes + 1);
    for (let i = 0; i < layer.nodes; i++) {
      neurons.push({
        x: canvas.width * layer.x,
        y: spacing * (i + 1),
        layer: layerIndex,
        pulse: Math.random() * Math.PI * 2
      });
    }
  });

  function drawNeuralBg() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections (very subtle)
    ctx.strokeStyle = 'rgba(100, 181, 246, 0.08)';
    ctx.lineWidth = 0.5;
    neurons.forEach((neuron, i) => {
      neurons.forEach((target, j) => {
        if (target.layer === neuron.layer + 1) {
          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        }
      });
    });

    // Draw neurons with subtle pulse
    neurons.forEach(neuron => {
      neuron.pulse += 0.02;
      const pulseSize = 2 + Math.sin(neuron.pulse) * 0.5;
      const opacity = 0.2 + Math.sin(neuron.pulse) * 0.1;
      
      ctx.beginPath();
      ctx.arc(neuron.x, neuron.y, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 181, 246, ${opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(drawNeuralBg);
  }
  drawNeuralBg();

  // Handle window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Recalculate neuron positions
    neurons.forEach((neuron) => {
      const layerInfo = layers[neuron.layer];
      const spacing = canvas.height / (layerInfo.nodes + 1);
      neuron.x = canvas.width * layerInfo.x;
      neuron.y = spacing * (neurons.filter(n => n.layer === neuron.layer).indexOf(neuron) + 1);
    });
  });
});