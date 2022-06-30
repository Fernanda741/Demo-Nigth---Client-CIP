import IconButton from "../IconButton";
import "./style.css";
import PlusButton from "../PlusButton";

export const Client = ({
  client,
  onClickDelete,
  onclickEdit,
  onclickCreateAccount,
}) => {
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
        className="btn-edit icon-edit"
        onClick={onclickCreateAccount}
      />
    </li>
  );
};
