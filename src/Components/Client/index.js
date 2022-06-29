import "./style.css";

export const Client = ({id, bairro, cep, codigo, complem, cpf, dataNasc, email, endereco, municipio, nome, numero, telefone, uf, children, onClickDelete}) => {
  return (
    // <ul className="container-client">
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
        {/* <button className="btn-edit" onClick={onClickEdit} value={value}> Editar</button> */}
        <button className="btn-delete" onClick={onClickDelete}> Excluir
         </button>
      </li>
    // </ul>
  )
} 
