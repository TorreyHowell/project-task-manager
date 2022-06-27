import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mb-auto mt-5  px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
