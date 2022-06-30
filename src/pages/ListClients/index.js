/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Client } from "../../Components/Client";
import {
  deleteClient,
  getClients,
  updtadeClients,
  checkingAccount,
} from "../../api/index";
import { Modal, ModalEdit, ModalCheckingAccount } from "../../Components/Modal";
import { SearchBar } from "../../Components/SearchBar";
import ComponentMenu from "../../Components/Menu";
import { Form } from "../../Components/Form";
import { FormCreateAccount } from "../../Components/FormCreateAccount";

export const ListClients = () => {
  const [clients, setClients] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [deletingUser, setDeletingUser] = useState(-1);
  const [editClient, setEditClient] = useState("");
  const [modalCheckingAccount, setModalCheckintAccount] = useState(false);
  const [clientsAccount, setClientsAccount] = useState("");

  const clientEditData = clients.find((client) => client.id === editClient);
  const clientCreateAccount = clients.find(
    (clientAccount) => clientAccount.id === clientsAccount
  );
  useEffect(() => {
    getClients()
      .then((response) => response.json())
      .then((data) => {
        setClients(data.content);
      });
  }, []);

  const handleDeleteClient = (id) => {
    deleteClient(id).then((response) => {
      if (response.status === 200) {
        const filteredClients = clients.filter((item) => item.id !== id);
        setClients(filteredClients);
      }
    });
  };

  const handleEditClient = (id, data) => {
    updtadeClients(id, data).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      setModalEdit(true);
    });
  };

  const handleCreateAccount = (data) => {
    checkingAccount(data).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      setModalCheckintAccount(true);
    });
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
                    setModal(true);
                    setDeletingUser(client.id);
                  }}
                  onclickEdit={() => {
                    setModalEdit(true);
                    setEditClient(client.id);
                  }}
                  onclickCreateAccount={() => {
                    setModalCheckintAccount(true);
                    setClientsAccount(client.id);
                  }}
                ></Client>
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

        <ModalEdit modal={modalEdit} onClickNo={() => setModalEdit(false)}>
          <Form client={clientEditData} onSubmit={handleEditClient} />
        </ModalEdit>

        <ModalCheckingAccount
          modal={modalCheckingAccount}
          onClickNo={() => setModalCheckintAccount(false)}
        >
          <FormCreateAccount
            accountCreate={clientCreateAccount}
            onSubmit={handleCreateAccount}
          />
        </ModalCheckingAccount>

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
