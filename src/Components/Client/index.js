import IconButton from "../IconButton";
import "./style.css";
import PlusButton from '../../Components/PlusButton'

export const Client = ({ client, onClickDelete, onclickEdit, checkingAccount }) => {
  return (
    <li className="client-root">
      <main className="client-info">
        <span>{client.nome}</span>
        <span>{client.cpf}</span>
      </main>

      <IconButton
        type="submit"
        className="btn-edit icon-edit"
        title="Editar"
        onClick={onclickEdit}
      />
      <IconButton
        type="submit"
        title="Excluir"
        className="btn-delete icon-delete"
        onClick={onClickDelete}
      />
      <PlusButton
      type="submit"
      title="Conta Corrente"
      onClick={checkingAccount} 
      />
    </li>
  );
};
