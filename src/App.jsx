import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/Mole.jsx'

function App() {
  // STATES AND INITIAL GAME MOUNTING
  const [dens, setDens] = useState(getDensState())
  const [points, setPoints] = useState(0)

  // start game by setting an interval that updates dens every 1.5sec
  useEffect(() => {
    const startGame = setInterval(() => {
     setDens(getDensState())
    }, 1500)
    
    // cleanup function to clear interval when component is unmounted
    return () => clearInterval(startGame);
  }, [])

  // HELPER FUNCTIONS
  // creates array with 9 values of null
  function getDensState() {
    return new Array(9).fill(null).map(() => {
      // ramdomly generates boolean values
      return { 
        isMoleVisible: Math.random() < 0.5 
      }
    })
  }

  // increments points by 1
  function onMoleWhacked() {
    setPoints(points + 1)
  }

  // renders the dens array with invididual Mole Components
  const denElements = dens.map((den, index) => {
    return (
      <Mole 
        key={`mole-${index}`} 
        isVisible={den.isMoleVisible} 
        onMoleWhacked={onMoleWhacked}
      />
    )
  })

  // RETURN STATEMENT
  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <h2>Points: { points }</h2>
      <div className="dens">
        { denElements }
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  )
}

export default App