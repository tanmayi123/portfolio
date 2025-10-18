export default function Skills(){
  const skills = [
  "SQL", "Python", "Pandas", "NumPy", "PySpark", "R",
  "Tableau", "Power BI", "AWS QuickSight",
  "Snowflake", "Azure Synapse", "AWS Glue", "Apache Spark", "Hadoop/HDFS",
  "Data Modeling", "ETL Development", "Data Visualization",
  "JIRA", "Confluence", "MS Excel (Advanced)"
];
  const el = document.createElement("section");
  el.className = "section";
  el.innerHTML = `
    <div>
      <h2 class="h2">Skills</h2>
      <div id="skill-wrap"></div>
    </div>
  `;
  const wrap = el.querySelector("#skill-wrap");
  skills.forEach(s=>{
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = s;
    wrap.appendChild(b);
  });
  return el;
}
