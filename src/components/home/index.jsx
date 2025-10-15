import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navi=useNavigate()
  return (
    <div>
        <>
    <h1>Data Table Project</h1>
     <button onClick={()=>navi('/table')}>Tables</button>
    </>
    </div>
  )
}

export default Home