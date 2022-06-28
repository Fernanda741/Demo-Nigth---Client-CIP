import { useEffect, useState } from "react";
import { Client } from "../../Components/Client";
import { deleteClient, getClients } from "../../api/index";
import Button from "../../Components/Button";


export const ListClients = () => {
  const[clients, setClients] = useState([]);

  useEffect(() =>{
   getClients()
    .then((response) => response.json())
    .then((data) => {
    setClients(data.content);
    },[setClients])
  });  

  const handleDeleteClient = (clientId) => {
       deleteClient(clientId);
  }

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
                  <Button
                    type="submit"
                    className="btn-edit"
                    title="Editar"
                  />
                  <Button
                    type="submit"
                    title="Excluir"
                    className="btn-delete"
                    onClick={()=>handleDeleteClient(client.id)}
                  />
                </Client>
            </>
            );   
          })}
        </ul>
      </section>
    </>
  ) 
};