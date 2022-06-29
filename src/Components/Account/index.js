export const Account = ({ id, agencia, nomeBanco, numBanco, conta, senha  }) => {
  return(
  <li className="account-root">
    <main className="account-info">
      <p>{id}</p>
      <p>{agencia}</p>
      <p>{nomeBanco}</p>
      <p>{numBanco}</p>
      <p>{conta}</p>
      <p>{senha}</p>
    </main>
  </li>
  )
}