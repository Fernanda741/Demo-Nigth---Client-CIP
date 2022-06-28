const url = "bank-services-challenge.herokuapp.com/"

export const Register = async (bairro, cep, codigo, complem, cpf, dataNasc, email, endereco, id, municipio, nome, numero, telefone, uf) => {
    const responseRegister = await fetch (`${url}/swagger-ui/index.html#/cliente-controller/incluirUsingPOST`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                bairro: bairro ,
                cep: cep,
                codigo: codigo,
                complem: complem,
                cpf: cpf,
                dataNasc: dataNasc ,
                email: email,
                endereco: endereco,
                id: id,
                municipio: municipio,
                nome: nome,
                numero: numero,
                telefone: telefone,
                uf: uf,                
        }),
    });
}

export const getClients = () => {
  return fetch("https://bank-services-challenge.herokuapp.com/api/v1/cliente",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  })
}

