import { useEffect, useState } from "react";
import { Client } from "../../Components/Client/Client";

export const AllClients = () => {
  const[clients, setClients] = useState([]);

  useEffect(() =>{
   getClients();
    .then((response) => response.json())
    .then((data) => {

    })
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
                    >
                </Client>;
            </>
            );   
          })}
        </ul>
      </section>
    </>
  ) 
};