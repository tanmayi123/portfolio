export default function chatbot() {
  const el = document.createElement('div');
  el.className = 'chatbot-container';
  el.innerHTML = `
    <!-- Chat Bubble Button -->
    <button class="chat-bubble" id="chat-bubble" aria-label="Open chat">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>

    <!-- Chat Window -->
    <div class="chat-window" id="chat-window">
      <div class="chat-header">
        <div class="chat-header-content">
          <div class="chat-avatar">🤖</div>
          <div>
            <div class="chat-title">Tanmayi's Assistant</div>
            <div class="chat-status">Online</div>
          </div>
        </div>
        <button class="chat-close" id="chat-close" aria-label="Close chat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="chat-messages" id="chat-messages">
        <div class="chat-message bot-message">
          <div class="message-avatar">🤖</div>
          <div class="message-content">
            <div class="message-text">Hi! I'm Tanmayi's AI assistant. Ask me anything about her experience, projects, skills, or how to get in touch! 👋</div>
          </div>
        </div>
      </div>

      <div class="chat-suggestions" id="chat-suggestions">
        <button class="suggestion-chip" data-query="What's your experience?">💼 Experience</button>
        <button class="suggestion-chip" data-query="Tell me about your projects">🚀 Projects</button>
        <button class="suggestion-chip" data-query="What skills do you have?">🛠️ Skills</button>
        <button class="suggestion-chip" data-query="How can I contact you?">📧 Contact</button>
      </div>

      <div class="chat-input-container">
        <input 
          type="text" 
          class="chat-input" 
          id="chat-input" 
          placeholder="Ask me anything..."
          autocomplete="off"
        />
        <button class="chat-send" id="chat-send" aria-label="Send message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  `;

  // Knowledge base with your information
  const knowledgeBase = {
    experience: {
      keywords: ['experience', 'work', 'job', 'career', 'worked', 'employment'],
      response: `I have professional experience at two major companies:

📍Fidelity Investments(Jul 2025 - Present)
• Data Analyst Co-op in Boston, MA
• Built 10+ Tableau dashboards, reduced manual effort by 40%
• Collaborated on building an LLM-powered chatbot for 1,000+ reports

☁️Amazon Web Services(Jul 2023 - Jul 2024)
• Cloud Support Associate
• Optimized ETL pipelines, improved retrieval speed by 25%
• Cut downtime by 15% via ELB + AutoScaling

🌱AWS Intern(Mar 2023 - Jul 2023)
• Cloud Support Associate Intern
• Implemented data governance & GDPR/CCPA compliance

Want to know more? Check out my <a href="#experience">Experience section</a>!`
    },
    projects: {
      keywords: ['project', 'built', 'created', 'developed', 'github', 'portfolio'],
      response: `I've worked on several exciting data projects:

🏦 **Peer-to-Peer Lending System** - ETL workflows with SQL/PLSQL, reduced manual intervention by 20%
<a href="https://github.com/tanmayi123/Peer-2-Peer-Lending-System" target="_blank">View on GitHub →</a>

🏥 **Early Warning System** - ML pipelines achieving 92% accuracy for patient deterioration detection
<a href="https://github.com/tanmayi123/Early-Warning-System-for-Detecting-Critical-Deterioration-in-Hospitalized-Patients" target="_blank">View on GitHub →</a>

👥 **Customer Segmentation** - K-Means clustering with 25% improvement in segmentation accuracy
<a href="https://github.com/tanmayi123/Customer-Segmentation" target="_blank">View on GitHub →</a>

🌊 **Gravitational Wave Detection** - CNN and logistic regression with 82% accuracy
<a href="https://github.com/tanmayi123/Gravitational-Wave-Detection" target="_blank">View on GitHub →</a>

See all projects in my <a href="#projects">Projects section</a>!`
    },
    skills: {
      keywords: ['skill', 'technology', 'tool', 'tech stack', 'programming', 'language', 'know'],
      response: `I'm proficient in a wide range of data analytics and engineering tools:

**Programming & Data:**
🐍 Python • SQL • R • Pandas • NumPy • PySpark

**Visualization:**
📊 Tableau • Power BI • AWS QuickSight

**Cloud & Big Data:**
☁️ AWS (S3, Glue, CloudWatch) • Snowflake • Azure Synapse • Apache Spark • Hadoop/HDFS

**Other Tools:**
🛠️ JIRA • Confluence • MS Excel (Advanced)

**Machine Learning:**
🤖 Scikit-learn • Data Modeling • ETL Development

Check out my <a href="#skills">Skills section</a> for the full list!`
    },
    education: {
      keywords: ['education', 'degree', 'university', 'college', 'study', 'student', 'master', 'bachelor'],
      response: `My educational background:

🎓 **Master's in Data Analytics and Engineering**
• Northeastern University (Sep 2024 - Aug 2026)
• GPA: 3.7
• Focus: Data management, mining, computation & visualization

🎓 **Bachelor's in Computer Science and Engineering**
• KLE Technological University (Aug 2019 - May 2023)
• Focus: EDA, data integration, cloud services, ML, DBMS

Learn more in my <a href="#about">About section</a>!`
    },
    contact: {
      keywords: ['contact', 'email', 'reach', 'connect', 'linkedin', 'hire', 'available'],
      response: `I'd love to hear from you! Here's how you can reach me:

📧 **Email:** shurpalitanmayi2000@gmail.com
💼 **LinkedIn:** <a href="https://www.linkedin.com/in/tanmayishurpali" target="_blank">linkedin.com/in/tanmayishurpali</a>
💻 **GitHub:** <a href="https://github.com/tanmayi123" target="_blank">github.com/tanmayi123</a>
📍 **Location:** Boston, MA

I'm currently open to opportunities and usually respond within 24 hours!

Visit my <a href="#contact">Contact section</a> for more details.`
    },
    certifications: {
      keywords: ['certification', 'certified', 'certificate', 'credential', 'aws certified'],
      response: `I hold the following certification:

☁️ **AWS Certified Solutions Architect – Associate**
• Issued by Amazon Web Services
• Demonstrates expertise in AWS cloud architecture and best practices

See more in my <a href="#about">About section</a>!`
    },
    about: {
      keywords: ['about', 'who are you', 'tell me about', 'yourself', 'bio', 'background'],
      response: `I'm Tanmayi Shurpali, a Data Enthusiast passionate about turning complex data into actionable insights!

📊 Currently pursuing my **Master's in Data Analytics and Engineering** at Northeastern University (GPA: 3.7)

💼 Working as a **Data Analyst Co-op at Fidelity Investments**

🎯 I specialize in:
• Data Analytics & Visualization
• Building scalable data solutions
• Machine Learning & Applied AI
• Cloud technologies (AWS, Snowflake)

I have 1.8+ years of experience, have worked with 2 major companies, processed 5M+ records, and mastered 15+ tools!

Learn more in my <a href="#about">About section</a>!`
    },
    resume: {
      keywords: ['resume', 'cv', 'download', 'pdf'],
      response: `I don't have a direct resume download link in the chat, but you can find all my experience, education, skills, and projects throughout this portfolio!

📋 Quick navigation:
• <a href="#experience">Experience</a>
• <a href="#education">Education</a>
• <a href="#projects">Projects</a>
• <a href="#skills">Skills</a>

Feel free to reach out via my <a href="#contact">Contact section</a> if you'd like a formal resume!`
    }
  };

  // Chat functionality
  setTimeout(() => {
    const chatBubble = el.querySelector('#chat-bubble');
    const chatWindow = el.querySelector('#chat-window');
    const chatClose = el.querySelector('#chat-close');
    const chatInput = el.querySelector('#chat-input');
    const chatSend = el.querySelector('#chat-send');
    const chatMessages = el.querySelector('#chat-messages');
    const chatSuggestions = el.querySelector('#chat-suggestions');

    // Toggle chat window
    chatBubble.addEventListener('click', () => {
      chatWindow.classList.add('active');
      chatBubble.classList.add('hidden');
      chatInput.focus();
    });

    chatClose.addEventListener('click', () => {
      chatWindow.classList.remove('active');
      chatBubble.classList.remove('hidden');
    });

    // Handle suggestions
    chatSuggestions.addEventListener('click', (e) => {
      if (e.target.classList.contains('suggestion-chip')) {
        const query = e.target.getAttribute('data-query');
        handleUserMessage(query);
      }
    });

    // Send message
    function sendMessage() {
      const message = chatInput.value.trim();
      if (message) {
        handleUserMessage(message);
        chatInput.value = '';
      }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Handle user message
    function handleUserMessage(message) {
      // Add user message
      addMessage(message, 'user');

      // Show typing indicator
      const typingIndicator = addTypingIndicator();

      // Process message and respond
      setTimeout(() => {
        typingIndicator.remove();
        const response = getResponse(message);
        addMessage(response, 'bot');
      }, 800);
    }

    // Add message to chat
    function addMessage(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `chat-message ${sender}-message`;
      
      if (sender === 'bot') {
        messageDiv.innerHTML = `
          <div class="message-avatar">🤖</div>
          <div class="message-content">
            <div class="message-text">${text}</div>
          </div>
        `;
      } else {
        messageDiv.innerHTML = `
          <div class="message-content">
            <div class="message-text">${text}</div>
          </div>
        `;
      }

      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add typing indicator
    function addTypingIndicator() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'chat-message bot-message typing-indicator';
      typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
          <div class="typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      `;
      chatMessages.appendChild(typingDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      return typingDiv;
    }

    // Get response based on user message
    function getResponse(message) {
      const lowerMessage = message.toLowerCase();

      // Check each category in knowledge base
      for (const [category, data] of Object.entries(knowledgeBase)) {
        if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
          return data.response;
        }
      }

      // Default response
      return `I'm not sure about that, but I can help you learn about:

💼 My <a href="#experience">Experience</a> at AWS and Fidelity
🚀 My <a href="#projects">Projects</a> and GitHub repositories
🛠️ My <a href="#skills">Skills</a> and technologies
📧 How to <a href="#contact">Contact</a> me
🎓 My <a href="#about">Education</a> and background

Just ask me anything about these topics!`;
    }
  }, 100);

  return el;
}