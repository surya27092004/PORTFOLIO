import React, { useState } from 'react';
import './App.css';
import profileImage from './profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <nav className="navbar">
        <div className="nav-title" style={{ textTransform: 'uppercase' }}>SP</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src={profileImage} alt="Surya Prakash" className="profile-image" />
          </div>
          <h1 style={{ textTransform: 'uppercase' }}>K Surya Prakash</h1>
          <h2>AI & Data Science Enthusiast</h2>
          <div className="social-links">
            <a href="https://github.com/surya27092004" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/sp-suryaprakash" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://ksuryaprakashportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fas fa-globe"></i>
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </header>

      <main>
      <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>I am K Surya Prakash, a final-year B.E. student specializing in Artificial Intelligence and Data Science at K.S. School of Engineering and Management, Bengaluru. I have a strong foundation in Python, SQL, and core AI/ML concepts, with hands-on experience from internships and certifications.</p>
            <p>I am a quick learner with strong communication, teamwork, and problem-solving skills, eager to contribute to impactful and innovative tech solutions.</p>
            <div className="contact-info">
              <span>✉️ ksurya86609@gmail.com</span>
              <span>📱 +91 8660922027</span>
              <span>📍 Bengaluru, Karnataka 560085</span>
            </div>
          </div>
        </section>
      <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>Bachelor of Engineering in AI & Data Science</h3>
              <p className="institution">K S School of Engineering and Management</p>
              <p className="period">2022 – 2026</p>
              <p className="grade">CGPA: 8.50</p>
              <p className="location">Bengaluru, Karnataka</p>
            </div>
            <div className="education-card">
              <h3>PUC in PCMC's</h3>
              <p className="institution">Sri Krishna PU College</p>
              <p className="period">2020 – 2022</p>
              <p className="grade">Percentage: 74%</p>
              <p className="location">Bengaluru, Karnataka</p>
            </div>
          </div>
        </section>
      <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML/CSS/JS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">SQL</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MongoDB</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Data Analysis</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Machine Learning</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3>Frameworks & Tools</h3>
              <div className="tools-grid">
                <div className="tool-item">Numpy</div>
                <div className="tool-item">Pandas</div>
                <div className="tool-item">OpenCV</div>
                <div className="tool-item">Matplotlib</div>
                <div className="tool-item">Git</div>
                <div className="tool-item">PowerBI</div>
                <div className="tool-item">Figma</div>
                <div className="tool-item">UI/UX</div>
              </div>
            </div>
            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="soft-skills">
                <div className="soft-skill">Project Management</div>
                <div className="soft-skill">Public Relations</div>
                <div className="soft-skill">Teamwork</div>
                <div className="soft-skill">Time Management</div>
                <div className="soft-skill">Effective Communication</div>
                <div className="soft-skill">Critical Thinking</div>
                <div className="soft-skill">Adaptability</div>
              </div>
            </div>
          </div>
        </section>
      <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Data Science Intern</h3>
                <p className="company">Pinnacle Labs</p>
                <p className="period">Jul 2025 - Aug 2025 • 2 mos</p>
                <p className="location">Bengaluru, India</p>
                <ul>
                  <li>Engineered chatbot and fake news detection utilizing Python and datasets.</li>
                  <li>Implemented machine learning models to improve detection accuracy.</li>
                  <li>Collaborated with team members to optimize model performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>ADAS and Pothole Detection</h3>
                <a href="#" className="github-link" aria-label="View on GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="project-description">An ongoing project focused on improving road safety through technology. AI-based detection system for potholes and driver assistance using real-time image analysis.</p>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>ARTS - Aegis Rail Track Security</h3>
                <a href="#" className="github-link" aria-label="View on GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="project-description">A mini project designed to improve railway safety and monitoring. Conceptualized a system for monitoring rail tracks using sensor input and alert mechanisms.</p>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>LLM Corrector</h3>
                <a href="#" className="github-link" aria-label="View on GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="project-description">A project aimed at enhancing user interaction with AI models. Developed a tool to refine and correct user prompts using language model techniques and NLP concepts.</p>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Fake News Detection</h3>
                <a href="#" className="github-link" aria-label="View on GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="project-description">A complete machine learning web application for detecting fake news using Python, Streamlit, and scikit-learn. The application uses NLP techniques to classify news articles.</p>
            </div>
          </div>
        </section>
      <section id="certifications" className="section">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            <div className="certification-card">
              <h3>Python Programming</h3>
              <p className="issuer">Owningspan (Infosys SpringBoard)</p>
              <p className="date">2023</p>
            </div>
            <div className="certification-card">
              <h3>Web Development</h3>
              <p className="issuer">DataFlair</p>
              <p className="date">2023</p>
            </div>
            <div className="certification-card">
              <h3>Generative AI Studio</h3>
              <p className="issuer">Google Cloud</p>
              <p className="date">2024</p>
            </div>
            <div className="certification-card">
              <h3>Data Analytics</h3>
              <p className="issuer">Google Cloud</p>
              <p className="date">2024</p>
            </div>
            <div className="certification-card">
              <h3>Machine Learning</h3>
              <p className="issuer">DataFlair</p>
              <p className="date">2023</p>
            </div>
            <div className="certification-card">
              <h3>Applied AI</h3>
              <p className="issuer">TechSaksham / Edunet Foundation</p>
              <p className="date">2024</p>
            </div>
          </div>
        </section>
      <section id="achievements" className="section">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Regional Expo Presenter</h3>
              <p>Presented LLM Corrector project at Regional Hub Expo at Hassan sponsored by TechSaksham/EduNet Foundation</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">💻</div>
              <h3>SAP Hackathon Participant</h3>
              <p>Successfully participated in college-level SAP Hackathon, collaborating with team members to develop innovative solutions</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-content">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <div className="contact-methods">
            <a href="mailto:ksurya86609@gmail.com" className="contact-button">
              <span>✉️ Email Me</span>
            </a>
            <a href="https://linkedin.com/in/sp-suryaprakash" target="_blank" rel="noopener noreferrer" className="contact-button">
              <span>💼 LinkedIn</span>
            </a>
            <a href="https://github.com/surya27092004" target="_blank" rel="noopener noreferrer" className="contact-button">
              <span>👨‍💻 GitHub</span>
            </a>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} K Surya Prakash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
