export const ErrorAlert = (response) => {
  switch (response.status) {
    case 400:
      return <p>Preencha todos os campos solicitados</p>;
    case 401:
      return <p>Usuário não cadastrado</p>;
    case 403:
      return <p>Email já cadastrado</p>;
    case 404:
      return <p>Usuário não encontrado</p>;
    default:
      return <p>Algo deu errado</p>;
  }
};

export const ErrorMessages = ({ errorText, value }) => {
  return (
    <div>
      {value}
      <p> {errorText}</p>
    </div>
  );
};
