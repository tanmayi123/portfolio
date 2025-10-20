export default function Home(){
  const el = document.createElement("section");
  el.className = "section home-section";
  el.id="home";
  el.innerHTML = `
    <!-- Terminal-style intro overlay -->
    <div class="terminal-intro" id="terminal-intro">
      <div class="terminal-content">
        <div class="terminal-line">$ initializing portfolio...</div>
        <div class="terminal-line">$ loading data</div>
        <div class="terminal-line">$ status: ready</div>
        <div class="terminal-line terminal-cursor">$ welcome_</div>
      </div>
    </div>

    <!-- Animated background particles -->
    <div class="particles-bg" id="particles-bg"></div>

    <!-- Floating tech bubbles -->
    <div class="floating-bubbles">
      <div class="tech-bubble" style="left: 10%; top: 20%; animation-delay: 0s;">Python</div>
      <div class="tech-bubble" style="left: 85%; top: 30%; animation-delay: 2s;">SQL</div>
      <div class="tech-bubble" style="left: 15%; top: 70%; animation-delay: 4s;">AWS</div>
      <div class="tech-bubble" style="left: 80%; top: 65%; animation-delay: 1s;">Tableau</div>
      <div class="tech-bubble" style="left: 90%; top: 15%; animation-delay: 3s;">ML</div>
      <div class="tech-bubble" style="left: 5%; top: 85%; animation-delay: 5s;">Snowflake</div>
    </div>

    <!-- Mini data visualization background -->
    <canvas id="data-viz-canvas" class="data-viz-canvas"></canvas>

    <div class="home-hero fade-in-element">
      <div class="hero-left">
        <div class="profile-pic-wrapper">
          <img src="profile.jpeg" alt="Tanmayi Shurpali" class="profile-pic-enhanced" />
          <div class="rotating-border"></div>
        </div>
      </div>
      <div class="hero-right">
        <h1 class="h1">Hi, I'm <span class="gradient-name">Tanmayi Shurpali</span></h1>
        <p class="muted home-description">
          I'm a Data Enthusiast passionate about turning complex data into actionable insights.
          I specialize in analytics, visualization, and building scalable data solutions using Python, SQL, ML based solutions and cloud technologies like AWS and Snowflake.
        </p>
        <p class="muted home-description">
          P.S : If you're a data geek like me, press the "Play Carnival" button to attend the data carnival!!
        <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap">
          <a class="btn accent" href="#projects">View Projects</a>
          <a class="btn accent" href="#contact">Contact Me</a>
          <button class="btn carnival-btn" id="carnival-entrance-btn">🎪 Play Carnival</button>
        </div>
      </div>
    </div>
  `;

  // Terminal intro animation
  setTimeout(() => {
    const terminal = el.querySelector('#terminal-intro');
    if (terminal) {
      terminal.style.opacity = '0';
      setTimeout(() => terminal.style.display = 'none', 800);
    }
  }, 2500);

  // Create floating particles
  const particlesBg = el.querySelector('#particles-bg');
  if (particlesBg) {
    const icons = ['📊', '💻', '📈', '🔍', '⚡', '🎯', '💡', '🚀'];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = icons[Math.floor(Math.random() * icons.length)];
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      particlesBg.appendChild(particle);
    }
  }

  // Mini data visualization
  const canvas = el.querySelector('#data-viz-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dataPoints = [];
    for (let i = 0; i < 50; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dataPoints.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 181, 246, 0.3)';
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < dataPoints.length; i++) {
        for (let j = i + 1; j < dataPoints.length; j++) {
          const dx = dataPoints[i].x - dataPoints[j].x;
          const dy = dataPoints[i].y - dataPoints[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(dataPoints[i].x, dataPoints[i].y);
            ctx.lineTo(dataPoints[j].x, dataPoints[j].y);
            ctx.strokeStyle = `rgba(100, 181, 246, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    animate();
  }

  // Scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-active');
      }
    });
  }, { threshold: 0.1 });

  el.querySelectorAll('.fade-in-element').forEach(element => {
    observer.observe(element);
  });

  return el;
}