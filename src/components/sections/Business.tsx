import React from 'react'
import { TrendingUp, Users, Zap, Target, Rocket, Brain } from 'lucide-react'

export function Business() {
  const achievements = [
    {
      icon: TrendingUp,
      title: '200% Average ROI',
      description: 'Proven track record of doubling investment returns through strategic automation.',
    },
    {
      icon: Users,
      title: '30+ Companies',
      description: 'Transformed operations for startups to Fortune 500 enterprises.',
    },
    {
      icon: Zap,
      title: 'Daily Shipping',
      description: 'Rapid iteration and continuous improvement methodology.',
    },
    {
      icon: Target,
      title: '4AM Start Time',
      description: 'Extreme focus and dedication to delivering exceptional results.',
    },
    {
      icon: Rocket,
      title: '8 Ventures',
      description: 'Serial entrepreneur with multiple successful exits.',
    },
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Leveraging cutting-edge AI to solve complex business problems.',
    },
  ]

  return (
    <section id="business" className="py-20 lg:py-32 bg-gradient-to-b from-dark to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Business Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming operational chaos into elegant, self-running systems that compound value weekly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group glass rounded-xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Case Study Teaser */}
        <div className="mt-16 glass rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Recent Success Story
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Helped a SaaS startup increase their operational efficiency by 300% while reducing costs by 40% 
            through strategic AI implementation and process automation. Result: $2M+ annual savings.
          </p>
          <a
            href="https://buildthingsthatbuildthings.notion.site"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Case Studies →
          </a>
        </div>
      </div>
    </section>
  )
}