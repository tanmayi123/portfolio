export default function PopcornFacts() {
  const el = document.createElement('div');
  el.className = 'popcorn-game';
  
  const facts = [
    // Coffee Facts
    { text: "☕ Tanmayi runs on coffee and code - average 4 cups per project!", category: "coffee" },
    { text: "☕ Coffee → Code ratio: 1 cup = 2 hours of productive coding", category: "coffee" },
    { text: "☕ Tanmayi's debugging fuel? A fresh cup of coffee", category: "coffee" },
    { text: "☕ Best ideas come after the 3rd cup of coffee 💡", category: "coffee" },
    { text: "☕ Coffee first, then we talk about data pipelines", category: "coffee" },
    
    // Bollywood Music Facts
    { text: "🎵 Stuck on a bug? Tanmayi switches to her Bollywood playlist!", category: "music" },
    { text: "🎵 Bollywood beats = Better debugging! It's science (probably)", category: "music" },
    { text: "🎵 Code won't compile? Time for some Bollywood therapy", category: "music" },
    { text: "🎵 From Python errors to Bollywood lyrics - debugging in style", category: "music" },
    { text: "🎵 Debugging playlist has 47 Bollywood songs and counting", category: "music" },
    
    // Park Coding Facts
    { text: "🌳 Tanmayi codes better in parks - fresh air, fresh ideas!", category: "parks" },
    { text: "🌳 Best debugging happens outdoors with a laptop and nature", category: "parks" },
    { text: "🌳 Office? Nah. Parks are the real productivity boosters", category: "parks" },
    { text: "🌳 Green spaces, clean code - that's the motto!", category: "parks" },
    { text: "🌳 Writing SQL queries under trees just hits different 🌲💻", category: "parks" },
    
    // Geeky Books Facts
    { text: "📚 Data science by day, sci-fi novels by night", category: "books" },
    { text: "📚 Geeky novels inspire creative data solutions!", category: "books" },
    { text: "📚 Reading about space exploration while exploring data space 🌌", category: "books" },
    { text: "📚 Learning ML algorithms while reading about AI in fiction 🤖", category: "books" },
    { text: "📚 Mixing Isaac Asimov with Python tutorials - perfectly balanced", category: "books" },
    
    // Project Facts
    { text: "🚀 Built a Customer Segmentation model with K-Means clustering!", category: "project" },
    { text: "🚀 Analyzed 1M+ eCommerce records to find customer patterns", category: "project" },
    { text: "🚀 Created 3D visualizations to show customer clusters 📊", category: "project" },
    { text: "🚀 Detected gravitational waves using CNNs (yes, really!) 🌊", category: "project" },
    { text: "🚀 Built a P2P lending system connecting students to alumni", category: "project" },
    { text: "🚀 Early Warning System: ML predicting patient deterioration with 92% accuracy", category: "project" },
    { text: "🚀 GitHub has 10+ projects - from ML to data viz to ETL pipelines", category: "project" },
    
    // Education Facts
    { text: "🎓 Master's at Northeastern with 3.7 GPA", category: "education" },
    { text: "🎓 From Computer Science Bachelor's to Data Analytics Master's", category: "education" },
    { text: "🎓 Coursework: Data Mining, Computation & Visualization", category: "education" },
    
    // Skills Facts
    { text: "🛠️ Fluent in Python, SQL, and R (the holy trinity!)", category: "skills" },
    { text: "🛠️ Tableau wizard - 10+ dashboards and counting 📊", category: "skills" },
    { text: "🛠️ AWS Certified Solutions Architect - Associate ☁️", category: "skills" },
    { text: "🛠️ Snowflake, PySpark, Pandas - the data trifecta!", category: "skills" },
    { text: "🛠️ 15+ tools mastered and always learning more!", category: "skills" },
    
    // Personality Quirks
    { text: "✨ Bollywood + Coffee + Parks = Peak productivity mode 🚀", category: "quirk" },
    { text: "✨ Best code written: Outside, caffeinated, with good music", category: "quirk" },
    { text: "✨ Parks > Cubicles. Nature improves code quality. Proven. 🌿", category: "quirk" },
    { text: "✨ Debugged a complex query in the park with coffee - best day ever!", category: "quirk" },
    { text: "✨ Writing ETL pipelines while listening to Bollywood hits 🎶", category: "quirk" },
    
    // Philosophy
    { text: "💡 Data tells stories - Tanmayi translates them into action", category: "philosophy" },
    { text: "💡 Messy data? Challenge accepted! 🧹", category: "philosophy" },
    { text: "💡 Clean code > Clever code (but sometimes both!)", category: "philosophy" },
    { text: "💡 Impact matters more than complexity", category: "philosophy" },
    { text: "💡 If it's not visualized, did it even happen? 📈", category: "philosophy" },
  ];
  
  let poppedCount = 0;
  
  el.innerHTML = `
    <div class="popcorn-container">
      <h3>🍿 Pop the Kernels to Learn About Me!</h3>
      <p class="game-instructions">Click the corn kernels to reveal fun facts</p>
      <div class="popcorn-counter">Popped: <span id="popped-count">0</span>/${facts.length}</div>
      
      <div class="popcorn-field" id="popcorn-field">
        ${facts.map((fact, index) => `
          <div class="kernel" data-index="${index}" style="
            left: ${Math.random() * 85 + 5}%;
            top: ${Math.random() * 85 + 5}%;
            animation-delay: ${Math.random() * 2}s;
          ">
            🌽
          </div>
        `).join('')}
      </div>
      
      <div class="fact-display" id="fact-display">
        <div class="fact-placeholder">👆 Click a kernel to start!</div>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    const kernels = el.querySelectorAll('.kernel');
    const factDisplay = el.querySelector('#fact-display');
    const counter = el.querySelector('#popped-count');
    
    kernels.forEach(kernel => {
      kernel.addEventListener('click', function() {
        if (this.classList.contains('popped')) return;
        
        const index = parseInt(this.getAttribute('data-index'));
        const fact = facts[index];
        
        // Pop animation
        this.classList.add('popping');
        this.textContent = '🍿';
        
        setTimeout(() => {
          this.classList.add('popped');
          this.style.opacity = '0.3';
        }, 300);
        
        // Show fact
        factDisplay.innerHTML = `
          <div class="fact-card ${fact.category}">
            <div class="fact-text">${fact.text}</div>
          </div>
        `;
        
        // Update counter
        poppedCount++;
        counter.textContent = poppedCount;
        
        // Check if all popped
        if (poppedCount === facts.length) {
          setTimeout(() => {
            factDisplay.innerHTML = `
              <div class="fact-card complete">
                <h3>🎉 You popped them all!</h3>
                <p>Now you know all about me! Maybe too much hehe</p>
              </div>
            `;
          }, 1000);
        }
      });
    });
  }, 100);
  
  return el;
}