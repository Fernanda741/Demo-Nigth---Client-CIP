/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ComponentMenu from "../../Components/Menu";
import { deleteAccount, getAccounts, updtadeCount } from "../../api/index";
import { Account } from "../../Components/Account";
import { SearchBar } from "../../Components/SearchBar";
import { Modal, ModalEdit } from "../../Components/Modal";
import { FormCount } from "../../Components/FormCount";

export default function BillCorrent() {
  const [accounts, setAccounts] = useState([]);
  const [modal, setModal] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(-1);
  const [modalEdit, setModalEdit] = useState(false);
  const [editAccout, setEditAccount] = useState("");
  const AccountEditData = accounts.find((item) => item.id === editAccout);

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
  const handleEditAccount = (id, data) => {
    updtadeCount(id, data).then((response) => {
      if (response.status === 201) {
        setModalEdit(false);
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
                  accounts={item}
                  onClickDelete={() => {
                    setModal(true);
                    setDeletingAccount(item.id);
                  }}
                  onclickEdit={() => {
                    setModalEdit(true);
                    setEditAccount(item.id);
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
        <ModalEdit modal={modalEdit} onClickNo={() => setModalEdit(false)}>
          <FormCount account={AccountEditData} onSubmit={handleEditAccount} />
        </ModalEdit>
      </section>
    </>
  );
}
