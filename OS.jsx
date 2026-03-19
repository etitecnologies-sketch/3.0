
import { useState } from "react";

export default function OS(){
  const [lista, setLista] = useState([]);
  const [servico, setServico] = useState("");

  function add(){
    setLista([...lista, servico]);
    setServico("");
  }

  return (
    <div>
      <h1>Ordens de Serviço</h1>
      <input value={servico} onChange={e=>setServico(e.target.value)} placeholder="Serviço"/>
      <button onClick={add}>Adicionar</button>

      <ul>
        {lista.map((c,i)=><li key={i}>{c}</li>)}
      </ul>
    </div>
  )
}
