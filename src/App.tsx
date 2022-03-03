import React from 'react'
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom'

import Navigation from './components/nav/Navigation'
import Home from './routes/Home'
import Search from './routes/Search'
import './styles/global.scss'

const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App