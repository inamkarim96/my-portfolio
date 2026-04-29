import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand">
            Inam Karim
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
          <nav id="primary-nav" className={`nav ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1>Building practical web and automation solutions.</h1>
              <p className="lead">
                Full-stack developer focused on clean product experiences, reliable APIs,
                and Python-driven automation that improves workflows.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View Projects
                </a>
                <a className="btn btn-ghost" href="/Inam-Karim-CV.png" download="Inam-Karim-CV.png">
                  Download CV
                </a>
              </div>
              <ul className="contact-inline">
                <li>Islamabad, Pakistan</li>
                <li>
                  <a href="mailto:inamkarim96@gmail.com">inamkarim96@gmail.com</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/inamkarim" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/inamkarim96" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="tel:+923275117908">+92 327 5117908</a>
                </li>
              </ul>
            </div>
            <div className="profile-wrap">
              <img src="/my-pic.jpg" alt="Inam Karim profile" className="profile-image" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About</h2>
            <p>
              I develop mobile and web applications and design automation systems that save time
              and reduce repetitive work. My approach is straightforward: understand the problem,
              keep the implementation clean, and ship dependable results with a strong focus on
              user needs.
            </p>
            <div className="cards two-col">
              <article className="card">
                <h3>Education</h3>
                <p>
                  <strong>Quaid-i-Azam University, Islamabad</strong>
                </p>
                <p>Bachelor of Science in Computer Science</p>
                <p className="muted">Sep 2022 - Jun 2026</p>
              </article>
              <article className="card">
                <h3>Certifications</h3>
                <ul>
                  <li>Project Planning &amp; Initiation (Google)</li>
                  <li>Python Programming (Google)</li>
                  <li>AI For Everyone (DeepLearning.AI)</li>
                  <li>Digital Marketing (Google)</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt">
          <div className="container">
            <h2>Experience</h2>
            <article className="timeline-item">
              <div className="timeline-head">
                <h3>Freelance Software Developer</h3>
                <p className="muted">Jun 2023 - Present</p>
              </div>
              <ul>
                <li>Built android mobile applications using React Native and Flutter.</li>
                <li>Automated workflows with Python scripts and Zapier integrations.</li>
                <li>Designed REST APIs and backend services with Firebase.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Projects</h2>
            <div className="cards">


              <article className="card project-card">
                <div className="project-head">
                  <div className="flex-between">
                    <h3>NaturaDry E-Commerce Platform</h3>
                    <p className="muted">Feb 2026 - Present</p>
                  </div>
                  <p className="co-author">Co-developed with <strong><a href="https://shayandanish.vercel.app/" target="_blank" rel="noreferrer" className="co-author-link">Shayan Danish</a></strong></p>
                </div>
                <p>
                  A full-stack commercial platform for organic products,
                  featuring a responsive design.
                </p>
                <ul>
                  <li>
                    Developed a custom UI library using React, Framer Motion and Tailwind CSS,
                    standardizing components like Modals, Cards, and Inputs.
                  </li>
                  <li>
                    Architected a responsive, dual-interface system with a customer-facing shop
                    and an admin dashboard.
                  </li>
                  <li>
                    Implemented server-side logic using Express.js and Prisma (PostgreSQL)
                    to handle product variants and real-time stock management.
                  </li>
                </ul>
                <p className="project-links">
                  <a href="https://naturadry.vercel.app/" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </p>
              </article>

              <article className="card project-card">
                <div className="project-head">
                  <h3>UMLTutor Web Application</h3>
                  <p className="muted">Sep 2025 - Present</p>
                </div>
                <p>
                  A full-featured educational platform to evaluate UML diagrams and guide students
                  with intelligent, actionable feedback.
                </p>
                <ul>
                  <li>
                    Engineered custom validation logic to cross-reference usecase diagrams usecase discription and sequence diagrams.
                  </li>
                  <li>
                    Created an interactive UI to provide students with feedback on
                    formatting, structure, and grammar.
                  </li>
                </ul>
                <p className="project-links">
                  <a href="https://umltutor.vercel.app" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-grid">
              <article className="card">
                <h3>Core</h3>
                <ul>
                  <li>Mobile Development</li>
                  <li>Web Development</li>
                  <li>Automation Engineering</li>
                  <li>Cloud Computing</li>
                  <li>API Integration</li>
                </ul>
              </article>
              <article className="card">
                <h3>Techniques</h3>
                <ul>
                  <li>Cross-Platform Development</li>
                  <li>RESTful API Design</li>
                  <li>CI/CD</li>
                  <li>Data Analysis</li>
                  <li>Workflow Automation</li>
                </ul>
              </article>
              <article className="card">
                <h3>Tools</h3>
                <ul>
                  <li>JavaScript, Node.js, Express</li>
                  <li>React, Tailwind CSS, Framer Motion</li>
                  <li>Prisma, PostgreSQL, MongoDB</li>
                  <li>Firebase, Cloudinary, JWT</li>
                  <li>Git, GitHub, Docker, Vercel</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-card">
            <h2>Let&apos;s Work Together</h2>
            <p>
              If you are looking for a developer who values clear communication and clean
              execution, I would love to connect.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:inamkarim96@gmail.com">
                Email Me
              </a>
              <a className="btn btn-ghost" href="https://linkedin.com/in/inamkarim" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href="https://github.com/inamkarim96" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {year} Inam Karim. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
