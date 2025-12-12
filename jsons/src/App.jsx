import { useEffect, useState } from 'react'

import './App.css'
import api from './api/Stu_api'


function App() {
  const [SList,setSList]=useState([])
  useEffect(()=>
  {
    const fetData=async()=>
    {
      
        const res=await api.get("/Student")
        setSList(res.data)
      

    }
    fetData()
    
  },[])
  

  return (
    <>{
    SList.map((stu)=>
    <p key={stu.sid} >{stu.sid}-{stu.sname}-{stu.smark}</p>)
  }
    </>
  )
}

export default App
