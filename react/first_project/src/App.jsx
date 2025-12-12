
import './App.css'
import Content from './Content'


import Header from './header'





function App() {
  let frnds=["surek","yeso","yuva"]

 

  return (
    <>
    <Header title={"this is sureka"}
    city={"coimbatore"} />
    <Content frnds={frnds} />

    
    </>
  
  )
}

export default App
