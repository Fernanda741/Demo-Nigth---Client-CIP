export const Account = ({
  id,
  agencia,
  nomeBanco,
  numBanco,
  conta,
  senha,
  cliente,
}) => {
  return (
    <li className="account-root">
      <main className="account-info">
        <p>{id}</p>
        <p>{agencia}</p>
        <p>{nomeBanco}</p>
        <p>{numBanco}</p>
        <p>{conta}</p>
        <p>{senha}</p>
        <p>{cliente.nome}</p>
      </main>
    </li>
  );
};
