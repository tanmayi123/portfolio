export default function RingToss() {
  const el = document.createElement('div');
  el.className = 'ring-game';
  
  const buckets = [
    { name: "📊 Visualization", id: "viz" },
    { name: "🗄️ Databases", id: "db" },
    { name: "🐍 Programming", id: "prog" },
    { name: "☁️ Cloud", id: "cloud" }
  ];
  
  const concepts = [
    { name: "Tableau", bucket: "viz", emoji: "📊" },
    { name: "Python", bucket: "prog", emoji: "🐍" },
    { name: "Snowflake", bucket: "db", emoji: "❄️" },
    { name: "AWS", bucket: "cloud", emoji: "☁️" },
    { name: "Power BI", bucket: "viz", emoji: "📈" },
    { name: "SQL", bucket: "prog", emoji: "💻" },
    { name: "Azure", bucket: "cloud", emoji: "🔷" },
    { name: "R", bucket: "prog", emoji: "📊" },
    { name: "PostgreSQL", bucket: "db", emoji: "🐘" },
    { name: "MongoDB", bucket: "db", emoji: "🍃" },
    { name: "Matplotlib", bucket: "viz", emoji: "📉" },
    { name: "GCP", bucket: "cloud", emoji: "☁️" }
  ];
  
  let currentConcepts = [...concepts];
  let score = 0;
  let attempts = 0;
  
  el.innerHTML = `
    <div class="ring-container">
      <h3>🎪 Concept Ring Toss</h3>
      <p class="game-instructions">Drag concepts to the correct category bucket!</p>
      
      <div class="ring-stats">
        <div class="stat">Score: <span id="ring-score">0</span>/${concepts.length}</div>
        <div class="stat">Accuracy: <span id="accuracy">100</span>%</div>
      </div>
      
      <div class="ring-playing-area">
        <!-- Buckets -->
        <div class="buckets-row">
          ${buckets.map(bucket => `
            <div class="bucket" data-bucket="${bucket.id}">
              <div class="bucket-label">${bucket.name}</div>
              <div class="bucket-target"></div>
              <div class="bucket-count">0</div>
            </div>
          `).join('')}
        </div>
        
        <!-- Concepts (rings) -->
        <div class="rings-area" id="rings-area">
          ${currentConcepts.map((concept, i) => `
            <div class="ring" draggable="true" data-concept="${concept.bucket}" data-index="${i}">
              <span class="ring-emoji">${concept.emoji}</span>
              <span class="ring-name">${concept.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="feedback-display" id="feedback-display"></div>
    </div>
  `;
  
  setTimeout(() => {
    const rings = el.querySelectorAll('.ring');
    const bucketTargets = el.querySelectorAll('.bucket');
    const feedbackDisplay = el.querySelector('#feedback-display');
    const scoreDisplay = el.querySelector('#ring-score');
    const accuracyDisplay = el.querySelector('#accuracy');
    
    let draggedElement = null;
    
    // Drag events for rings
    rings.forEach(ring => {
      ring.addEventListener('dragstart', function(e) {
        draggedElement = this;
        this.classList.add('dragging');
      });
      
      ring.addEventListener('dragend', function() {
        this.classList.remove('dragging');
      });
    });
    
    // Drop events for buckets
    bucketTargets.forEach(bucket => {
      bucket.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('bucket-hover');
      });
      
      bucket.addEventListener('dragleave', function() {
        this.classList.remove('bucket-hover');
      });
      
      bucket.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('bucket-hover');
        
        if (!draggedElement) return;
        
        const correctBucket = draggedElement.getAttribute('data-concept');
        const droppedBucket = this.getAttribute('data-bucket');
        
        attempts++;
        
        if (correctBucket === droppedBucket) {
          // Correct!
          score++;
          draggedElement.classList.add('correct-toss');
          draggedElement.style.opacity = '0.3';
          draggedElement.draggable = false;
          
          // Update bucket count
          const bucketCount = this.querySelector('.bucket-count');
          bucketCount.textContent = parseInt(bucketCount.textContent) + 1;
          
          feedbackDisplay.innerHTML = `
            <div class="feedback-card correct">
              ✅ Correct! ${draggedElement.querySelector('.ring-name').textContent} 
              is a ${this.querySelector('.bucket-label').textContent.replace(/[📊🗄️🐍☁️]/g, '').trim()} tool!
            </div>
          `;
          
          // Check if all done
          if (score === concepts.length) {
            setTimeout(showCompletion, 1000);
          }
        } else {
          // Wrong!
          draggedElement.classList.add('wrong-toss');
          setTimeout(() => {
            draggedElement.classList.remove('wrong-toss');
          }, 500);
          
          feedbackDisplay.innerHTML = `
            <div class="feedback-card wrong">
              ❌ Not quite! ${draggedElement.querySelector('.ring-name').textContent} 
              belongs in a different category. Try again!
            </div>
          `;
        }
        
        // Update stats
        scoreDisplay.textContent = score;
        accuracyDisplay.textContent = Math.round((score / attempts) * 100);
        
        setTimeout(() => {
          feedbackDisplay.innerHTML = '';
        }, 2000);
      });
    });
    
    function showCompletion() {
      const accuracy = Math.round((score / attempts) * 100);
      
      feedbackDisplay.innerHTML = `
        <div class="feedback-card complete">
          <h3>🎉 All Concepts Sorted!</h3>
          <div class="completion-stats">
            <div>Score: ${score}/${concepts.length}</div>
            <div>Accuracy: ${accuracy}%</div>
            <div>Attempts: ${attempts}</div>
          </div>
          <p class="performance">
            ${accuracy === 100 ? '🌟 Perfect! You know your data tools!' :
              accuracy >= 80 ? '👍 Great job! You understand the ecosystem!' :
              '💪 Keep learning - practice makes perfect!'}
          </p>
          <p class="my-tools">
            💡 I use tools from all these categories in my projects:
            Python + SQL + Tableau + AWS = Powerful data solutions!
          </p>
        </div>
      `;
    }
  }, 100);
  
  return el;
}