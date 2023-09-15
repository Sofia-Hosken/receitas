import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Hamburguer from './pages/Hamburguer'
import Pizza from './pages/Pizza'
import Refrigerante from './pages/Refrigerante'

function App() {

  return (
    <>
     <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hamburguer" element={<Hamburguer />} />
                <Route path="/pizza" element={<Pizza />} />
                <Route path="/refrigerante" element={<Refrigerante />} />

            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
