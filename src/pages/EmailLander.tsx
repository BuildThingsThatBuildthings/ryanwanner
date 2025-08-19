import React, { useState } from 'react'
import { Mail, ArrowRight, Sparkles, Zap, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

export function EmailLander() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setEmail('')
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            Build Things
          </div>
          <Link 
            to="/ryan"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            About Ryan →
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-primary/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-gray-300">
              Early Access
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-primary bg-clip-text text-transparent">
              Build Systems That
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Build Systems
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get exclusive access to AI automation strategies, operational frameworks, 
            and growth systems that compound value exponentially.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-6 py-4 pr-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-primary to-yellow-500 text-dark font-semibold rounded-md hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Join
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
            
            {isSuccess && (
              <p className="mt-4 text-green-400 text-sm animate-fade-in">
                ✓ Success! Check your email for confirmation.
              </p>
            )}
          </form>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="glass rounded-xl p-6">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI Automation</h3>
              <p className="text-gray-400 text-sm">
                Cutting-edge AI tools and prompts for 10x productivity
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Growth Systems</h3>
              <p className="text-gray-400 text-sm">
                Proven frameworks that compound value weekly
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Elite Network</h3>
              <p className="text-gray-400 text-sm">
                Connect with founders building the future
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-gray-400 text-sm">
            <p>Join 1,000+ founders, engineers, and operators</p>
            <div className="flex justify-center gap-8 mt-4">
              <span>30+ Companies</span>
              <span className="text-primary">•</span>
              <span>200% Avg ROI</span>
              <span className="text-primary">•</span>
              <span>$10M+ Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Build Things That Build Things</p>
          <div className="flex gap-6">
            <Link to="/ryan" className="hover:text-primary transition-colors">
              About
            </Link>
            <a 
              href="https://linkedin.com/in/ryanwanner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/BuildThingsThatBuildthings" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}