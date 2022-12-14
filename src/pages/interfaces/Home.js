import Navbar from "../../components/navBar"
import Estados from "../../components/Estado"
import Fallos from "../../components/Fallos"
import Welcome from "../../components/Welcome"
import '../../css/home.css';
import { Route, Routes } from "react-router-dom"
import Analitica from "../../components/Analitica";

function Home() {
  return (
    <>      
      <div className="container">
        <Routes>
          <Route path="/home" element={<Welcome/>} />
          <Route path="/home/Estados" element={<Estados />} />
          <Route path="/home/Fallos" element={<Fallos />} />
          <Route path="/home/Analitica" element={<Analitica />} />
        </Routes>
      </div>
    </>
  )
}

export default Home