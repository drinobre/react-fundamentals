import * as React from 'react'
import '../box-styles.css'

function Box({className, style, text}){
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle:"italic",  ...style}}
      >
        {text}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}} text={"small lightblue box"}></Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}} text={"medium pink box"}></Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}} text={"large orange box"}></Box>
      <Box text={"sizeless box"}></Box>
    </div>
    )
}

export default App
