import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EmailLander } from './pages/EmailLander'
import { RyanPortfolio } from './pages/RyanPortfolio'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailLander />} />
        <Route path="/ryan" element={<RyanPortfolio />} />
      </Routes>
    </Router>
  )
}