import { Mail, Linkedin, Phone } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-6 md:p-12 lg:p-20 space-y-16">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Stuti Parmanand</h1>
        <p className="text-lg">Full Stack Developer· UK Based</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-300">
          <a href="mailto:stutiparmanandgupta@gmail.com" className="flex items-center space-x-1 hover:text-white">
            <Mail className="w-4 h-4" /> <span>stutiparmannadgupta@gmail.com</span>
          </a>
          <a href="tel:+919003737733" className="flex items-center space-x-1 hover:text-white">
            <Phone className="w-4 h-4" /> <span>+447853121421</span>
          </a>
          <a href="https://www.linkedin.com/in/stuti-parmanand-584942237/" target="_blank" className="flex items-center space-x-1 hover:text-white" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4" /> <span>LinkedIn</span>
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
        Full-stack software engineer with 2+ years of experience building scalable web applications using Java, Spring Boot,
AngularJS, and SQL. 
        </p>
        <p>
       Skilled in backend development, RESTful API design, DevOps tools (Docker, Jenkins), and
agile methodologies
        </p>
        <p>
      Based in the UK with the right to work, seeking a full-time developer role.

        </p>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold text-center">Experience</h2>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Full Stack Developer @ Mind Spark Technology </h3>
          <p className="text-sm text-gray-400">May 2023 – Jan 2025</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li> Developed and secured RESTful APIs using Spring Boot with JWT and OAuth authentication</li>
            <li>Managed environment-specific configurations via Spring Boot’s application properties</li>
            <li>Integrated automated email services, improving communication efficiency</li>
             <li>Conducted API testing via Postman; followed agile delivery methods</li>
              <li>Contributed to backend optimization and reusable component architecture</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold"> Graduate Engineer Trainee @ STL Digital</h3>
          <p className="text-sm text-gray-400">Oct 2022 2021 – Mar 2023</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Led a 6-member team as POC, delivering key Java-based projects</li>
          <li>Developed a retail e-commerce and library management platform using AngularJS, Spring Boot, and SQL</li>
           <li>Implemented microservices architecture, CI/CD pipelines (Jenkins), and containerization (Docker)
</li>
            <li>Applied JUnit testing across frontend and backend modules
</li>
          </ul>
          </div>
       
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <span className="bg-gray-800 p-2 rounded">Java</span>
          <span className="bg-gray-800 p-2 rounded">JavaScript</span>
          <span className="bg-gray-800 p-2 rounded">Spring Boot</span>
          <span className="bg-gray-800 p-2 rounded">AngularJS</span>
          <span className="bg-gray-800 p-2 rounded">Docker</span>
          <span className="bg-gray-800 p-2 rounded">SQL</span>
        </div>
      </section>

      

      {/* Education */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2">B.Tech in Information Texchnology – Banasthali Vidyapeeth(2018–2022)</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10">
        <p>© {new Date().getFullYear()} Stuti Parmanand. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
