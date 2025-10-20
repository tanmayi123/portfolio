export default function FerrisWheel() {
  const el = document.createElement('div');
  el.className = 'ferris-game';
  
  const skills = [
    {
      name: "Python 🐍",
      challenge: {
        question: "What does this Python code output?<br><code>result = [x**2 for x in [2, 4, 6]]</code>",
        options: ["[2, 4, 6]", "[4, 16, 36]", "[4, 8, 12]", "Error"],
        correct: 1,
        explanation: "List comprehension squares each element: 2²=4, 4²=16, 6²=36"
      },
      project: "Used in Customer Segmentation for data processing!"
    },
    {
      name: "SQL 🗄️",
      challenge: {
        question: "Which finds customers who spent over $1000?",
        options: [
          "SELECT * FROM orders WHERE total > 1000",
          "SELECT * FROM orders HAVING total > 1000",
          "GET * FROM orders WHERE total > 1000",
          "FIND orders WHERE total > 1000"
        ],
        correct: 0,
        explanation: "WHERE clause filters rows. HAVING is for aggregated data."
      },
      project: "Built complex SQL queries in P2P Lending System!"
    },
    {
      name: "Data Viz 📊",
      challenge: {
        question: "Best chart to show age distribution?",
        options: ["Pie Chart", "Histogram", "Line Chart", "Scatter Plot"],
        correct: 1,
        explanation: "Histograms show frequency distributions across ranges."
      },
      project: "Created 10+ Tableau dashboards at Fidelity!"
    },
    {
      name: "Machine Learning 🤖",
      challenge: {
        question: "K-Means clustering is used for?",
        options: [
          "Predicting continuous values",
          "Grouping similar data points",
          "Classification with labels",
          "Time series forecasting"
        ],
        correct: 1,
        explanation: "K-Means groups unlabeled data into clusters based on similarity."
      },
      project: "Used K-Means in Customer Segmentation project!"
    },
    {
      name: "Cloud ☁️",
      challenge: {
        question: "What is AWS S3 primarily used for?",
        options: [
          "Running virtual machines",
          "Object storage",
          "Database queries",
          "Email services"
        ],
        correct: 1,
        explanation: "S3 (Simple Storage Service) is for object/file storage."
      },
      project: "Optimized S3 ingestion at AWS, improving speed 25%!"
    },
    {
      name: "Data Cleaning 🧹",
      challenge: {
        question: "You have 1000 rows with 100 null values in 'age' column. Best approach?",
        options: [
          "Delete all 100 rows",
          "Fill with mean/median",
          "Leave as null",
          "Set all to 0"
        ],
        correct: 1,
        explanation: "Filling with mean/median preserves data while handling nulls appropriately."
      },
      project: "Cleaned messy eCommerce data in multiple projects!"
    },
    {
      name: "Statistics 📈",
      challenge: {
        question: "Correlation of 0.9 means:",
        options: [
          "90% causation",
          "Strong positive relationship",
          "Weak relationship",
          "No relationship"
        ],
        correct: 1,
        explanation: "Correlation near +1 shows strong positive relationship (but not causation!)."
      },
      project: "Statistical analysis in Early Warning System project!"
    },
    {
      name: "ETL 🔄",
      challenge: {
        question: "ETL stands for:",
        options: [
          "Extract, Transform, Load",
          "Execute, Test, Launch",
          "Evaluate, Train, Learn",
          "Export, Transfer, Link"
        ],
        correct: 0,
        explanation: "ETL: Extract data from sources, Transform it, Load to destination."
      },
      project: "Built ETL workflows reducing manual work 20%!"
    }
  ];
  
  let currentSkillIndex = -1;
  let spinning = false;
  
  el.innerHTML = `
    <div class="ferris-container">
      <h3>🎡 Spin the Data Skills Wheel!</h3>
      <p class="game-instructions">Land on a skill and answer the challenge</p>
      
      <div class="ferris-wheel-wrapper">
        <canvas id="ferris-canvas" width="500" height="500"></canvas>
        <button class="spin-btn" id="spin-btn">SPIN! 🎡</button>
      </div>
      
      <div class="challenge-display" id="challenge-display"></div>
    </div>
  `;
  
  setTimeout(() => {
    const canvas = el.querySelector('#ferris-canvas');
    const ctx = canvas.getContext('2d');
    const spinBtn = el.querySelector('#spin-btn');
    const challengeDisplay = el.querySelector('#challenge-display');
    
    let rotation = 0;
    
    function drawWheel() {
      const centerX = 250;
      const centerY = 250;
      const radius = 180;
      const sliceAngle = (2 * Math.PI) / skills.length;
      
      ctx.clearRect(0, 0, 500, 500);
      
      // Draw wheel slices
      skills.forEach((skill, i) => {
        const startAngle = i * sliceAngle + rotation;
        const endAngle = startAngle + sliceAngle;
        
        // Slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        
        // Alternate colors
        ctx.fillStyle = i % 2 === 0 ? 'rgba(100, 181, 246, 0.3)' : 'rgba(167, 139, 250, 0.3)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Text
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + sliceAngle / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(skill.name, radius * 0.65, 5);
        ctx.restore();
      });
      
      // Center circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(100, 181, 246, 0.8)';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Pointer at top
      ctx.beginPath();
      ctx.moveTo(centerX, 30);
      ctx.lineTo(centerX - 15, 60);
      ctx.lineTo(centerX + 15, 60);
      ctx.closePath();
      ctx.fillStyle = '#ff6b9d';
      ctx.fill();
    }
    
    drawWheel();
    
    spinBtn.addEventListener('click', () => {
      if (spinning) return;
      
      spinning = true;
      spinBtn.disabled = true;
      spinBtn.textContent = 'Spinning...';
      
      const spins = 5 + Math.random() * 3;
      const finalRotation = spins * 2 * Math.PI + (Math.random() * 2 * Math.PI);
      const duration = 3000;
      const startTime = Date.now();
      const startRotation = rotation;
      
      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing
        const easeOut = 1 - Math.pow(1 - progress, 3);
        rotation = startRotation + finalRotation * easeOut;
        
        drawWheel();
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Determine which skill landed
          const normalizedRotation = rotation % (2 * Math.PI);
          const sliceAngle = (2 * Math.PI) / skills.length;
          currentSkillIndex = Math.floor((2 * Math.PI - normalizedRotation) / sliceAngle) % skills.length;
          
          showChallenge();
          spinning = false;
          spinBtn.disabled = false;
          spinBtn.textContent = 'SPIN AGAIN! 🎡';
        }
      }
      
      animate();
    });
    
    function showChallenge() {
      const skill = skills[currentSkillIndex];
      
      challengeDisplay.innerHTML = `
        <div class="challenge-card">
          <h4>${skill.name} Challenge</h4>
          <p class="challenge-question">${skill.challenge.question}</p>
          <div class="challenge-options">
            ${skill.challenge.options.map((option, i) => `
              <button class="option-btn" data-index="${i}">${option}</button>
            `).join('')}
          </div>
          <div class="challenge-result" id="challenge-result"></div>
          <div class="challenge-project" style="display: none;">
            💡 <strong>In my work:</strong> ${skill.project}
          </div>
        </div>
      `;
      
      const optionBtns = challengeDisplay.querySelectorAll('.option-btn');
      const resultDiv = challengeDisplay.querySelector('#challenge-result');
      const projectDiv = challengeDisplay.querySelector('.challenge-project');
      
      optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const chosenIndex = parseInt(this.getAttribute('data-index'));
          const correct = chosenIndex === skill.challenge.correct;
          
          optionBtns.forEach(b => b.disabled = true);
          
          if (correct) {
            this.classList.add('correct');
            resultDiv.innerHTML = `
              <div class="result-correct">
                ✅ Correct! ${skill.challenge.explanation}
              </div>
            `;
          } else {
            this.classList.add('wrong');
            optionBtns[skill.challenge.correct].classList.add('correct');
            resultDiv.innerHTML = `
              <div class="result-wrong">
                ❌ Not quite. ${skill.challenge.explanation}
              </div>
            `;
          }
          
          projectDiv.style.display = 'block';
        });
      });
    }
  }, 100);
  
  return el;
}