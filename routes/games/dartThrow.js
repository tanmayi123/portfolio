export default function DartThrow() {
  const el = document.createElement('div');
  el.className = 'dart-game';
  
  const scenarios = [
    { 
      question: "Ice cream sales vs. Temperature", 
      answer: 0.85, 
      explanation: "Strong positive correlation! As temperature rises, ice cream sales increase.",
      range: "high-positive"
    },
    { 
      question: "Study hours vs. Test scores", 
      answer: 0.65, 
      explanation: "Moderate positive correlation. More study generally means better scores!",
      range: "moderate-positive"
    },
    { 
      question: "Exercise frequency vs. Body weight", 
      answer: -0.6, 
      explanation: "Moderate negative correlation. More exercise typically reduces weight.",
      range: "moderate-negative"
    },
    { 
      question: "Shoe size vs. Intelligence", 
      answer: 0.0, 
      explanation: "No correlation! These two variables are completely unrelated.",
      range: "no-correlation"
    },
    { 
      question: "Hours of sleep vs. Productivity", 
      answer: 0.7, 
      explanation: "Strong positive correlation! Better sleep = better productivity.",
      range: "high-positive"
    }
  ];
  
  let currentRound = 0;
  let score = 0;
  
  el.innerHTML = `
    <div class="dart-container">
      <h3>🎯 Correlation Dart Throw</h3>
      <p class="game-instructions">Throw darts at the correlation value! Closer = More points</p>
      
      <div class="dart-stats">
        <div class="stat">Round: <span id="round">1</span>/${scenarios.length}</div>
        <div class="stat">Score: <span id="score">0</span></div>
      </div>
      
      <div class="scenario-display">
        <h4 id="scenario-question">${scenarios[0].question}</h4>
        <p class="hint">What's the correlation coefficient? (-1.0 to +1.0)</p>
      </div>
      
      <div class="dartboard" id="dartboard">
        <svg viewBox="0 0 400 400" class="dartboard-svg">
          <!-- Dartboard circles -->
          <circle cx="200" cy="200" r="180" fill="rgba(100, 181, 246, 0.1)" stroke="var(--accent)" stroke-width="2"/>
          <circle cx="200" cy="200" r="140" fill="rgba(100, 181, 246, 0.15)" stroke="var(--accent)" stroke-width="2"/>
          <circle cx="200" cy="200" r="100" fill="rgba(100, 181, 246, 0.2)" stroke="var(--accent)" stroke-width="2"/>
          <circle cx="200" cy="200" r="60" fill="rgba(100, 181, 246, 0.25)" stroke="var(--accent)" stroke-width="2"/>
          <circle cx="200" cy="200" r="20" fill="var(--accent)" stroke="white" stroke-width="2"/>
          
          <!-- Correlation labels -->
          <text x="200" y="30" text-anchor="middle" fill="var(--fg)" font-size="14">+1.0</text>
          <text x="370" y="205" text-anchor="middle" fill="var(--fg)" font-size="14">+0.5</text>
          <text x="200" y="205" text-anchor="middle" fill="var(--fg)" font-size="16" font-weight="bold">0</text>
          <text x="30" y="205" text-anchor="middle" fill="var(--fg)" font-size="14">-0.5</text>
          <text x="200" y="380" text-anchor="middle" fill="var(--fg)" font-size="14">-1.0</text>
          
          <!-- Dart will be added here -->
          <g id="dart-group"></g>
        </svg>
      </div>
      
      <div class="result-display" id="result-display"></div>
      
      <button class="next-btn" id="next-btn" style="display: none;">Next Round →</button>
    </div>
  `;
  
  setTimeout(() => {
    const dartboard = el.querySelector('#dartboard svg');
    const dartGroup = el.querySelector('#dart-group');
    const resultDisplay = el.querySelector('#result-display');
    const nextBtn = el.querySelector('#next-btn');
    const roundDisplay = el.querySelector('#round');
    const scoreDisplay = el.querySelector('#score');
    const questionDisplay = el.querySelector('#scenario-question');
    
    dartboard.addEventListener('click', (e) => {
      if (nextBtn.style.display === 'flex') return; // Already thrown
      
      const rect = dartboard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate correlation value based on position
      const centerX = 200;
      const centerY = 200;
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      
      // Map position to correlation (-1 to +1)
      // Top = +1, Bottom = -1, Center = 0
      const normalizedY = (y - 200) / 180; // -1 to +1
      const thrownValue = -normalizedY; // Invert so top is positive
      
      // Add dart to board
      dartGroup.innerHTML = `
        <g transform="translate(${x}, ${y})">
          <line x1="0" y1="0" x2="0" y2="-20" stroke="#ff6b9d" stroke-width="3"/>
          <circle cx="0" cy="0" r="5" fill="#ff6b9d"/>
        </g>
      `;
      
      // Calculate score
      const correctValue = scenarios[currentRound].answer;
      const difference = Math.abs(thrownValue - correctValue);
      const roundScore = Math.max(0, 100 - Math.round(difference * 100));
      score += roundScore;
      
      // Show result
      resultDisplay.innerHTML = `
        <div class="result-card ${roundScore > 70 ? 'good' : roundScore > 40 ? 'okay' : 'miss'}">
          <div class="result-thrown">You threw: ${thrownValue.toFixed(2)}</div>
          <div class="result-actual">Actual: ${correctValue.toFixed(2)}</div>
          <div class="result-score">+${roundScore} points!</div>
          <div class="result-explanation">${scenarios[currentRound].explanation}</div>
        </div>
      `;
      
      scoreDisplay.textContent = score;
      nextBtn.style.display = 'flex';
    });
    
    nextBtn.addEventListener('click', () => {
      currentRound++;
      
      if (currentRound >= scenarios.length) {
        // Game over
        const avgScore = Math.round(score / scenarios.length);
        resultDisplay.innerHTML = `
          <div class="result-card complete">
            <h3>🎯 Game Complete!</h3>
            <p>Final Score: ${score}/${scenarios.length * 100}</p>
            <p>Average: ${avgScore} points per round</p>
            <p class="performance">
              ${avgScore > 80 ? '🌟 Excellent! You understand correlations!' : 
                avgScore > 60 ? '👍 Good job! Keep practicing!' : 
                '💪 Keep learning about correlations!'}
            </p>
          </div>
        `;
        nextBtn.style.display = 'none';
        return;
      }
      
      // Next round
      roundDisplay.textContent = currentRound + 1;
      questionDisplay.textContent = scenarios[currentRound].question;
      dartGroup.innerHTML = '';
      resultDisplay.innerHTML = '';
      nextBtn.style.display = 'none';
    });
  }, 100);
  
  return el;
}