import { useEffect, useState } from "react";
import { Client } from "../../Components/Client";
import { getClients } from "../../api/index";


export const ListClients = () => {
  const[clients, setClients] = useState([]);

  useEffect(() =>{
   getClients()
    .then((response) => response.json())
    .then((data) => {
    setClients(data.content);
    },[setClients])
  });  

  return (
    <>
      <section className="container-clients">
          <ul className="all-clients">
          {clients.map((client) => {
            return (
              <>
                <Client
                  key={client.id}
                  nome={client.nome}
                  cpf={client.cpf}
                  endereco={client.endereco}
                  bairro={client.bairro}
                  numero={client.numero}
                  municipio={client.municipio}
                  uf={client.uf}
                    >
                </Client>
            </>
            );   
          })}
        </ul>
      </section>
    </>
  ) 
};