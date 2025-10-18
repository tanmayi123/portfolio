export default function Experience(){
  const el = document.createElement("section");
  el.className = "section";
  el.innerHTML = `
    <h2 class="h2">Experience</h2>

<div class="grid grid-2">

  <div class="card">
    <div style="font-weight:600">Fidelity Investments · Data Analyst Co-op</div>
    <div class="muted" style="font-size:14px">Jul 2025 – Present · Boston, MA</div>
    <ul style="margin:8px 0 0 18px">
      <li>Designed <b>Snowflake stored procedures</b> and scheduled tasks across 5+ customer interaction channels (calls, chats, surveys).</li>
      <li>Developed <b>10+ Tableau dashboards</b> using custom SQL data sources, reducing manual effort by 40% and accelerating KPI analysis by 25%.</li>
      <li>Collaborated on building an <b>LLM-powered chatbot</b> (Hugging Face embeddings) enabling natural-language queries across 1,000+ archived reports.</li>
      <li>Enhanced a <b>Streamlit app</b> with automated Matplotlib comparison visualizations for year-over-year trend reporting.</li>
    </ul>
  </div>

  <div class="card">
    <div style="font-weight:600">Amazon Web Services · Cloud Support Associate</div>
    <div class="muted" style="font-size:14px">Jul 2023 – Jul 2024</div>
    <ul style="margin:8px 0 0 18px">
      <li>Optimized ETL pipelines and <b>Amazon S3 data ingestion</b> workflows, improving retrieval speed by 25%.</li>
      <li>Enabled clients to set up and troubleshoot <b>CloudWatch dashboards</b> for EC2-based web applications.</li>
      <li>Improved availability and reduced downtime 15% via <b>Elastic Load Balancing and AutoScaling</b> optimization.</li>
    </ul>
  </div>

  <div class="card">
    <div style="font-weight:600">Amazon Web Services · Cloud Support Associate Intern</div>
    <div class="muted" style="font-size:14px">Mar 2023 – Jul 2023</div>
    <ul style="margin:8px 0 0 18px">
      <li>Implemented <b>data governance</b> and compliance protocols (GDPR, CCPA) using CloudTrail and IAM controls.</li>
      <li>Developed predictive data pipelines with <b>AWS Glue</b> and real-time dashboards using CloudWatch and EventBridge.</li>
    </ul>
  </div>

</div>

  `;
  return el;
}
