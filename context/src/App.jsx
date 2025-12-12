
import './App.css'
import { DataProvider } from './Context.jsx/DataContext'
import One from './One'
import Three from './Three'
import Two from './Two'

function App() {
  

  return (
    <>
    <DataProvider>
      <One />
      <Two />
      <Three />
    </DataProvider>
      
    </>
  )
}

export default App
