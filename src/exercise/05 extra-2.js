import * as React from 'react'
import '../box-styles.css'

function Box({size, style, text}){
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle:"italic",  ...style}}
      >
        {text}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}} text={"small lightblue box"}></Box>
      <Box size="medium" style={{backgroundColor: 'pink'}} text={"medium pink box"}></Box>
      <Box size="large" style={{backgroundColor: 'orange'}} text={"large orange box"}></Box>
      <Box text={"sizeless box"}></Box>
    </div>
    )
}

export default App
