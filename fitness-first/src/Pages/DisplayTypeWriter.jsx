import React from 'react'
import Typewriter from './TypeWriter'

const DisplayTypeWriter = () => {
  return (
    <div style={{display:"flex",gap:"10px"}}>
    <h1>
    
              {/* <span> Your</span> */}
              <Typewriter text="ARE YOU READY TO GET FIT, STRONG & MOTIVATED " delay={100} />

              <Typewriter text="IT'S ALL ABOUT WHAT YOU CAN ACHEIVE" delay={100} />

              <Typewriter text="TAKE YOUR FITNESS TO THE NEXT LEVEL" delay={100} />
    </h1>
  </div>
  )
}

export default DisplayTypeWriter