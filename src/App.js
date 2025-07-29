import React, { useState } from 'react';
import './App.css';
import profileImg from './profile.jpg';

const projects = [
  {
    title: 'ADAS and Pothole Detection',
    role: 'Backend Developer',
    period: '2025–Present',
    description: 'Real-time, camera-based pothole and terrain monitoring using AI and computer vision (YOLOv8, CNNs).',
  },
  {
    title: 'LLM Corrector',
    role: 'Frontend Developer',
    period: '2025–2029',
    description: 'AI-powered solution for analyzing and correcting question papers using LLMs.',
  },
  {
    title: 'ARTS – Aegis Rail Track Security',
    role: 'Backend Developer',
    period: '2024–2025',
    description: 'Object detection to prevent track accidents, sending alerts to security.',
  },
];

const skills = [
  'Project Management', 'Public Relations', 'Teamwork', 'Time Management',
  'Leadership', 'Effective Communication', 'Critical Thinking', 'Motivational Speaker',
];

const techSkills = [
  'Python', 'JavaScript', 'HTML', 'CSS', 'Flask', 'Git', 'Prophet', 'Scikit-learn', 'Jupyter Notebook',
  'Clustering', 'Recommendation Systems', 'Forecasting', 'Anomaly Detection',
];

const certifications = [
  {
    title: 'Applied Artificial Intelligence: Practical Implementations',
    description: 'Hands-on experience with real-world AI applications and deployment strategies.',
    link: '',
  },
  {
    title: 'Introduction to Pandas',
    description: 'Fundamentals of data manipulation and analysis using the Pandas library in Python.',
    link: '',
  },
  {
    title: 'Introduction to Python',
    description: 'Core programming concepts and syntax in Python for beginners.',
    link: '',
  },
  {
    title: 'Introduction to Machine Learning',
    description: 'Overview of machine learning algorithms and their practical applications.',
    link: '',
  },
  {
    title: 'Introduction to NumPy',
    description: 'Numerical computing and array operations using NumPy in Python.',
    link: '',
  },
  {
    title: 'Introduction to OpenCV',
    description: 'Basics of computer vision and image processing with OpenCV.',
    link: '',
  },
  {
    title: 'Introduction to SQL',
    description: 'Essentials of database querying and management using SQL.',
    link: '',
  },
  {
    title: 'Introduction to Matplotlib',
    description: 'Data visualization techniques using Matplotlib in Python.',
    link: '',
  },
  {
    title: 'Java',
    description: 'Comprehensive understanding of Java programming language and OOP concepts.',
    link: '',
  },
  {
    title: 'Introduction to Spark',
    description: 'Big data processing and analytics using Apache Spark.',
    link: '',
  },
  {
    title: 'Web Development with HTML, CSS & JavaScript',
    description: 'Building responsive and interactive web pages using core web technologies.',
    link: '',
  },
  {
    title: 'Python (INFOSYS PART-1)',
    description: 'Foundational Python programming skills, INGOSYS curriculum.',
    link: '',
  },
  {
    title: 'Python (INFOSYS FOUNDATION CERTIFICATION FINAL)',
    description: 'Completion of Infosys Foundation’s final Python certification.',
    link: '',
  },
  {
    title: 'Python (INFOSYS BASICS)',
    description: 'Basic Python programming concepts, Infosys certification.',
    link: '',
  },
  {
    title: 'Python (INFOSYS PART-2)',
    description: 'Advanced Python programming, Infosys curriculum.',
    link: '',
  },
  {
    title: 'Daily Quiz of Engineering: April Series (Unstop)',
    description: 'Consistent participation and achievement in daily engineering quizzes.',
    link: '',
  },
];

const education = [
  {
    school: 'K S School of Engineering and Management',
    degree: 'B.E. in Artificial Intelligence and Data Science',
    period: '2022–2026',
  },
  {
    school: 'Sri Krishna PU College',
    degree: 'PCMC’s',
    period: '2020–2022',
    details: '73%'
  },
];

const languages = [
  'English (Fluent)', 'Kannada (Fluent)', 'Telugu (Fluent)', 'Hindi (Intermediate)', 'Tamil (Intermediate)'
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <nav className="navbar">
        <div className="nav-title">K SURYA PRAKASH</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </nav>
      <main>
        <section id="about" className="section about">
          <div className="about-flex">
            <img src={profileImg} alt="K Surya Prakash" className="profile-photo" />
            <div className="about-main">
              <h1>K SURYA PRAKASH</h1>
              <p className="subtitle">Enthusiastic BE student in Artificial Intelligence and Data Science</p>
              <p>Passionate about software engineering, especially data analysis. Enjoys blending tech and creativity. Familiar with C++, Java, and Python, always looking to learn more and grow in both tech and creative spaces.</p>
              <div className="contact-info">
                <span>📞 +91 86609 22027</span>
                <span>✉️ ksurya86609@gmail.com</span>
                <span>📍 Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <h3>{proj.title}</h3>
                <p><b>Role:</b> {proj.role} <span className="period">({proj.period})</span></p>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="skills" className="section">
          <h2>Skills & Certifications</h2>
          <div className="skills-list">
            <div>
              <h4>Soft Skills</h4>
              <ul>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div>
              <h4>Technical Skills</h4>
              <ul>{techSkills.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div>
              <h4>Languages</h4>
              <ul>{languages.map((l, i) => <li key={i}>{l}</li>)}</ul>
            </div>
          </div>
        </section>
        <section id="certifications" className="section">
          <h2>Certifications</h2>
          <div className="certifications-list">
            {certifications.map((cert, idx) => (
              <div className="cert-card" key={idx}>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
                )}
              </div>
            ))}
          </div>
        </section>
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-list">
            {education.map((edu, idx) => (
              <div className="edu-card" key={idx}>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <p className="period">{edu.period}{edu.details ? ` | ${edu.details}` : ''}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Feel free to reach out for collaboration or just a friendly hello!</p>
          <ul className="contact-list">
            <li>📞 +91 86609 22027</li>
            <li>✉️ <a href="mailto:ksurya86609@gmail.com">ksurya86609@gmail.com</a></li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} K Surya Prakash. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
