
import { useState } from "react";

export default function Clientes(){
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");

  function add(){
    setClientes([...clientes, nome]);
    setNome("");
  }

  return (
    <div>
      <h1>Clientes</h1>
      <input value={nome} onChange={e=>setNome(e.target.value)} placeholder="Nome"/>
      <button onClick={add}>Adicionar</button>

      <ul>
        {clientes.map((c,i)=><li key={i}>{c}</li>)}
      </ul>
    </div>
  )
}
