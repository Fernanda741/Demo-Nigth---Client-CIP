// const url = "https://bank-services-challenge.herokuapp.com/";

export const CreateUser = (data) => {
  data.dataNasc = new Date(data.dataNasc).toISOString();

  return fetch("https://bank-services-challenge.herokuapp.com/api/v1/cliente", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
