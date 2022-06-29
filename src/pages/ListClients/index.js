import { useEffect, useState } from "react";
import { Client } from "../../Components/Client";
import { deleteClient, getClients } from "../../api/index";
import { Modal } from "../../Components/Modal";
import { SearchBar } from "../../Components/SearchBar";
import ComponentMenu from "../../Components/Menu";

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
      <ComponentMenu />
      <SearchBar />
      <h1 id="title">LISTA DE CLIENTES</h1>
      <section className="container-clients">
        <ul className="all-clients">
          {clients.map((client) => {
            return (
              <div key={client.id}>
                <Client
                  client={client}                
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
       
        {/* <ReactPaginate
          breakLabel="..."
          nextLabel="próxima >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< anterior"
          renderOnZeroPageCount={null}
          containerClassName="page-container"
          pageClassName="page-item"
          activeClassName="page-active"
          pageLinkClassName="page-href"
          previousClassName="page-next"
          nextClassName="page-previous"
        /> */}
      </section>
      
    </>
  );
};
