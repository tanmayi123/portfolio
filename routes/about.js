export default function About(){
  const el = document.createElement("section");
  el.className = "section";
  el.innerHTML = `
    <div>
      <h2 class="h2">About</h2>
      <p class="muted" style="max-width:780px">
        I’m currently pursuing my Master’s in Data Analytics and Engineering at <b>Northeastern University</b> (GPA: 3.7), where I focus on large-scale data processing, analytics strategy, and applied machine learning.
        I hold a Bachelor’s in Computer Science from <b>KLE Technological University</b> and have professional experience at <b>Amazon Web Services</b> and <b>Fidelity Investments</b>.
        <br><br>
        My interests lie at the intersection of <b>data analytics, engineering, and applied AI</b> — transforming messy, unstructured data into meaningful solutions that drive business impact.
      </p>
    </div>
  `;
  return el;
}
