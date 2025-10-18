export default function Home(){
  const el = document.createElement("section");
  el.className = "section";
  el.innerHTML = `
    <div>
      <h1 class="h1">Hi, I’m <span style="color:var(--accent)">Tanmayi Shurpali</span>.</h1>
      <p class="muted" style="max-width:720px">
        I'm a Data Enthusiast passionate about turning complex data into actionable insights.
        I specialize in analytics, visualization, and building scalable data solutions using Python, SQL, ML based solutions and cloud technologies like AWS and Snowflake.
      </p>
      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn" href="#/projects">View Projects</a>
        <a class="btn" href="#/contact">Contact Me</a>
      </div>
    </div>
  `;
  return el;
}
