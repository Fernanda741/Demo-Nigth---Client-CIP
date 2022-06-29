import IconButton from '../IconButton';
import './style.css';

export const CheckingAccount = ({ client, onClickDelete }) => {
  return (
    <li className="client-root">
      <main className="client-info">
        <span>{client.nome}</span>
        <span>{client.cpf}</span>
      </main>

      <IconButton
        type="submit"
        title="Excluir"
        className="btn-delete icon-delete"
        onClick={onClickDelete}
      />
    </li>
  );
};