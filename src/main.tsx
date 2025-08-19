import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './styles/global.css'

// Simple performance monitoring
if (typeof window !== 'undefined') {
  // Log basic performance metrics
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (perfData) {
      console.log('Page Load Metrics:', {
        domContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
        loadComplete: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
        totalTime: Math.round(perfData.loadEventEnd - perfData.fetchStart),
      })
    }
  })

  // Handle errors gracefully
  window.addEventListener('error', (e) => {
    console.error('Application Error:', e.error)
  })

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason)
  })
}

// Mount the app
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find root element')
}

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)