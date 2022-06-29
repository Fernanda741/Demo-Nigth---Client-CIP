import { useEffect, useState } from "react";
import { Client } from "../../Components/Client";
import { deleteClient, getClients } from "../../api/index";
import { Modal } from "../../Components/Modal";

export const ListClients = () => {
  const[clients, setClients] = useState([]);
  const[modal,setModal] = useState(false);
  const[deletingUser, setDeletingUser] = useState(-1);


  useEffect(() => {
   getClients()
    .then((response) => response.json())
    .then((data) => {
      setClients(data.content);
    })
  },[]);
  
  const handleDeleteClient = (id) => {
    console.log(id)
     deleteClient(id)
     .then((response) => {
      response.json()
    })
     
     .then((data) => {
       console.log(data, "dataaa")
     })
  };

  

  return (
    <>
      <section className="container-clients">
          <ul className="all-clients">
          {clients.map((client) => {
            return (
              <div key={client.id}>
                <Client
                  id={client.id}
                  nome={client.nome}
                  cpf={client.cpf}
                  endereco={client.endereco}
                  bairro={client.bairro}
                  numero={client.numero}
                  municipio={client.municipio}
                  uf={client.uf}
                  // onClickDelete={(e) => handleDeleteClient(e.target.value)}
                  onClickDelete={() => {
                    setModal (true)
                    setDeletingUser(client.id)
                    }}
                >                  
                </Client>
            </div>
            );   
          })}
        </ul>
        <Modal
          modal={modal}
          click={() => setModal(false)}
          onClickYes={() => handleDeleteClient(deletingUser)}
          onClickNo={() => setModal(false)}
        >
          Você tem certeza que deseja excluir o cadastro do cliente?
        </Modal>
      </section>
      
    </>
  ) 
};