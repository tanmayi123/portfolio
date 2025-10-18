export default function Projects(){
  const el = document.createElement("section");
  el.className = "section";
  el.innerHTML = `
<h2 class="h2">Projects</h2>
<div class="grid grid-2">

  <a class="card" href="https://github.com/tanmayi123/Peer-2-Peer-Lending-System" target="_blank">
    <div style="font-weight:600">Peer-to-Peer Lending System for Northeastern Students</div>
    <p class="muted" style="margin:6px 0 0">
      Built ETL workflows in SQL/PLSQL to automate loan data processing, reducing manual intervention by 20%. 
      Created a Python app for borrower-lender matchmaking and Tableau/Power BI dashboards that boosted repayment efficiency by 15%.
    </p>
  </a>

  <a class="card" href="https://github.com/tanmayi123/Early-Warning-System-for-Detecting-Critical-Deterioration-in-Hospitalized-Patients" target="_blank">
    <div style="font-weight:600">Early Warning System for Patient Deterioration</div>
    <p class="muted" style="margin:6px 0 0">
      Designed ML pipelines on the SUPPORT2 dataset (9,105 records, 42 features). 
      Optimized Random Forest and Gradient Boosting achieving 92% accuracy and reducing false negatives below 9%.
    </p>
  </a>

  <a class="card" href="https://github.com/tanmayi123/Customer-Segmentation" target="_blank">
    <div style="font-weight:600">Customer Segmentation with RFM Analysis</div>
    <p class="muted" style="margin:6px 0 0">
      Applied K-Means clustering on eCommerce data (Recency, Frequency, Monetary metrics) to identify key customer groups, improving segmentation accuracy by 25%.
      Built interactive 3D visualizations in Matplotlib and Power BI for business insights.
    </p>
  </a>

    <a class="card" href="https://github.com/tanmayi123/Gravitational-Wave-Detection" target="_blank">
    <div style="font-weight:600">Gravitational-Wave-Detection</div>
    <p class="muted" style="margin:6px 0 0">
      Performed exploratory data analysis using techniques such as windowing and whitening to process and visualize time series data to reduce noise and amplify signal clarity, improving detection accuracy by 18%.
      Devised, trained and evaluated machine learning models using algorithms such as Convolutional Neural Networks and logistic regression to detect the presence of gravitational waves with an accuracy of 82%.
    </p>
  </a>

    <a class="card" href="https://github.com/tanmayi123/Access-Point-Load-Aware-User-Association" target="_blank">
    <div style="font-weight:600">Access-Point-Load-Aware-User-Association</div>
    <p class="muted" style="margin:6px 0 0">
      Analyzed and optimized device connectivity to access points using data-driven techniques, improving network performance.
      Applied machine learning, including reinforcement learning, to develop a model for optimal access point selection, enhancing signal strength and traffic balance.
    </p>
  </a>
</div>

  `;
  return el;
}
