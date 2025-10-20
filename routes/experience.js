export default function Experience(){
  const el = document.createElement("experiencee");
  el.className = "experiencee";
  el.id = "experience";
  el.innerHTML = `
    <div class="container panel reveal">
      <h2 class="h2" style="text-align: center; margin-bottom: 40px;">Experience</h2>

      <div class="timeline">

        <!-- Fidelity -->
        <div class="tl-item">
          <div class="tl-marker" aria-hidden="true"></div>
          <div class="tl-card-flip">
            <div class="tl-card-inner">
              <!-- Front of card -->
              <div class="tl-card tl-card-front fidelity-brand">
                <div class="tl-meta">
                  <span class="tl-company">Fidelity Investments</span>
                  <span class="tl-role">Data Analyst Co-op</span>
                </div>
                <div class="tl-date">
                  <svg class="date-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Jul 2025 – Present
                </div>
                <div class="tl-location">📍 Boston, MA</div>
                <div class="flip-hint">Hover/Tap for details →</div>
              </div>
              <!-- Back of card -->
              <div class="tl-card tl-card-back fidelity-brand">
                <div class="tl-meta">
                  <span class="tl-company">Fidelity Investments · Data Analyst Co-op</span>
                  <span class="tl-date-small">Jul 2025 – Present · Boston, MA</span>
                </div>
                <ul class="tl-points">
                  <li>Designed <b>Snowflake stored procedures</b> and scheduled tasks across 5+ channels (calls, chats, surveys).</li>
                  <li>Built <b>10+ Tableau dashboards</b> on custom SQL sources; reduced manual effort.</li>
                  <li>Collaborated on building an <b>LLM-powered chatbot</b> (HF embeddings) for natural-language search over 1,000+ reports.</li>
                  <li>Enhanced a <b>Streamlit</b> app with automated Matplotlib comparisons for YoY trend reporting.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- AWS Associate -->
        <div class="tl-item">
          <div class="tl-marker" aria-hidden="true"></div>
          <div class="tl-card-flip">
            <div class="tl-card-inner">
              <!-- Front of card -->
              <div class="tl-card tl-card-front aws-brand">
                <div class="tl-meta">
                  <span class="tl-company">Amazon Web Services</span>
                  <span class="tl-role">Cloud Support Associate</span>
                </div>
                <div class="tl-date">
                  <svg class="date-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Jul 2023 – Jul 2024
                </div>
                <div class="tl-location">📍 Remote</div>
                <div class="flip-hint">Hover/Tap for details →</div>
              </div>
              <!-- Back of card -->
              <div class="tl-card tl-card-back aws-brand">
                <div class="tl-meta">
                  <span class="tl-company">Amazon Web Services · Cloud Support Associate</span>
                  <span class="tl-date-small">Jul 2023 – Jul 2024</span>
                </div>
                <ul class="tl-points">
                  <li>Optimized ETL pipelines & <b>S3</b> ingestion; improved retrieval speed <b>25%</b>.</li>
                  <li>Enabled customers to set up & troubleshoot <b>CloudWatch</b> dashboards for EC2 apps.</li>
                  <li>Improved availability and cut downtime <b>15%</b> via <b>ELB</b> + <b>AutoScaling</b> tuning.</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">S3</span>
                  <span class="tech-tag">CloudWatch</span>
                  <span class="tech-tag">EC2</span>
                  <span class="tech-tag">ELB</span>
                  <span class="tech-tag">AutoScaling</span>
                  <span class="tech-tag">ETL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AWS Intern -->
        <div class="tl-item">
          <div class="tl-marker" aria-hidden="true"></div>
          <div class="tl-card-flip">
            <div class="tl-card-inner">
              <!-- Front of card -->
              <div class="tl-card tl-card-front aws-brand">
                <div class="tl-meta">
                  <span class="tl-company">Amazon Web Services</span>
                  <span class="tl-role">Cloud Support Associate Intern</span>
                </div>
                <div class="tl-date">
                  <svg class="date-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Mar 2023 – Jul 2023
                </div>
                <div class="tl-location">📍 Remote</div>
                <div class="flip-hint">Hover/Tap for details →</div>
              </div>
              <!-- Back of card -->
              <div class="tl-card tl-card-back aws-brand">
                <div class="tl-meta">
                  <span class="tl-company">Amazon Web Services · Cloud Support Associate Intern</span>
                  <span class="tl-date-small">Mar 2023 – Jul 2023</span>
                </div>
                <ul class="tl-points">
                  <li>Implemented <b>data governance</b> & compliance (GDPR/CCPA) using CloudTrail & IAM.</li>
                  <li>Built predictive data pipelines with <b>AWS Glue</b> and real-time dashboards via CloudWatch/EventBridge.</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">AWS Glue</span>
                  <span class="tech-tag">CloudTrail</span>
                  <span class="tech-tag">IAM</span>
                  <span class="tech-tag">CloudWatch</span>
                  <span class="tech-tag">EventBridge</span>
                  <span class="tech-tag">GDPR/CCPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // Add click/tap functionality for card flip on mobile
  setTimeout(() => {
    const cards = el.querySelectorAll('.tl-card-flip');
    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        // Only flip on mobile (touch devices)
        if ('ontouchstart' in window) {
          this.classList.toggle('flipped');
        }
      });
    });
  }, 100);

  return el;
}