import React, { useState, useEffect } from "react";
import ComponentMenu from "../../Components/Menu";
import { deleteAccount, getAccounts } from "../../api/index";
import { Account } from "../../Components/Account";
import { SearchBar } from "../../Components/SearchBar";
import { Modal } from "../../Components/Modal";

export default function BillCorrent() {
  const [accounts, setAccounts] = useState([]);
  const [modal, setModal] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(-1);

  useEffect(() => {
    getAccounts()
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data.content);
      });
  }, []);

  const handleDeleteAccount = (id) => {
    deleteAccount(id).then((response) => {
      if (response.status === 200) {
        const filteredAccounts = accounts.filter((item) => item.id !== id);
        setAccounts(filteredAccounts);
      }
    });
  };

  return (
    <>
      <ComponentMenu />
      <SearchBar />
      <h1 id="title">LISTA DE CONTAS</h1>
      <section className="container-accounts">
        <ul className="all-accounts">
          {accounts.map((item) => {
            return (
              <div key={item.id}>
                <Account
                  agencia={item.agencia}
                  nomeBanco={item.nomeBanco}
                  conta={item.conta}
                  cliente={item.cliente}
                  onClickDelete={() => {
                    setModal(true);
                    setDeletingAccount(item.id);
                  }}
                />
              </div>
            );
          })}
        </ul>
        <Modal
          modal={modal}
          click={() => setModal(false)}
          onClickYes={() => handleDeleteAccount(deletingAccount)}
          onClickNo={() => setModal(false)}
        >
          Você tem certeza que deseja excluir esta conta?
        </Modal>
      </section>
    </>
  );
}
