export default function Contact(){
  const el = document.createElement("section");
  el.className = "section";
  el.innerHTML = `
<h2 class="h2">Contact</h2>
<p class="muted">
📍 Boston, MA<br>
✉️ <a href="mailto:shurpali.t@northeastern.edu">shurpali.t@northeastern.edu</a><br>
🔗 <a href="https://www.linkedin.com/in/tanmayishurpali" target="_blank">LinkedIn</a> |
   <a href="https://github.com/tanmayi123" target="_blank">GitHub</a>
</p>
  `;
  return el;
}
