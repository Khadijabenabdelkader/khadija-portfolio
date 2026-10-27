import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,Workflow,
  RefreshCw,ArrowUpRight, Code2, Mail,
  Menu, X, Sparkles, GraduationCap, BriefcaseBusiness, Layers3,
  Globe2, Download, CheckCircle2, PlayCircle, FileText, Monitor, ShoppingBag
} from 'lucide-react';
import './styles.css';

function GithubIcon({ size = 17, ...props }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3"/><path d="M16 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
}

function LinkedinIcon({ size = 17, ...props }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.97V9.01h2.96v9.33ZM6.45 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.61h-2.96v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.62H9.19V9.01h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.56 1.98 3.56 4.55v5.01Z"/></svg>;
}

const PROFILE = {
  github: 'https://github.com/Khadijabenabdelkader',
  github_bricklogistics: 'https://github.com/Khadijabenabdelkader/BrickLogistics.git',
  github_resin:'https://github.com/Khadijabenabdelkader/resin-website.git',
  github_sac_consulting: 'https://github.com/Khadijabenabdelkader/Training-management-web-app.git',
  github_satp_website: 'https://github.com/Khadijabenabdelkader/SATP_WebSite.git',
  linkedin: 'https://www.linkedin.com/in/khadija-ben-abdelkader-504087287/',
  email: 'khadijabenabdelkader1206@gmail.com',
};

