
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Discussions } from './pages/Discussions'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      
       
      </Routes>
    </div>
  )
}

export default App
