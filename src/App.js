import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>K SURYA PRAKASH</h1>
        <div className="resume-contact">
          <span>✉️ ksurya86609@gmail.com</span>
          <span>📞 +91 8660922027</span>
          <span>📍 Bengaluru, Karnataka 560085</span>
        </div>
        <div className="resume-links">
          <a href="https://ksuryaprakashportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <a href="https://github.com/surya27092004" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sp-suryaprakash" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>
      <section className="resume-summary">
        <h2>SUMMARY</h2>
        <p>I am K Surya Prakash, a final-year B.E. student specializing in Artificial Intelligence and Data Science at K.S. School of Engineering and Management, Bengaluru. I have a strong foundation in Python, SQL, and core AI/ML concepts, with hands-on experience from internships and certifications. I am a quick learner with strong communication, teamwork, and problem-solving skills, eager to contribute to impactful and innovative tech solutions.</p>
      </section>
      <section className="resume-education">
        <h2>EDUCATION</h2>
        <div>
          <strong>Bachelor of Engineering in Artificial Intelligence and Data Science,</strong> <em>K S SCHOOL OF ENGINEERING AND MANAGEMENT</em> <span className="edu-period">2026 – 2026</span><br />
          <span>CGPA: 8.50</span>
        </div>
        <div>
          <strong>PUC in PCMC's,</strong> <em>SRI KRISHNA PU COLLEGE</em> <span className="edu-period">2022 – 2022</span><br />
          <span>Percentage: 74</span>
        </div>
      </section>
      <section className="resume-skills">
        <h2>TECHNICAL SKILLS</h2>
        <div className="skills-flex">
          <div>
            <strong>Languages</strong><br />
            HTML, CSS, Python, MongoDB, SQL
          </div>
          <div>
            <strong>Frameworks & Tools</strong><br />
            Numpy, Pandas, OpenCV, Matplotlib, Git, PowerBI, Figma, UI/UX
          </div>
        </div>
      </section>
      <section className="resume-soft-skills">
        <h2>SOFT SKILLS</h2>
        <div className="soft-skills-list">
          Project Management • Public Relations • Teamwork • Time Management • Effective Communication • Critical Thinking • Adaptability
        </div>
      </section>
      <section className="resume-experience">
        <h2>EXPERIENCE</h2>
        <div>
          <strong>Data Science Intern, Pinnacle Labs</strong> <span className="exp-period">07/2025 – 08/2025</span> <span>Bengaluru, India</span>
          <ul>
            <li>Engineered chatbot and fake news detection utilizing Python and datasets.</li>
          </ul>
        </div>
      </section>
      <section className="resume-projects">
        <h2>PROJECTS</h2>
        <div>
          <strong>ADAS and Pothole Detection</strong> <span className="proj-period">02/2025 – Present</span>
          <ul>
            <li>An ongoing project focused on improving road safety through technology. AI-based detection system for potholes and driver assistance using real-time image analysis.</li>
          </ul>
        </div>
        <div>
          <strong>ARTS - Aegis Rail Track Security</strong> <span className="proj-period">07/2024 – 12/2024</span>
          <ul>
            <li>A mini project designed to improve railway safety and monitoring. Conceptualized a system for monitoring rail tracks using sensor input and alert mechanisms.</li>
          </ul>
        </div>
        <div>
          <strong>LLM Corrector</strong> <span className="proj-period">2024 – 2025</span>
          <ul>
            <li>A project aimed at enhancing user interaction with AI models. Developed a tool to refine and correct user prompts using language model techniques and NLP concepts.</li>
          </ul>
        </div>
        <div>
          <strong>Chat Bot</strong> <span className="proj-period">07/2025 – 08/2025</span>
          <ul>
            <li>Created a conversational agent with a focus on user experience. Developed a chatbot for basic interactions with emphasis on natural flow and response accuracy.</li>
          </ul>
        </div>
        <div>
          <strong>Fake News Detection</strong> <span className="proj-period">06/2025 – 07/2025</span>
          <ul>
            <li>A complete machine learning web application for detecting fake news using Python, Streamlit, and scikit-learn. The application uses natural language processing techniques to classify news articles and headlines as either Real or Fake.</li>
          </ul>
        </div>
      </section>
      <section className="resume-certifications">
        <h2>CERTIFICATIONS</h2>
        <div className="cert-columns">
          <ul>
            <li>Python Programming (Part 1, 2 & Foundation), Owningspan (Infosys SpringBoard)</li>
            <li>Web Development with HTML, CSS, JS, DataFlair</li>
            <li>Introduction to Python, DataFlair</li>
            <li>Introduction to Generative AI and Generative AI Studio, Google Cloud</li>
            <li>Data Analytics Course, Google Cloud</li>
          </ul>
          <ul>
            <li>Python Foundation Certification, Owningspan (Infosys SpringBoard)</li>
            <li>Introduction to Pandas, Numpy, Matplotlib & OpenCV, DataFlair</li>
            <li>Introduction to SQL, DataFlair</li>
            <li>Python Data Analytics, Mevi Technologies</li>
          </ul>
          <ul>
            <li>Applied Artificial Intelligence: Practical Implementations, TechSaksham / Edunet Foundation</li>
            <li>Introduction to Machine Learning, DataFlair</li>
            <li>Introduction to DSA, DataFlair</li>
            <li>Prompt Design in Vertex AI, Google Cloud</li>
          </ul>
        </div>
      </section>
      <section className="resume-achievements">
        <h2>ACHIEVEMENTS</h2>
        <div>
          <strong>Regional Expo:</strong>
          <ul>
            <li>Presented a LLM Corrector project at Regional Hub Expo at Hassan sponsored by TechSaksham/EduNet Foundation</li>
          </ul>
        </div>
        <div>
          <strong>SAP-HACKATHON</strong>
          <ul>
            <li>Participated in college level SAP-HACAKTHON</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
