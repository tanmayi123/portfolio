export default function Skills(){
  const skills = [
    { name: "SQL", icon: "🗄️", color: "#00758F" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "Pandas", icon: "🐼", color: "#150458" },
    { name: "NumPy", icon: "🔢", color: "#013243" },
    { name: "PySpark", icon: "⚡", color: "#E25A1C" },
    { name: "R", icon: "📊", color: "#276DC3" },
    { name: "Tableau", icon: "📈", color: "#E97627" },
    { name: "Power BI", icon: "📉", color: "#F2C811" },
    { name: "AWS QuickSight", icon: "☁️", color: "#FF9900" },
    { name: "Snowflake", icon: "❄️", color: "#29B5E8" },
    { name: "Azure Synapse", icon: "🔷", color: "#0078D4" },
    { name: "AWS Glue", icon: "🔗", color: "#FF9900" },
    { name: "Apache Spark", icon: "✨", color: "#E25A1C" },
    { name: "Hadoop/HDFS", icon: "🐘", color: "#66CCFF" },
    { name: "Data Modeling", icon: "🏗️", color: "#64b5f6" },
    { name: "ETL Development", icon: "🔄", color: "#a78bfa" },
    { name: "Data Visualization", icon: "📊", color: "#4CAF50" },
    { name: "JIRA", icon: "📋", color: "#0052CC" },
    { name: "Confluence", icon: "📝", color: "#172B4D" },
    { name: "MS Excel", icon: "📑", color: "#217346" },
    { name: "Machine Learning", icon: "🤖", color: "#FF6F00" }
  ];

  const el = document.createElement("section");
  el.className = "section";
  el.id = "skills";
  el.innerHTML = `
    <div>
      <h2 class="h2" style="text-align: center; margin-bottom: 40px;">Skills</h2>
      <div class="skills-grid"></div>
    </div>
  `;
  
  const grid = el.querySelector(".skills-grid");
  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-icon" style="background: linear-gradient(135deg, ${skill.color}22, ${skill.color}11);">
        <span style="font-size: 36px;">${skill.icon}</span>
      </div>
      <div class="skill-name">${skill.name}</div>
    `;
    grid.appendChild(card);
  });
  
  return el;
}