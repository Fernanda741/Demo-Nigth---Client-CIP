import './style.css';
import PlusButton from '../PlusButton'
export const CheckingAccount = ({ client }) => {
  return (
    <li className="client-root">
      <main className="client-info">
        <span>{client.nome}</span>
        <span>{client.cpf}</span>
      </main>
      <PlusButton />
    </li>
  );
};