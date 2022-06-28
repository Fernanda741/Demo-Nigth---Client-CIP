import Button from "../Button"
import "./style.css";

export const Client = ({id, bairro, cep, codigo, complem, cpf, dataNasc, email, endereco, municipio, nome, numero, telefone, uf, onClick }) => {
  return (
    <ul className="container-client">
      <li className="client-info">
          <p>{id}</p>
          <p>{nome}</p>
          <p>{bairro}</p>
          <p>{cep}</p>
          <p>{codigo}</p>
          <p>{complem}</p>
          <p>{cpf}</p>
          <p>{dataNasc}</p>
          <p>{email}</p>
          <p>{endereco}</p>
          <p>{municipio}</p>
          <p>{numero}</p>
          <p>{telefone}</p>
          <p>{uf}</p>
          <Button
            type="submit"
            className="btn-edit"
            onClick={onClick}
          >Editar</Button>
          <Button
          type="submit"
          className="btn-delete"
          onClick={onClick}>Excluir</Button>
      </li>
    </ul>
  )
}