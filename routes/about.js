export default function About(){
  const el = document.createElement("section");
  el.className = "section";
  el.id="about";
  el.innerHTML = `
    <div class="about-wrapper">
      <h2 class="h2" style="text-align: center; margin-bottom: 40px;">About Me</h2>
      
      <!-- Stats Highlight Boxes -->
      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-icon">🎓</div>
          <div class="stat-value">3.7</div>
          <div class="stat-label">GPA</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">💼</div>
          <div class="stat-value">2+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">🚀</div>
          <div class="stat-value">10+</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">🏆</div>
          <div class="stat-value">1</div>
          <div class="stat-label">AWS Certification</div>
        </div>
      </div>

      <!-- About Description -->
      <p class="about-description">
        I'm currently pursuing my Master's in Data Analytics and Engineering at <b>Northeastern University</b>, 
        where I focus on building large-scale data pipelines, analytics strategy, and applied machine learning techniques.
        I hold a Bachelor's in Computer Science and Engineering from <b>KLE Technological University</b> and have professional experience at 
        <b>Amazon Web Services</b> and <b>Fidelity Investments</b>.
      </p>

      <!-- Interests with Icons -->
      <div class="interests-section">
        <h3 class="section-subtitle">My Interests</h3>
        <div class="interests-grid">
          <div class="interest-card">
            <div class="interest-icon">📊</div>
            <div class="interest-name">Data Analytics</div>
          </div>
          <div class="interest-card">
            <div class="interest-icon">⚙️</div>
            <div class="interest-name">Data Engineering</div>
          </div>
          <div class="interest-card">
            <div class="interest-icon">🤖</div>
            <div class="interest-name">Applied AI</div>
          </div>
        </div>
        <p class="interest-description">
          Transforming messy, unstructured data into meaningful solutions that drive business impact.
        </p>
      </div>

      <!-- Education Timeline -->
      <div class="education-section">
        <h3 class="section-subtitle">Education</h3>
        <div class="education-grid">
          <div class="edu-card">
            <div class="edu-icon">🎓</div>
            <div class="edu-content">
              <div class="edu-degree">Master's in Data Analytics and Engineering</div>
              <div class="edu-school">Northeastern University</div>
              <div class="edu-date">Sep 2024 - Aug 2026 • GPA: 3.76</div>
              <div class="edu-courses">
                <span class="course-tag">Data Management & Analytics</span>
                <span class="course-tag">Data Mining in Engineering</span>
                <span class="course-tag">Computation & Visualization</span>
                <span class="course-tag">Machine Learning Operations</span>
                <span class="course-tag">Applied Generative AI</span>
              </div>
            </div>
          </div>
          <div class="edu-card">
            <div class="edu-icon">🎓</div>
            <div class="edu-content">
              <div class="edu-degree">Bachelor's in Computer Science and Engineering</div>
              <div class="edu-school">KLE Technological University</div>
              <div class="edu-date">Aug 2019 - May 2023</div>
              <div class="edu-courses">
                <span class="course-tag">EDA</span>
                <span class="course-tag">Data Integration & Cloud Services</span>
                <span class="course-tag">Machine Learning and Neural Networks</span>
                <span class="course-tag">Database Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="certifications-section">
        <h3 class="section-subtitle">Certifications</h3>
        <div class="cert-grid">
          <div class="cert-badge">
            <div class="cert-icon">☁️</div>
            <div class="cert-content">
              <div class="cert-name">AWS Certified Solutions Architect – Associate</div>
              <div class="cert-issuer">by Amazon Web Services</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
  return el;
}
