import Button from "../Button"

export const Client = ({id, bairro, cep, codigo, complem, cpf, dataNasc, email, endereco, municipio, nome, numero, telefone, uf, onClick }) => {
  return (
    <ul>
      <li>
          <p> {id}</p>
          <p>{bairro}</p>
          <p>{cep}</p>
          <p>{codigo}</p>
          <p>{complem}</p>
          <p>{cpf}</p>
          <p>{dataNasc}</p>
          <p>{email}</p>
          <p>{endereco}</p>
          <p>{municipio}</p>
          <p>{nome}</p>
          <p>{numero}</p>
          <p>{telefone}</p>
          <p>{uf}</p>
          <Button
          type="submit"
          onClick={onClick}
          >Editar</Button>
          <Button>Excluir</Button>
      </li>
    </ul>
  )
}