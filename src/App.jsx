import './App.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { Login } from './components/login/login'
import { GlobalStyle } from './style/globalStyle'
import { UserStorage } from './contexts/user-context'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserStorage>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
