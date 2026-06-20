import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  Send,
  Trophy,
  X,
} from 'lucide-react'

type Direction = 'up' | 'left' | 'right' | 'none'

const portfolioEmail = 'andrewskylegbalanza@gmail.com'
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolioEmail)}`

function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.18 })
  const initial = direction === 'left'
    ? { opacity: 0, x: -28 }
    : direction === 'right'
      ? { opacity: 0, x: 28 }
      : direction === 'none'
        ? { opacity: 0 }
        : { opacity: 0, y: 28 }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.64, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Tag({ children }: { children: ReactNode }) {
  return <span className="eyebrow"><span className="eyebrow-dot" />{children}</span>
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const contactLinks = [
  { label: 'Email', value: portfolioEmail, href: gmailComposeUrl, icon: Mail },
  { label: 'Phone', value: '09614512860', href: 'tel:09614512860', icon: Phone },
  { label: 'GitHub', value: 'andrewskylegbalanza-sys', href: 'https://github.com/andrewskylegbalanza-sys', icon: Github },
  { label: 'LinkedIn', value: 'Andrew Balanza', href: 'https://www.linkedin.com/in/andrew-balanza-95a33a418/', icon: Linkedin },
]

const projects = [
  {
    title: 'Online Appointment System',
    type: 'Academic web project',
    description: 'A clinic appointment system built around a simple booking flow and easy appointment management for patients and staff.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    year: '2024',
    icon: BookOpen,
    visual: 'appointment',
    link: 'https://sprightly-rabanadas-1848ac.netlify.app/',
  },
  {
    title: 'Java Inventory Management',
    type: 'Software development project',
    description: 'A desktop application for tracking products and records using object-oriented programming and file-based data handling.',
    tags: ['Java', 'OOP', 'File Handling', 'GUI'],
    year: '2024',
    icon: MonitorCog,
    visual: 'inventory',
  },
  {
    title: 'Software Development Activities',
    type: 'Coursework collection',
    description: 'Programming exercises that strengthen logic building, debugging, code organisation, and user interface development.',
    tags: ['Java', 'Debugging', 'Problem Solving'],
    year: '2024',
    icon: Code2,
    visual: 'code',
  },
  {
    title: 'Portfolio Website',
    type: 'Personal web project',
    description: 'A responsive portfolio designed to present my academic work, technical foundation, and entry-level readiness.',
    tags: ['React', 'TypeScript', 'Vite', 'Motion'],
    year: '2026',
    icon: Cpu,
    visual: 'portfolio',
  },
]

const skillGroups = [
  { title: 'Programming', skills: ['Java', 'HTML', 'CSS', 'JavaScript (Basic)'] },
  { title: 'Development', skills: ['Object-Oriented Programming', 'File Handling', 'Debugging', 'GUI Development'] },
  { title: 'Hardware', skills: ['Computer Components', 'Hardware Setup', 'Troubleshooting', 'PC Fundamentals'] },
  { title: 'Tools & Workflow', skills: ['VS Code', 'IntelliJ IDEA', 'GitHub', 'Canva', 'Netlify', 'Teamwork'] },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <motion.header
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Andrew Sykle G. Balanza home">
          <span className="wordmark-mark">S</span>
          <span>Sky<span className="wordmark-dot">.</span>dev</span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={14} /></a>
        </div>

        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </motion.div>
      )}
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow glow-one" aria-hidden="true" />
      <div className="hero-glow glow-two" aria-hidden="true" />
      <div className="hero-inner">
        <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.45 }}>
          <span /> Available for internships & entry-level roles
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}>
          I build <span>curious ideas</span><br />into working things.
        </motion.h1>
        <motion.p className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          I’m Andrew Sykle G. Balanza, a Computer Engineering student learning through Java, web development, and hands-on hardware problem-solving.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.55 }}>
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="button button-secondary" href={gmailComposeUrl} target="_blank" rel="noreferrer"><Mail size={16} /> Get in touch</a>
        </motion.div>
      </div>
      <motion.a className="scroll-cue" href="#about" aria-label="Scroll to about section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
        <span>Scroll to explore</span>
        <motion.i animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}><ChevronDown size={17} /></motion.i>
      </motion.a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-inner about-layout">
        <Reveal direction="left">
          <div className="about-visual" aria-label="Andrew Sykle G. Balanza monogram">
            <div className="portrait-lines" />
            <div className="portrait-initials">SK</div>
            <div className="about-stat-card">
              <div><strong>BS CpE</strong><span>Rizal Technological University</span></div>
              <div><strong>2024</strong><span>Current programme</span></div>
              <div><strong>Java</strong><span>Core foundation</span></div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <Tag>About me</Tag>
          <h2>A practical learner with a builder’s mindset.</h2>
          <p>I am a Bachelor of Science in Computer Engineering student with a foundation in Java programming, software development, web development, and computer hardware fundamentals.</p>
          <p>I enjoy turning new concepts into clear, useful projects—from organised code and simple interfaces to hardware setup and troubleshooting. My aim is to keep growing through real-world technology work.</p>
          <div className="social-row">
            <a href="https://github.com/andrewskylegbalanza-sys" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/andrew-balanza-95a33a418/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </Reveal>
      </div>

      <div className="section-inner milestones">
        <Reveal delay={0.02}><article><GraduationCap size={21} /><div><span className="mono-label">Education</span><strong>Bachelor of Science in Computer Engineering</strong><p>Rizal Technological University · 2024–Present</p></div></article></Reveal>
        <Reveal delay={0.1}><article><Trophy size={21} /><div><span className="mono-label">Recognition</span><strong>With Honors, Grade 11</strong><p>STEM Graduate · Quirino High School</p></div></article></Reveal>
        <Reveal delay={0.18}><article><Cpu size={21} /><div><span className="mono-label">Training</span><strong>M-Tech Computer Services Seminar</strong><p>Technical training participant</p></div></article></Reveal>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[number], index: number }) {
  const Icon = project.icon
  return (
    <Reveal delay={index * 0.08}>
      <article className="project-card">
        <div className={`project-media project-media-${project.visual}`}>
          <div className="project-media-grid" />
          <Icon className="project-icon" size={38} strokeWidth={1.4} />
          <span>{project.year}</span>
        </div>
        <div className="project-content">
          <div className="project-topline"><span>{project.type}</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><ExternalLink size={17} /></a>}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </article>
    </Reveal>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <Reveal className="section-heading projects-heading">
          <Tag>Selected work</Tag>
          <h2>Things I’ve been building.</h2>
          <p>Academic projects where I’ve explored practical software development, interface design, and programming fundamentals.</p>
        </Reveal>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <Reveal className="section-heading compact-heading"><Tag>Technical foundation</Tag><h2>What I work with.</h2></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <article className="skill-group">
                <span className="skill-number">0{groupIndex + 1}</span>
                <h3>{group.title}</h3>
                <ul>{group.skills.map((skill, index) => <motion.li key={skill} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: groupIndex * 0.08 + index * 0.05 }}><i />{skill}</motion.li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = `Portfolio enquiry from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    const composeUrl = `${gmailComposeUrl}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(composeUrl, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-layout">
        <Reveal direction="left">
          <Tag>Let’s talk</Tag>
          <h2>Start a conversation.</h2>
          <p className="contact-intro">Whether you have an internship opportunity, a project idea, or simply want to connect, I’d be glad to hear from you.</p>
          <div className="contact-list">
            {contactLinks.map(({ label, value, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Icon size={17} /><span><small>{label}</small>{value}</span><ArrowUpRight size={15} /></a>)}
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          {sent ? (
            <motion.div className="form-success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
              <span><Check size={23} /></span><h3>Gmail is ready.</h3><p>Your message to Andrew has been prepared in Gmail. Review it there, then press Send.</p><button type="button" onClick={() => setSent(false)}>Write another message</button>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row"><label>Name<input required value={form.name} placeholder="Your name" onChange={(event) => setForm({ ...form, name: event.target.value })} /></label><label>Email<input required type="email" value={form.email} placeholder="you@example.com" onChange={(event) => setForm({ ...form, email: event.target.value })} /></label></div>
              <label>Message<textarea required rows={6} value={form.message} placeholder="Tell me a little about what’s on your mind..." onChange={(event) => setForm({ ...form, message: event.target.value })} /></label>
              <button className="button button-primary submit-button" type="submit">Send message <Send size={16} /></button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="site-footer"><div><span className="wordmark-mark">S</span><p>Designed and built with care.</p></div><p>© {new Date().getFullYear()} Andrew Sykle G. Balanza</p><a href="#home">Back to top <ArrowDown size={14} /></a></footer>
}

export default function App() {
  return <div className="site"><Nav /><Hero /><About /><Projects /><Skills /><Contact /><Footer /></div>
}
