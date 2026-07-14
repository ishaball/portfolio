import Navbar from './components/Navbar';
import Particles from './components/Particles';

import TypingFixed from './TypingFixed';

import Reveal from './components/Reveal';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';

import './portfolio.css';
import './portfolio.contact.css';


const projects = [
  {
    title: 'Broadband Services Full Stack Website',

    desc:
      '• MERN stack broadband platform\n' +
      '• REST APIs & authentication modules\n' +
      '• Admin dashboard development\n' +
      '• Responsive React UI',

    tags: ['MERN', 'React', 'REST API'],

    href: 'https://geomax-broadband-services.vercel.app/',
  },

  {
    title: 'Flood Detection System (GLOF Early Warning)',

    desc:
      '• IoT-based flood warning system\n' +
      '• ESP32 & LoRa SX1278 integration\n' +
      '• Real-time sensor monitoring\n' +
      '• Patent published project',

    tags: ['IoT', 'ESP32', 'ThingSpeak'],

    href: '#',
  },

  {
    title: 'Water Robot',

    desc:
      '• Autonomous water navigation prototype\n' +
      '• Robotics & embedded systems\n' +
      '• Automation-focused development\n' +
      '• Sensor-based movement concepts',

    tags: ['Robotics', 'Embedded', 'Automation'],

    href: '#',
  },

  {
    title: 'Restaurant Website',

    desc:
      '• Responsive restaurant website\n' +
      '• Modern UI & smooth navigation\n' +
      '• Menu and contact sections\n' +
      '• Built using HTML, CSS & JavaScript',

    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],

    href: 'https://profound-otter-f298e7.netlify.app',
  },
];

const skills = [
  'React',
  'JavaScript',
  'Tailwind/CSS',
  'APIs',
  'Node.js basics',
  'Data Structures',
 'Express.js',
  'IoT Concepts',
  'C++,C',
 'SQL',
  'MongoDB',
  'AI',
  'Teamwork',
];

