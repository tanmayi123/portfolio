export default function Projects(){
  const projects = [
    {
      title: "Peer-to-Peer Lending System",
      subtitle: "for Northeastern Students",
      description: "Built ETL workflows in SQL/PLSQL to automate loan data processing, reducing manual intervention by 20%. Created a Python app for borrower-lender matchmaking and Tableau/Power BI dashboards that boosted repayment efficiency by 15%.",
      github: "https://github.com/tanmayi123/Peer-2-Peer-Lending-System",
      icon: "💰"
    },
    {
      title: "Early Warning System",
      subtitle: "for Patient Deterioration",
      description: "Designed ML pipelines on the SUPPORT2 dataset (9,105 records, 42 features). Optimized Random Forest and Gradient Boosting achieving 92% accuracy and reducing false negatives below 9%.",
      github: "https://github.com/tanmayi123/Early-Warning-System-for-Detecting-Critical-Deterioration-in-Hospitalized-Patients",
      icon: "🏥"
    },
    {
      title: "Customer Segmentation",
      subtitle: "with RFM Analysis",
      description: "Applied K-Means clustering on eCommerce data (Recency, Frequency, Monetary metrics) to identify key customer groups, improving segmentation accuracy by 25%. Built interactive 3D visualizations in Matplotlib and Power BI for business insights.",
      github: "https://github.com/tanmayi123/Customer-Segmentation",
      icon: "👥"
    },
    {
      title: "Gravitational Wave",
      subtitle: "Detection",
      description: "Performed exploratory data analysis using techniques such as windowing and whitening to process and visualize time series data to reduce noise and amplify signal clarity, improving detection accuracy by 18%. Devised, trained and evaluated machine learning models using algorithms such as Convolutional Neural Networks and logistic regression to detect the presence of gravitational waves with an accuracy of 82%.",
      github: "https://github.com/tanmayi123/Gravitational-Wave-Detection",
      icon: "🌊"
    },
    {
      title: "Access Point Load-Aware",
      subtitle: "User Association",
      description: "Analyzed and optimized device connectivity to access points using data-driven techniques, improving network performance. Applied machine learning, including reinforcement learning, to develop a model for optimal access point selection, enhancing signal strength and traffic balance.",
      github: "https://github.com/tanmayi123/Access-Point-Load-Aware-User-Association",
      icon: "📡"
    },
    {
    title: "eCommerce Data Analysis",
    subtitle: "Advanced Analytics & Insights",
    description: "Applied advanced data analytics techniques for eCommerce data, including data preprocessing, exploratory analysis, and model-driven insights. Implemented pipelines for cleaning, transforming, and validating data. Employed multidimensional analytical techniques to uncover trends and patterns in consumer behavior using Python's robust libraries.",
    github: "https://github.com/tanmayi123/ecommerce_data_analysis",
    icon: "🛒"
    }
  ];

  const el = document.createElement("section");
  el.className = "section";
  el.id = "projects";
  el.innerHTML = `
    <div>
      <h2 class="h2" style="text-align: center; margin-bottom: 40px;">Projects</h2>
      <div class="projects-grid"></div>
    </div>
  `;
  
  const grid = el.querySelector(".projects-grid");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-icon">${project.icon}</div>
      <div class="project-title">${project.title}</div>
      <div class="project-subtitle">${project.subtitle}</div>
      <div class="project-description">${project.description}</div>
      <div class="project-buttons">
        <a href="${project.github}" target="_blank" class="project-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          Code
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
  
  return el;
}