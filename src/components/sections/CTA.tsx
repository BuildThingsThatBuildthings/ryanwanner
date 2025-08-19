import React from 'react'
import { ArrowRight, Download, Calendar, MessageSquare } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-dark to-gray-900">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Build Something Amazing?</span>
          </h2>
          
          <p className="text-gray-300 text-lg lg:text-xl mb-12 max-w-3xl mx-auto">
            Whether you're looking to automate operations, implement AI solutions, or build 
            systems that compound value, let's create something extraordinary together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass rounded-xl p-6">
              <Download className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI Toolkit</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the Unfair AI Advantage toolkit with proven prompts and workflows.
              </p>
              <a 
                href="https://buildthingsthatbuildthings.notion.site/Unfair-AI-Advantage-Toolkit-23dc58a0917f803ab0a2e9710a626a0d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-yellow-500 font-medium text-sm inline-flex items-center gap-1"
              >
                Download Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="glass rounded-xl p-6">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Schedule Call</h3>
              <p className="text-gray-400 text-sm mb-4">
                Book a strategy session to discuss your automation needs.
              </p>
              <a 
                href="https://calendly.com/ryanwanner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-yellow-500 font-medium text-sm inline-flex items-center gap-1"
              >
                Book Time
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="glass rounded-xl p-6">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-gray-400 text-sm mb-4">
                Let's connect on LinkedIn to explore opportunities.
              </p>
              <a 
                href="https://linkedin.com/in/ryanwanner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-yellow-500 font-medium text-sm inline-flex items-center gap-1"
              >
                Message Me
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://buildthingsthatbuildthings.notion.site/Unfair-AI-Advantage-Toolkit-23dc58a0917f803ab0a2e9710a626a0d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started with AI Toolkit
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="https://linkedin.com/in/ryanwanner"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}