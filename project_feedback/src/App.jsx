
import './App.css'

import { Home } from './Home'
import Search from './Search'
import AddPost from './AddPost'

import { DataProvider } from './context/DataContext'


function App() {
  
  return (
    <>
    <DataProvider >
      <div className="page-container">
    <Search />
    <hr/>


    <AddPost  />
    <Home />
    </div>
    </DataProvider>
    
    </>
  )
}

export default App
