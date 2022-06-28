import "./style.css";

export const Client = ({id, bairro, cep, codigo, complem, cpf, dataNasc, email, endereco, municipio, nome, numero, telefone, uf, children}) => {
  return (
    <ul className="container-client">
      <li className="client-info">
          <p>{id}</p>
          <p>{nome}</p>
          <p>{cpf}</p>
          <p>{cep}</p>
          <p>{codigo}</p>
          <p>{complem}</p>
          <p>{dataNasc}</p>
          <p>{email}</p>
          <p>{endereco}</p>
          <p>{numero}</p>
          <p>{bairro}</p>
          <p>{municipio}</p>
          <p>{telefone}</p>
          <p>{uf}</p>
       {children} 
      </li>
    </ul>
  )
}