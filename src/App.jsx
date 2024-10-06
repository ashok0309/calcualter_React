import React from 'react'
import Caliculator from './components/Caliculator'

const App = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center",flexDirection:"column",gap:"30px",backgroundImage:`url("./src/assets/2.jpg")`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100vh"}}>
        <h1 style={{color:"black",textShadow:"10px 10px 10px gold"}}>Calculator</h1>   
   
      <Caliculator/>
    </div>
  )
}

export default App
