import React from 'react'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/BuildThingsThatBuildthings', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ryanwanner', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ryanwanner', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@ryanwanner.com', label: 'Email' },
  ]

  const footerLinks = [
    { label: 'AI Toolkit', href: 'https://buildthingsthatbuildthings.notion.site/Unfair-AI-Advantage-Toolkit-23dc58a0917f803ab0a2e9710a626a0d' },
    { label: 'Case Studies', href: 'https://buildthingsthatbuildthings.notion.site' },
    { label: 'Schedule Call', href: 'https://calendly.com/ryanwanner' },
  ]

  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Ryan Wanner</h3>
            <p className="text-gray-400 text-sm">
              Constraint Resolution Engineer
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Nashville, TN • 4:00 AM Start Time
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Ryan Wanner. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}