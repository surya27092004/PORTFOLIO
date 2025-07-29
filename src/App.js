import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Latest information from resume
  const contact = {
    name: 'K SURYA PRAKASH',
    title: 'AI&DS Student',
    email: 'ksurya86609@gmail.com',
    phone: '+91 8660922027',
    location: 'Bengaluru, Karnataka 560085',
    website: 'https://ksuryaprakashportfolio.netlify.app/',
    github: 'https://github.com/surya27092004',
    linkedin: 'https://linkedin.com/in/sp-suryaprakash',
    resume: '/K-SURYA-PRAKASH-Resume.pdf',
  };

  const summary = A final-year B.E. student specializing in Artificial Intelligence and Data Science at K.S. School of Engineering and Management, Bengaluru. Strong foundation in Python, SQL, and core AI/ML concepts. Hands-on experience from internships and certifications. Quick learner with strong communication, teamwork, and problem-solving skills. Eager to contribute to impactful and innovative tech solutions.;

  const education = [
    {
      school: 'K S SCHOOL OF ENGINEERING AND MANAGEMENT',
      degree: 'Bachelor of Engineering in Artificial Intelligence and Data Science',
      cgpa: '8.50',
      period: '2026-2026',
      location: 'Bengaluru, Karnataka',
    },
    {
      school: "SRI KRISHNA PU COLLEGE",
      degree: "PUC in PCMC's",
      percentage: '74%',
      period: '2022-2022',
      location: 'Bengaluru, Karnataka',
    },
  ];

  const experience = [
    {
      title: 'Data Science Intern',
      company: 'Pinnacle Labs',
      period: '07/2025 – 08/2025',
      location: 'Bengaluru, India',
      description: 'Engineered chatbot and fake news detection utilizing Python and datasets.'
    },
  ];

  const projects = [
    {
      title: 'ADAS and Pothole Detection',
      description: 'An ongoing project focused on improving road safety through technology. AI-based detection system for potholes and driver assistance using real-time image analysis.',
      period: '02/2025 – Present',
    },
    {
      title: 'ARTS - Aegis Rail Track Security',
      description: 'A mini project designed to improve railway safety and monitoring. Conceptualized a system for monitoring rail tracks using sensor input and alert mechanisms.',
      period: '07/2024 – 12/2024',
    },
    {
      title: 'LLM Corrector',
      description: 'A project aimed at enhancing user interaction with AI models. Developed a tool to refine and correct user prompts using language model techniques and NLP concepts.',
      period: '2024 – 2025',
    },
    {
      title: 'Chat Bot',
      description: 'Created a conversational agent with a focus on user experience. Developed a chatbot for basic interactions with emphasis on natural flow and response accuracy.',
      period: '07/2025 – 08/2025',
    },
    {
      title: 'Fake News Detection',
      description: 'A complete machine learning web application for detecting fake news using Python, Streamlit, and scikit-learn. The application uses natural language processing techniques to classify news articles and headlines as either Real or Fake.',
      period: '06/2025 – 07/2025',
    },
  ];

  const techSkills = [
    'HTML', 'CSS', 'Python', 'MongoDB', 'SQL',
    'Numpy', 'Pandas', 'OpenCV', 'Matplotlib', 'Git', 'PowerBI', 'Figma', 'UI/UX',
  ];

  const softSkills = [
    'Project Management', 'Public Relations', 'Teamwork', 'Time Management',
    'Effective Communication', 'Critical Thinking', 'Adaptability',
  ];

  const certifications = [
    'Python Programming (Part 1, 2 & Foundation), Onwingspan (Infosys SpringBoard)',
    'Web Development with HTML, CSS, JS, DataFlair',
    'Python Foundation Certification, Onwingspan (Infosys SpringBoard)',
    'Introduction to Pandas, Numpy, Matplotlib & OpenCV, DataFlair',
    'Applied Artificial Intelligence: Practical Implementations, TechSaksham / Edunet Foundation',
    'Introduction to Machine Learning, DataFlair',
    'Introduction to Python, DataFlair',
    'Introduction to SQL, DataFlair',
    'Introduction to DSA, DataFlair',
    'Introduction to Generative AI and Generative AI Studio, Google Cloud',
    'Python Data Analytics, Mevi Technologies',
    'Prompt Design in Vertex AI, Google Cloud',
  ];



  const achievements = [
    'Presented a LLM Corrector project at Regional Hub Expo at Hassan sponsored by TechSaksham/EduNet Foundation',
    'Participated in college level SAP-HACKATHON',
  ];

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <nav className="navbar">
        <div className="nav-title">{contact.name}</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙' : '☀'}
        </button>
      </nav>
      <main>
        <section id="about" className="section about">
          <h1>{contact.name}</h1>
          <h3>{contact.title}</h3>
          <p className="subtitle">{summary}</p>
          <div className="contact-info">
            <span>📞 {contact.phone}</span>
            <span>✉ <a href={mailto:${contact.email}}>{contact.email}</a></span>
            <span>📍 {contact.location}</span>
            <span>🌐 <a href={contact.website} target="_blank" rel="noopener noreferrer">Portfolio</a></span>
            <span>💼 <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            <span>🐙 <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></span>
          </div>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
            style={{
              display: 'inline-block',
              marginTop: '1.2rem',
              padding: '0.6rem 1.5rem',
              background: '#06b6d4',
              color: '#fff',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(6,182,212,0.13)',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            ⬇ Download Resume
          </a>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <h3>{proj.title}</h3>
                <p className="period">{proj.period}</p>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="experience-list">
            {experience.map((exp, idx) => (
              <div className="exp-card" key={idx}>
                <h3>{exp.title} @ {exp.company}</h3>
                <p className="period">{exp.period} | {exp.location}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-list">
            <div>
              <h4>Technical Skills</h4>
              <ul>{techSkills.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div>
              <h4>Soft Skills</h4>
              <ul>{softSkills.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
          </div>
        </section>
        <section id="certifications" className="section">
          <h2>Certifications</h2>
          <ul className="certifications-list">
            {certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </section>
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-list">
            {education.map((edu, idx) => (
              <div className="edu-card" key={idx}>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                {edu.percentage && <p>Percentage: {edu.percentage}</p>}
                <p className="period">{edu.period} | {edu.location}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="achievements" className="section">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <ul className="contact-list">
            <li>📞 {contact.phone}</li>
            <li>✉ <a href={mailto:${contact.email}}>{contact.email}</a></li>
            <li>📍 {contact.location}</li>
            <li>🌐 <a href={contact.website} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li>💼 <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>🐙 <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} {contact.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
