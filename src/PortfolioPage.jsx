import { Mail, Linkedin, Phone } from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-6 md:p-12 lg:p-20 space-y-16">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Nidhi Dubey</h1>
        <p className="text-lg">Quality Specialist · Gift City</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-300">
          <a href="mailto:nidhidubey811@gmail.com" className="flex items-center space-x-1 hover:text-white">
            <Mail className="w-4 h-4" /> <span>nidhidubey811@gmail.com</span>
          </a>
          <a href="tel:+919003737733" className="flex items-center space-x-1 hover:text-white">
            <Phone className="w-4 h-4" /> <span>+91 723406106</span>
          </a>
          <a href="http://linkedin.com/in/nidhi-dubey-a3a9a3175" target="_blank" className="flex items-center space-x-1 hover:text-white" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4" /> <span>LinkedIn</span>
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
        Software professional with over 2.5 years of experience in Regulatory Reporting, including COREP, FRTB, Axiom, Controller View, SQL, and PL/ SQL. Seeking a full- time Software Engineer role to apply my technical expertise and contribute to building innovative solutions
in a fast- paced, collaborative environment
        </p>
        
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto space-y-8" >
        <h2 className="text-2xl font-semibold text-center">Experience</h2>

        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold">Quality Specialist @ Bank Of America</h3>
          <p className="text-sm text-gray-400">July 2022 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Liaised with Business Analysts for requirement gathering and validating test results</li>
            <li>Tested Axiom regulatory reports, data models, tabular reports, and aggregations</li>
            <li>Generated test reports and testing metrics, ensuring transparency across teams.</li>
            <li>Collaborated across testing and automation efforts— identified defects in JIRA, supported regression cycles, contributed to automation planning, and participated in AXIOM enhancement handovers</li>
          </ul>
        </div></section>

      

      {/* Skills */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <span className="bg-gray-800 p-2 rounded">Axiom</span>
          <span className="bg-gray-800 p-2 rounded">Java</span>
          <span className="bg-gray-800 p-2 rounded">C++</span>
          <span className="bg-gray-800 p-2 rounded">Database Management</span>
          <span className="bg-gray-800 p-2 rounded">SQL</span>
          <span className="bg-gray-800 p-2 rounded">TOSCA</span>
        </div>
      </section>

      

      {/* Education */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2">B.Tech in Information Technology – Banasthali Vidyapith (2018–2022) – 79.9%</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10">
        <p>© {new Date().getFullYear()} Nidhi Dubey. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
