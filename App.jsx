
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import OS from "./pages/OS";

export default function App(){
  return (
    <BrowserRouter>
      <div style={{display:"flex"}}>
        <div style={{width:200,background:"#111",color:"#fff",height:"100vh",padding:10}}>
          <h3>ETI</h3>
          <Link to="/">Dashboard</Link><br/>
          <Link to="/clientes">Clientes</Link><br/>
          <Link to="/os">OS</Link>
        </div>

        <div style={{padding:20, flex:1}}>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/clientes" element={<Clientes/>}/>
            <Route path="/os" element={<OS/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