const projects = [
  {
    number: '01', category: 'FULL-STACK WEB APPLICATION', title: 'BrickLogistics',
    subtitle: 'Smart truck management',
    image: '/images/bricklogistics.png',
    description: 'A logistics platform that coordinates trucks, factories, brick products, and orders with role-based access and live status updates.',
    details: ['Workflows for truck drivers, factory administrators, and administrators', 'Factory products, prices, stock, and order management', 'JWT authentication and real-time communication'],
    stack: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Tailwind CSS'], tone: 'sand', icon: Layers3,
    repoUrl: PROFILE.github_bricklogistics, videoUrl: '/videos/bricklogistics.mp4',
  },
  {
    number: '02', category: 'GRADUATION PROJECT · 2025', title: 'SAC-Consulting',
    subtitle: 'Training management platform',
    image: '/images/sac-consulting.png',
    description: 'A web application that streamlines training-center administration and makes training services easier to manage.',
    details: ['Training sessions, trainers, participants, evaluations, events, and calendar', 'Training requests, quotations, trainer applications, and notifications', 'React interface, Express backend, MySQL database, and secure authentication'],
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MySQL'], tone: 'rose', icon: GraduationCap,
    repoUrl: PROFILE.github_sac_consulting, videoUrl: '/videos/sac-consulting.mp4',
  },
  {
    number: '03', category: 'WEB DEVELOPMENT · 2024', title: 'SATP Website',
    subtitle: 'Société Abid de Travaux Publics',
    image: '/images/satp-website.png',
    description: 'A company website designed to present the business and showcase and monitor construction projects.',
    details: ['Company and service presentation', 'Construction project showcase and tracking', 'Responsive interface built with Angular and Tailwind CSS'],
    stack: ['Angular', 'Node.js', 'MongoDB', 'Tailwind CSS'], tone: 'sage', icon: Monitor,
    repoUrl: PROFILE.github_satp_website, videoUrl: '/videos/satp-website.mp4',
  },
  {
    number: '04', category: 'E-COMMERCE · 2024', title: 'E-commerce Website for Resin Products',
    subtitle: 'MERN-stack online store',
    image: '/images/resin-ecommerce.png',
    description: 'An online shopping experience for resin products, with account access, order management, and an intelligent chatbot.',
    details: ['Product browsing and e-commerce experience', 'User authentication and order management', 'Chatbot to help improve the customer experience'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Chatbot'], tone: 'blue', icon: ShoppingBag,
    repoUrl: PROFILE.github_resin, videoUrl: '/videos/resin-ecommerce.mp4',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    number: '01',
    description: 'Interfaces & experiences',
    items: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React.js', icon: 'devicon-react-original colored' },
      { name: 'Angular', icon: 'devicon-angular-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
    ],
  },
  {
    title: 'Backend',
    number: '02',
    description: 'Logic, services & APIs',
    items: [
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Spring Boot', icon: 'devicon-spring-original colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js', icon: 'devicon-express-original' },
      { name: 'REST APIs', icon: 'devicon-fastapi-plain colored' },
      { name: 'JWT / Security', icon: 'devicon-spring-original colored' },
    ],
  },
  {
    title: 'Data & AI',
    number: '03',
    description: 'Data, insights & intelligence',
    items: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Machine Learning', icon: 'devicon-scikitlearn-plain colored' },
      { name: 'PCA & Clustering', icon: 'devicon-numpy-plain colored' },
      { name: 'Ollama', icon: 'devicon-ollama-plain' },
    ],
  },
  {
    title: 'Tools & Methods',
    number: '04',
    description: 'Workflow & collaboration',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'Eclipse', icon: 'devicon-eclipse-plain colored' },
      { name: 'UML', icon: 'devicon-unifiedmodelinglanguage-plain' },
      { name: 'Scrum', icon: 'devicon-jira-plain colored' },
    ],
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement"><span className="status-dot" /> Open to learning, collaboration & remote opportunities</div>
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Khadija home">
          <span className="brand-mark">K.</span><span>Khadija <em>Ben Abdelkader</em></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {[['About', '#about'], ['Education', '#education'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEERING · FULL-STACK · AI</div>
            <h1>Thoughtful code.<br /><span>Meaningful</span> solutions.</h1>
            <p className="hero-lead">Hi, I’m <strong>Khadija</strong> — a second-year Teleinformatics engineering student and software developer who enjoys turning ideas into useful, human-centered digital experiences.</p>
            <p className="hero-note">Currently exploring full-stack development, real-time applications, and AI-powered tools.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-dark">Explore my work <ArrowRight size={17} /></a>
              <a href="/cv/Resume_KhadijaBenAbdelkader.pdf" className="button button-light" download><Download size={16} /> English CV</a>
              <a href="/cv/CV_KhadijaBenAbdelkader.pdf" className="button button-light" download><Download size={16} /> CV français</a>
            </div>
            <div className="hero-socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><GithubIcon size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <span className="social-separator" />
              <span className="location"><Globe2 size={15} /> Tunisia</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-backdrop" />
            <div className="portrait-frame">
              <img src="/images/khadija.jpg" alt="Portrait of Khadija Ben Abdelkader" />
            </div>
            <div className="portrait-caption"><span className="caption-star">✳</span><div><strong>Curious by nature</strong><small>Building, learning, improving.</small></div></div>
            <div className="floating-note"><Sparkles size={17} /><span>Always learning<br /><b>one project at a time</b></span></div>
            <span className="decor decor-one">✳</span><span className="decor decor-two">✦</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO DISCOVER</a>
        </section>

        <section className="intro-strip">
          <div className="strip-inner"><span>MY APPROACH</span><p>Curiosity first. Clean code always. Progress over perfection.</p><span className="strip-flower">✳</span></div>
        </section>

        <section className="section-wrap about-section section-pad" id="about">
          <div className="section-kicker">01 / A LITTLE INTRODUCTION</div>
          <div className="about-grid">
            <div><h2>Developer in progress,<br /><i>problem-solver at heart.</i></h2></div>
            <div className="about-body">
              <p className="large-copy">I’m a software developer and second-year engineering-cycle student in Teleinformatics at ISITCOM, with a Bachelor’s degree in Computer Science specialising in Software Engineering from ISIMM.</p>
              <p>I enjoy building practical applications, understanding how the pieces fit together, and learning new technologies by using them to solve real problems. My work includes training-management platforms, e-commerce experiences, smart logistics, and AI-assisted developer tools.</p>
              <p>I’m motivated by continuous learning, collaborative work, and opportunities to contribute to useful digital products. I’m especially interested in full-stack development, AI, and remote collaboration.</p>
              <a href="#contact" className="underlined-link">Let’s connect <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="mini-stats">
            <div><span className="stat-number">01</span><span className="stat-label">Engineering cycle<br />in Téléinformatique</span></div>
            <div><span className="stat-number">04</span><span className="stat-label">Featured projects<br />and experiments</span></div>
            <div><span className="stat-number">∞</span><span className="stat-label">Things to learn<br />and build</span></div>
          </div>
        </section>

        <section className="education-section section-pad" id="education">
          <div className="section-wrap">
            <div className="section-kicker">02 / THE LEARNING JOURNEY</div>
            <div className="section-heading-row"><h2>My <i>education.</i></h2><p>Building a solid foundation, one step at a time.</p></div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-marker"><GraduationCap size={19} /></div>
                <div className="timeline-date">2025 – 2028 · CURRENT</div>
                <div className="timeline-content"><h3>Engineering Cycle — Téléinformatique</h3><p className="institution">ISITCOM · Institut Supérieur d’Informatique et des Technologies de Communication</p><p>Second-year engineering-cycle student developing skills across software engineering, computing, and communication technologies.</p><span className="timeline-tag">Engineering studies</span></div>
              </article>
              <article className="timeline-item">
                <div className="timeline-marker"><GraduationCap size={19} /></div>
                <div className="timeline-date">2022 – 2025 · COMPLETED</div>
                <div className="timeline-content"><h3>Bachelor’s Degree in Computer Science — Software Engineering</h3><p className="institution">ISIMM · Institut Supérieur d’Informatique et de Mathématiques de Monastir</p><p>Foundation in software design and development, programming, databases, and web application development.</p><span className="timeline-tag">Génie Logiciel</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section section-pad" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row"><h2>Projects with <i>purpose.</i></h2><p>Academic and personal work that reflects what I’m learning and building.</p></div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              const expanded = activeProject === project.number;
              return <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-card-top"><span>{project.number} <span className="project-slash">/</span> {project.category}</span><span className="project-icon"><Icon size={20} /></span></div>
                
                
<div className="project-illustration" aria-hidden="true">
  {project.number === '01' ? (
    <div className="illustration-logistics">
      <div className="route-line" />
      <span className="route-pin pin-a">A</span>
      <span className="route-pin pin-b">B</span>
      <div className="mini-dashboard">
        <span />
        <span />
        <span />
      </div>
      <div className="truck-shape">▰</div>
    </div>
  ) : project.number === '02' ? (
    <div className="illustration-calendar">
      <div className="calendar-head">YOUR NEXT CHAPTER</div>
      <div className="calendar-grid">
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className={i === 7 ? 'calendar-active' : ''}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <div className="calendar-label">
        Training · Growth · Progress
      </div>
    </div>
  ) : project.number === '03' ? (
    <div className="illustration-ai">
      <span className="ai-orbit orbit-a" />
      <span className="ai-orbit orbit-b" />
      <div className="ai-core">
        <Sparkles size={33} />
      </div>
      <span className="ai-chip chip-a">Code review</span>
      <span className="ai-chip chip-b">Debug</span>
      <span className="ai-chip chip-c">README</span>
    </div>
  ) : (
    <div className="illustration-chart">
      <div className="chart-axis" />
      <div className="chart-bars">
        {[34, 55, 44, 76, 62, 89, 68, 96, 58].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="chart-label">24-HOUR PM2.5 PROFILE</div>
    </div>
  )}
</div>

                <div className="project-info"><span className="project-subtitle">{project.subtitle}</span><h3>{project.title}</h3><p>{project.description}</p>
                  <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  {expanded && <div className="project-details"><strong>Highlights</strong><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>}
                  <button className="project-more" onClick={() => setActiveProject(expanded ? null : project.number)}>{expanded ? 'Show less' : 'View highlights'} <ArrowRight size={16} /></button>
                  <div className="project-links">
                    <a href={project.repoUrl} target="_blank" rel="noreferrer"><GithubIcon size={15} /> GitHub profile <ArrowUpRight size={13} /></a>
                    {project.videoUrl ? <a href={project.videoUrl} target="_blank" rel="noreferrer"><PlayCircle size={15} /> Watch demo <ArrowUpRight size={13} /></a> : <span className="video-placeholder"><PlayCircle size={15} /> Demo coming soon</span>}
                  </div>
                </div>
              </article>;
            })}
          </div>
        </section>

        
<section className="skills-section section-pad" id="skills">
  <div className="section-wrap">
    <div className="section-kicker">
      04 / MY TOOLKIT
      <span className="toolkit-kicker-line" />
    </div>

    <div className="toolkit-heading">
      <div>
        <span className="toolkit-overline">BUILT THROUGH PRACTICE</span>
        <h2>
          Tools I use to <i>make things.</i>
        </h2>
      </div>

      <p>
        A growing collection of technologies I use to design,
        develop, experiment, and bring ideas to life.
      </p>
    </div>

    <div className="toolkit-orbit">
      <span className="toolkit-decoration decoration-one">✳</span>
      <span className="toolkit-decoration decoration-two">✦</span>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article
            className="skill-card"
            key={group.title}
            style={{ '--card-index': index }}
          >
            <div className="skill-card-heading">
              <span className="skill-index">{group.number}</span>
              <span className="skill-card-symbol">✳</span>
            </div>

            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>

            <div className="skill-logo-grid">
              {group.items.map((item, itemIndex) => (
                <div
                  className="skill-logo-item"
                  key={item.name}
                  style={{ '--item-index': itemIndex }}
                  title={item.name}
                >
                  <div className="skill-logo-box">
                    <i
                      className={`${item.icon} skill-tech-icon`}
                      aria-hidden="true"
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>

    <div className="languages-row">
      <span className="languages-label">LANGUAGES</span>
      <div>
        <strong>Arabic</strong>
        <small>Native</small>
      </div>
      <div>
        <strong>French</strong>
        <small>Advanced</small>
      </div>
      <div>
        <strong>English</strong>
        <small>Advanced</small>
      </div>
      <div>
  <strong>Turkish</strong>
  <small>Basic</small>
</div>
    </div>
  </div>
</section>


        <section className="contact-section section-pad" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker">05 / YOUR TURN</div>
            <div className="contact-grid"><div><h2>Have a good idea?<br /><i>Let’s build it.</i></h2><p>I’m happy to connect about internships, remote opportunities, collaborations, or ideas involving thoughtful technology and creative problem-solving.</p></div>
              <div className="contact-card contact-card-featured"><span className="contact-icon"><Mail size={22} /></span><span className="contact-card-label">LET’S START A CONVERSATION</span><h3>Have something in mind?</h3><p>Whether it’s a remote internship, a project collaboration, or an idea you’d like to explore, I’d love to hear from you.</p>

<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent("Hello Khadija - Let's connect")}`}
  target="_blank"
  rel="noopener noreferrer"
  className="button button-dark"
>
  Let's talk <ArrowUpRight size={17} />
</a>
              <div className="contact-socials"><a href={PROFILE.github} target="_blank" rel="noreferrer">
                <GithubIcon size={17} /> GitHub</a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={17} /> LinkedIn</a></div><small>{PROFILE.email}</small></div>
            </div>
            <div className="contact-bottom"><span>Made with care, curiosity & a little coffee. <span className="tiny-flower">✳</span></span><a href="#home">Back to top ↑</a></div>
          </div>
        </section>
      </main>
      <footer className="footer"><a href="#home" className="footer-brand">K.</a><span>© {new Date().getFullYear()} Khadija Ben Abdelkader</span><span>Designed in warm neutrals, built with React.</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
