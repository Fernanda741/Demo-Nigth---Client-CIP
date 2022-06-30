import IconButton from '../IconButton';
import './style.css';
export const Account = ({ accounts, onClickDelete, onclickEdit }) => {
  return (
    <li className="account-root">
      <main className="account-info">
        <section>
          <p>Agencia:{accounts.agencia}</p>
          <p>Cod do Banco:{accounts.numBanco}</p>
          <p>Conta: {accounts.conta}</p>
          <p>Cliente:{accounts.cliente.nome}</p>
          <p>Cpf:{accounts.cliente.cpf}</p>
          <p>Nome do Banco:{accounts.nomeBanco}</p>
        </section>
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
