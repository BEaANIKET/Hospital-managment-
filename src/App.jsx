
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Contextprovider from './context/Context'
import Camera from './components/Camera'
import HospitalList from './components/ShowData'
import Loginpage from './components/Loginpage'

function App() {

  return (
    <Contextprovider>
      <BrowserRouter>

        <Routes>
          <Route path='/*' element={<Login/>} />
          <Route path='/allData' element={<HospitalList/>} />
        </Routes>

      </BrowserRouter>
    </Contextprovider>
  )
}

export default App
