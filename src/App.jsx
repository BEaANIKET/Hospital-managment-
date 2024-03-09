
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Contextprovider from './context/Context'
import Camera from './components/Camera'

function App() {

  return (
    <Contextprovider>
      <BrowserRouter>
        <Login/>

        {/* <Camera/> */}
      </BrowserRouter>
    </Contextprovider>
  )
}

export default App
