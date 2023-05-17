import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import Layout from './pages/Layout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/post' element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
