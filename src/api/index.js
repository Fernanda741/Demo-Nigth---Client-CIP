import { faker } from "@faker-js/faker";

const baseUrl = "https://bank-services-challenge.herokuapp.com/";

export const CreateUser = (data) => {
  data.dataNasc = new Date(data.dataNasc).toISOString();
  data.cep = data.cep.replace("-", "");
  data.codigo = faker.random.alphaNumeric(10);

  return fetch(`${baseUrl}api/v1/cliente`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const getClients = () => {
  return fetch(`${baseUrl}api/v1/cliente`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
};

export const deleteClient = (id) => {
  console.log(id)
  return fetch(`${baseUrl}api/v1/cliente/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
};