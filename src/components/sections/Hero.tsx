import React from 'react'
import { ArrowRight, Sparkles, Zap, Trophy, Target } from 'lucide-react'

export function Hero() {
  const stats = [
    { value: '30', label: 'Companies' },
    { value: '200%', label: 'Avg ROI' },
    { value: '1M+', label: 'Impact' },
    { value: '8', label: 'Ventures' },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-primary/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-gray-300">
              Constraint Resolution Engineer
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-primary bg-clip-text text-transparent">
              Ryan Wanner
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Strategic automation and operational excellence that drives 
            exponential growth for enterprise organizations.
          </p>

          {/* Location */}
          <p className="text-gray-400 mb-12 text-sm sm:text-base">
            Nashville-based founder specializing in AI-driven systems
          </p>

          {/* Stats Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://buildthingsthatbuildthings.notion.site/Unfair-AI-Advantage-Toolkit-23dc58a0917f803ab0a2e9710a626a0d"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 text-dark font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
            >
              <Zap className="w-5 h-5" />
              Get AI Toolkit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://linkedin.com/in/ryanwanner"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-primary/30"
            >
              Connect on LinkedIn
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Additional info */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              <span>Daily Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span>4:00 AM Start Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-optimized scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce lg:hidden">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}