import React from 'react'
import { Code2, Database, Cloud, Cpu, GitBranch, Terminal } from 'lucide-react'

export function Tech() {
  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
  ]

  const capabilities = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end application development from concept to deployment.',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Implementing GPT-4, Claude, and custom ML models for business automation.',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure infrastructure on AWS, GCP, and Azure.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building robust data pipelines and analytics systems.',
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code.',
    },
    {
      icon: Terminal,
      title: 'System Automation',
      description: 'Custom tools and scripts that eliminate repetitive tasks.',
    },
  ]

  return (
    <section id="tech" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building systems that build systems. Leveraging cutting-edge technology to create 
            self-improving, autonomous solutions.
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 hover:text-primary hover:border-primary/30 transition-all"
            >
              {tech.name}
              <span className="ml-2 text-xs text-gray-500">({tech.category})</span>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group glass rounded-xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-primary/30"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Code Sample */}
        <div className="mt-16 glass rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Philosophy in Code
          </h3>
          <div className="bg-black/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
              <code>{`// Build things that build things
function createSystem(problem) {
  const solution = analyze(problem);
  const automation = buildAutomation(solution);
  
  while (true) {
    automation.improve();
    automation.scale();
    automation.compound();
  }
  
  return exponentialGrowth;
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}