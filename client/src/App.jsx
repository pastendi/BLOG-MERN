import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post' element={<Post />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
