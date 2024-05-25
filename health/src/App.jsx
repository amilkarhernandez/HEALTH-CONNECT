import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Registrar } from "./pages/Registrar"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
    </Routes>
  )
}

export default App
