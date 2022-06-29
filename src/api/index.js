import { faker } from "@faker-js/faker";

export const createClients = (data) => {
  data.dataNasc = new Date(data.dataNasc).toISOString();
  data.cep = data.cep.replace("-", "");
  data.cpf = data.cpf.replace(".", "").replace(".", "").replace("-", "");
  data.telefone = data.telefone
    .replace("(", "")
    .replace(")", "")
    .replace(" ", "")
    .replace("-", "");
  data.codigo = faker.random.alphaNumeric(10);

  return fetch(
    "https://bank-services-challenge2.herokuapp.com/api/v1/cliente",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
};

export const getClients = () => {
  return fetch("https://bank-services-challenge.herokuapp.com/api/v1/cliente", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updtadeClients = (id, data) => {
  return fetch(
    `https://bank-services-challenge2.herokuapp.com/api/v1/cliente/${id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
};
