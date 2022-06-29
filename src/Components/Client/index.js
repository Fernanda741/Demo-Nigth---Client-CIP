import IconButton from '../IconButton';
import './style.css';

export const Client = ({ client, onClick }) => {
  return (
    <li className="client-root">
      <main className="client-info">
        <span>{client.nome}</span>
        <span>{client.cpf}</span>
      </main>

      <IconButton type="submit" className="btn-edit icon-edit" title="Editar" />
      <IconButton
        type="submit"
        title="Excluir"
        className="btn-delete icon-delete"
      />
    </li>
  );
};
