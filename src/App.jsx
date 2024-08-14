import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Homepage} from './pages/Homepage'
import {ContactUs} from './pages/ContactUs'
import {Test} from './pages/Test'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
