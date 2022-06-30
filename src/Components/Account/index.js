import IconButton from "../IconButton";

export const Account = ({ accounts, onClickDelete, onclickEdit }) => {
  return (
    <li className="account-root">
      <main className="account-info">
        <p>Agência: {accounts.agencia}</p>
        <p>Cod. do Banco: {accounts.numBanco}</p>
        <p>Conta: {accounts.conta}</p>
        <p>Cliente: {accounts.cliente.nome}</p>
        <p>CPF: {accounts.cliente.cpf}</p>
        <p>Nome do Banco: {accounts.nomeBanco}</p>
      </main>
      <IconButton
        type="submit"
        title="Excluir"
        className="btn-delete icon-delete"
        onClick={onClickDelete}
      />
      <IconButton
        type="submit"
        className="btn-edit icon-edit"
        title="Editar"
        onClick={onclickEdit}
      />
    </li>
  );
};
