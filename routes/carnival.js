import DartThrow from "./games/dartThrow.js";
import FerrisWheel from "./games/ferrisWheel.js";
import RollerCoaster from "./games/rollerCoaster.js";
import RingToss from "./games/ringToss.js";
import PopcornFacts from "./games/popcornFacts.js";

export default function Carnival() {
  const el = document.createElement('div');
  el.className = 'carnival-overlay';
  el.id = 'carnival-overlay';
  el.style.display = 'none'; // Hidden by default
  
  el.innerHTML = `
    <div class="carnival-fullscreen">
      <!-- Exit Button -->
      <button class="carnival-exit-btn" id="carnival-exit-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        Exit Carnival
      </button>
      
      <div class="carnival-container">
        <h2 class="h2 carnival-title">🎪 The Data Carnival 🎪</h2>
        <p class="carnival-intro">
          Welcome! I'm Tanmayi. Ready to explore data through fun interactive games? 
          Pick a booth and let's play!
        </p>
        
        <div class="carnival-map">
          <!-- Game Booths -->
          <div class="booth-card" data-game="dart">
            <div class="booth-icon">🎯</div>
            <h3>Dart Throw</h3>
            <p>Test your correlation knowledge</p>
            <button class="booth-btn">Play Now</button>
          </div>
          
          <div class="booth-card" data-game="ferris">
            <div class="booth-icon">🎡</div>
            <h3>Ferris Wheel</h3>
            <p>Spin to learn data skills</p>
            <button class="booth-btn">Play Now</button>
          </div>
          
          <div class="booth-card" data-game="coaster">
            <div class="booth-icon">🎢</div>
            <h3>Roller Coaster</h3>
            <p>Ride through the data pipeline</p>
            <button class="booth-btn">Play Now</button>
          </div>
          
          <div class="booth-card" data-game="ring">
            <div class="booth-icon">🎪</div>
            <h3>Ring Toss</h3>
            <p>Sort data concepts correctly</p>
            <button class="booth-btn">Play Now</button>
          </div>
          
          <div class="booth-card" data-game="popcorn">
            <div class="booth-icon">🍿</div>
            <h3>Popcorn Facts</h3>
            <p>Discover fun facts about me!</p>
            <button class="booth-btn">Play Now</button>
          </div>
        </div>
        
        <!-- Game Container (where individual games load) -->
        <div class="game-container" id="game-container"></div>
      </div>
    </div>
  `;
  
  // Event listeners for booth buttons
  setTimeout(() => {
    const gameContainer = el.querySelector('#game-container');
    const boothCards = el.querySelectorAll('.booth-card');
    const exitBtn = el.querySelector('#carnival-exit-btn');
    
    // Booth click handlers
    boothCards.forEach(card => {
      const btn = card.querySelector('.booth-btn');
      btn.addEventListener('click', () => {
        const gameType = card.getAttribute('data-game');
        loadGame(gameType, gameContainer);
      });
    });
    
    // Exit button handler
    exitBtn.addEventListener('click', () => {
      el.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close on overlay background click
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        el.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }, 100);
  
  return el;
}

function loadGame(gameType, container) {
  // Clear container
  container.innerHTML = '';
  container.style.display = 'block';
  
  // Load specific game
  let gameComponent;
  switch(gameType) {
    case 'dart':
      gameComponent = DartThrow();
      break;
    case 'ferris':
      gameComponent = FerrisWheel();
      break;
    case 'coaster':
      gameComponent = RollerCoaster();
      break;
    case 'ring':
      gameComponent = RingToss();
      break;
    case 'popcorn':
      gameComponent = PopcornFacts();
      break;
  }
  
  // Add back button
  const backBtn = document.createElement('button');
  backBtn.className = 'back-to-carnival-btn';
  backBtn.textContent = '← Back to Carnival';
  backBtn.onclick = () => {
    container.style.display = 'none';
    container.innerHTML = '';
  };
  
  container.appendChild(backBtn);
  container.appendChild(gameComponent);
  
  // Scroll to top of game
  container.scrollTop = 0;
}