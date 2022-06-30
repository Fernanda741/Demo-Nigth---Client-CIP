import { Input } from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";

export const FormCount = ({ account, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const onSubmitForm = (data) => {
    const body = {
      ...data,
      id: account.id,
      cliente: {
        nome: account.cliente.nome,
        cep: account.cliente.cep,
        cpf: account.cliente.cpf,
        telefone: account.cliente.telefone,
        email: account.cliente.email,
        municipio: account.cliente.municipio,
        bairro: account.cliente.bairro,
        codigo: account.cliente.codigo,
        numero: account.cliente.numero,
        complem: account.cliente.complem,
        uf: account.cliente.uf,
        dataNasc: account.cliente.dataNasc,
        endereco: account.cliente.endereco,
        id: account.cliente.id,
      },
    };

    /* ...data,
      nome: account.cliente.nome,
      cep: account.cliente.cep,
      cpf: account.cliente.cpf,
      telefone: account.cliente.telefone,
      email: account.cliente.email,
      municipio: account.cliente.municipio,
      bairro: account.cliente.endereco,
      codigo: account.cliente.codigo,
      numero: account.cliente.numero,
      complement: account.cliente.complement,
      uf: account.cliente.uf,
      data: account.cliente.dataNasc,
    };*/
    onSubmit(account.id, body);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        label="agencia"
        {...register("agencia", { value: account.agencia })}
      />
      <Input label="Conta:" {...register("conta", { value: account.conta })} />
      <Input
        label="Cod do Banco"
        {...register("numBanco", { value: account.numBanco })}
      />
      <Input
        label="Nome Banco:"
        {...register("nomeBanco", { value: account.nomeBanco })}
      />
      <Input label="Senha:" {...register("senha", { value: account.senha })} />
      <Button type="submit">Atualizar</Button>
    </form>
  );
};