export default function App() {
  return (
    <div>
      <div id="bg-hero" aria-hidden="true">
        <Particles />
      </div>

      <Navbar />

      <main>
        <section id="home" className="heroWrap">
          <div className="hero">
            <div className="heroCard">
              <div className="kicker">
                <span className="pill">Welcome to my portfolio</span>
                
              </div>

              <h1 className="h1">
                Hi, I am Isha Ball
                <br />
                <TypingFixed />

              </h1>

              <p className="sub">
                I am Isha Ball, a motivated and detail-oriented B.Tech student in Electronics and Communication
                Engineering with a strong academic background and a CGPA of 8.87. I am passionate about Full Stack
                Development, Artificial Intelligence, IoT systems, and problem solving.
              </p>

              <div className="btnRow">
                <a className="btn btn--primary" href="#projects">
                  See Projects
                  <span className="btn__shine" aria-hidden="true" />
                </a>
                <a className="btn btn--ghost" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>

            <Reveal>
              <aside className="sideCard">
                <div className="statGrid">
                  <div className="stat">
                    <div className="stat__n">3+</div>
                    <div className="stat__l">Projects</div>
                  </div>
                  <div className="stat">
                    <div className="stat__n">Full</div>
                    <div className="stat__l">Stack Development</div>
                  </div>
                  <div className="stat">
                    <div className="stat__n">IoT</div>
                    <div className="stat__l">Prototype Focus</div>
                  </div>
                  <div className="stat">
                    <div className="stat__n">Robotics</div>
                    <div className="stat__l">Prototypes</div>
                  </div>
                </div>

                <div style={{ height: 14 }} />
                <div className="card__tags" aria-label="Skills">
                  {skills.slice(0, 12).map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

              
              </aside>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionTitle">
            <div>
              <h2>About & Skills</h2>
              <p>
                A placement-focused profile with modern animated UI. Replace the placeholder text with your real
                details.
              </p>
            </div>
          </div>

          <div className="grid3">
            <Reveal>
  <div className="card card--hover">
    <h3 className="card__title">What I Do</h3>

    <p className="card__desc">
      • NPTEL Certifications in Programming in Java & DBMS <br /><br />

      • Beyond Curriculum Training in MEAN Stack & Android Development <br /><br />

      • Forage Software Engineering Job Simulation <br /><br />

      • Coursera WordPress Website Development Certification <br /><br />

      • Internshala Placement Preparation Training
    </p>

    <div className="card__tags">
      {skills.slice(0, 4).map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  </div>
</Reveal>

          <Reveal>
  <div className="card card--hover">
    <h3 className="card__title">Achievements</h3>

    <p className="card__desc">
      • Secured 3rd position in 1st year B.Tech academics <br /><br />

      • Published patent on IoT-based Glacial Lake Outburst Flood (GLOF) Early Warning System <br /><br />

      • Achieved Good + Topper performance band in NPTEL Programming in Java certification from IIT Kharagpur
    </p>

    <div className="card__tags">
      {['3rd Rank', 'Patent Published', 'NPTEL Topper'].map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  </div>
</Reveal>

          <Reveal>
  <div className="card card--hover">
    <h3 className="card__title">Education</h3>

    <p className="card__desc">
      • B.Tech in Electronics & Communication Engineering, JIS College of Engineering (2023–2027) | CGPA: 8.87 <br /><br />

      • Higher Secondary, Bhamuria S.M High School | 85% <br /><br />

      • Secondary, Sanctoria Dishergarh Girls High School | 94%
    </p>

    <div className="card__tags">
      {['B.Tech ECE', 'CGPA 8.87', 'Consistency'].map((t) => (
        <span className="tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  </div>
</Reveal>
          </div>
        </section>

       <section id="experience" className="section">
  <div className="sectionTitle">
    <div>
      <h2>Experience</h2>
    </div>
  </div>

  <div className="grid3">

    <Reveal>
      <div className="card card--hover">
        <h3 className="card__title">
          Full Stack Development Intern
        </h3>

        <p className="card__desc">
          <strong>Geomax Broadband Services</strong>

          <br /><br />

          • MERN Stack Development <br />
          • REST API Integration <br />
          • Dashboard & Authentication Modules <br />
          • Responsive UI Development
        </p>

        <div className="card__tags">
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">MongoDB</span>
        </div>
      </div>
    </Reveal>

    <Reveal>
      <div className="card card--hover">
        <h3 className="card__title">
          Sales & Marketing Intern
        </h3>

        <p className="card__desc">
          <strong>Ricoz</strong>

          <br /><br />

          • Customer Engagement <br />
          • Lead Generation <br />
          • Communication Workflow <br />
          • Team Coordination
        </p>

        <div className="card__tags">
          <span className="tag">Marketing</span>
          <span className="tag">Communication</span>
          <span className="tag">Teamwork</span>
        </div>
      </div>
    </Reveal>

    <Reveal>
      <div className="card card--hover">
        <h3 className="card__title">
          Content Formatting Intern
        </h3>

        <p className="card__desc">
          <strong>Sarkari Parcha</strong>

          <br /><br />

          • Document Structuring <br />
          • Content Formatting <br />
          • Data Organization <br />
          • Publishing Support
        </p>

        <div className="card__tags">
          <span className="tag">Documentation</span>
          <span className="tag">Content</span>
          <span className="tag">Formatting</span>
        </div>
      </div>
    </Reveal>

  </div>
</section>


        <section id="projects" className="section">
          <div className="sectionTitle">
            <div>
              <h2>Projects</h2>
              <p>Selected work aligned with full-stack development and IoT-based real-world solutions.</p>
            </div>
          </div>

          <div className="grid3">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="sectionTitle">
            <div>
              <h2>Contact</h2>
              <p>Get in touch for internships, collaborations, or just to say hi!</p>
            </div>
          </div>

          <div className="contactGrid">
            <Reveal>
              <div className="contactLeft">
                <h3 className="contactHeading">Let's Connect</h3>
                <p className="contactSubheading">Have a project idea, internship opportunity, or collaboration in mind? Feel free to reach out.</p>
                

                <div className="contactCards" aria-label="Contact details">
                  <div className="contactCard">
                    <div className="contactCard__label">Email</div>
                    <div className="contactCard__value">
                      <a href="mailto:ishaball137@gmail.com">ishaball137@gmail.com</a>
                    </div>
                  </div>

                  <div className="contactCard">
                    <div className="contactCard__label">Location</div>
                    <div className="contactCard__value">West Bengal, India</div>
                  </div>
                  

                  

                 
                </div>
                 <div className="contactEnding">Looking forward to building innovative solutions together.</div>
                </div>
            </Reveal>
             <Reveal>
              <div className="contactRight">
                <ContactForm />
              </div>
            </Reveal>
            </div>

          <footer className="footer">
  <div className="footer__content">

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/isha-ball-8b6484286" target="_blank" rel="noreferrer">
        LinkedIn
      </a>

      <span className="dot">•</span>

      <a href="https://github.com/ishaball" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>

    <div className="footer__text">
      © {new Date().getFullYear()} Isha Ball • Built with React + Passion
    </div>

  </div>
</footer>
         
          </section>
              

      

       
      </main>
    </div>

  );
}

