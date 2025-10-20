export default function RollerCoaster() {
  const el = document.createElement('div');
  el.className = 'coaster-game';
  
  const stages = [
    {
      stage: 1,
      title: "📥 Data Collection",
      question: "Which source is best for real-time sales data?",
      options: ["CSV files", "API endpoints", "Excel spreadsheets", "Email attachments"],
      correct: 1,
      explanation: "APIs provide real-time data access with automated updates!",
      animation: "⬆️ Climbing the first hill..."
    },
    {
      stage: 2,
      title: "🧹 Data Cleaning",
      question: "You found: 500 nulls, 50 duplicates, mixed date formats. Priority?",
      options: ["Remove nulls", "Fix date formats", "Drop duplicates", "Start analysis anyway"],
      correct: 1,
      explanation: "Standardize formats first! Inconsistent formats break everything downstream.",
      animation: "⬇️ Whoosh! Down the first drop..."
    },
    {
      stage: 3,
      title: "🔄 Data Transformation",
      question: "Convert 'john.doe@email.com' - Extract what?",
      options: ["Username (john.doe)", "Domain (email.com)", "Full name", "First name only"],
      correct: 0,
      explanation: "Username extraction is common for user identification!",
      animation: "🌀 Loop-de-loop! Transforming..."
    },
    {
      stage: 4,
      title: "📊 Analysis",
      question: "1000 customers, avg spend $50. Top 10% spend $200+. Insight?",
      options: [
        "Everyone spends the same",
        "High-value segment exists",
        "Need more data",
        "Average tells the full story"
      ],
      correct: 1,
      explanation: "The 80/20 rule! High-value customers drive disproportionate revenue.",
      animation: "🔄 Corkscrew turn! Analyzing patterns..."
    },
    {
      stage: 5,
      title: "📈 Visualization",
      question: "Show customer segments by spend + frequency. Best viz?",
      options: ["Bar chart", "Scatter plot", "Pie chart", "Table"],
      correct: 1,
      explanation: "Scatter plots show relationships between two continuous variables!",
      animation: "⬆️ Final hill! Almost there..."
    },
    {
      stage: 6,
      title: "💡 Insights & Action",
      question: "'20% of customers drive 80% of revenue' - What do you recommend?",
      options: [
        "Focus marketing on top 20%",
        "Ignore bottom 80%",
        "Treat everyone equally",
        "Raise prices for everyone"
      ],
      correct: 0,
      explanation: "Smart! Target high-value customers with retention programs.",
      animation: "🎉 Finish line! You completed the pipeline!"
    }
  ];
  
  let currentStage = 0;
  
  el.innerHTML = `
    <div class="coaster-container">
      <h3>🎢 Data Pipeline Roller Coaster</h3>
      <p class="game-instructions">Ride through the complete data journey!</p>
      
      <div class="coaster-progress">
        <div class="progress-bar">
          <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
        </div>
        <div class="progress-text">Stage <span id="stage-num">1</span>/6</div>
      </div>
      
      <div class="coaster-track">
        <div class="train" id="train">🚂</div>
      </div>
      
      <div class="stage-display" id="stage-display">
        <div class="stage-card">
          <h4>${stages[0].title}</h4>
          <p class="stage-question">${stages[0].question}</p>
          <div class="stage-options">
            ${stages[0].options.map((option, i) => `
              <button class="stage-option" data-index="${i}">${option}</button>
            `).join('')}
          </div>
          <div class="stage-animation" id="stage-animation"></div>
          <div class="stage-result" id="stage-result"></div>
        </div>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    const stageDisplay = el.querySelector('#stage-display');
    const progressFill = el.querySelector('#progress-fill');
    const stageNum = el.querySelector('#stage-num');
    const train = el.querySelector('#train');
    
    function loadStage() {
      const stage = stages[currentStage];
      
      stageDisplay.innerHTML = `
        <div class="stage-card">
          <h4>${stage.title}</h4>
          <p class="stage-question">${stage.question}</p>
          <div class="stage-options">
            ${stage.options.map((option, i) => `
              <button class="stage-option" data-index="${i}">${option}</button>
            `).join('')}
          </div>
          <div class="stage-animation" id="stage-animation"></div>
          <div class="stage-result" id="stage-result"></div>
        </div>
      `;
      
      const optionBtns = stageDisplay.querySelectorAll('.stage-option');
      const newAnimationDiv = stageDisplay.querySelector('#stage-animation');
      const newResultDiv = stageDisplay.querySelector('#stage-result');
      
      optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const chosenIndex = parseInt(this.getAttribute('data-index'));
          const correct = chosenIndex === stage.correct;
          
          optionBtns.forEach(b => b.disabled = true);
          
          if (correct) {
            this.classList.add('correct');
            newAnimationDiv.innerHTML = `<div class="animation-text">${stage.animation}</div>`;
            newResultDiv.innerHTML = `
              <div class="result-correct">
                ✅ Correct! ${stage.explanation}
              </div>
            `;
            
            // Animate train
            train.style.left = `${((currentStage + 1) / stages.length) * 100}%`;
            
            setTimeout(() => {
              currentStage++;
              progressFill.style.width = `${(currentStage / stages.length) * 100}%`;
              stageNum.textContent = currentStage + 1;
              
              if (currentStage >= stages.length) {
                showCompletion();
              } else {
                loadStage();
              }
            }, 2500);
          } else {
            this.classList.add('wrong');
            optionBtns[stage.correct].classList.add('correct');
            newResultDiv.innerHTML = `
              <div class="result-wrong">
                ❌ Not quite. ${stage.explanation}<br>
                <button class="retry-btn" id="retry-stage-btn">Try Again</button>
              </div>
            `;
            
            // Add retry button handler
            setTimeout(() => {
              const retryBtn = newResultDiv.querySelector('#retry-stage-btn');
              if (retryBtn) {
                retryBtn.addEventListener('click', () => {
                  loadStage();
                });
              }
            }, 10);
          }
        });
      });
    }
    
    function showCompletion() {
      stageDisplay.innerHTML = `
        <div class="stage-card complete">
          <div class="completion-animation">
            🎉🎢🎉
          </div>
          <h3>Pipeline Complete!</h3>
          <p>You successfully navigated the entire data pipeline journey!</p>
          <div class="pipeline-summary">
            <h4>The Data Pipeline:</h4>
            <div class="pipeline-steps">
              📥 Collect → 🧹 Clean → 🔄 Transform → 📊 Analyze → 📈 Visualize → 💡 Act
            </div>
          </div>
          <p class="real-project">
            💼 This is exactly how I approach projects like Customer Segmentation 
            and eCommerce Analysis!
          </p>
        </div>
      `;
    }
    
    loadStage();
  }, 100);
  
  return el;
}