import { Input } from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";

export const FormCreateAccount = ({ accountCreate, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const onSubmitForm = (data) => {
    const body = {
      ...data,
      id: accountCreate.id,
      cliente: {
        nome: accountCreate.cliente.nome,
        cep: accountCreate.cliente.cep,
        cpf: accountCreate.cliente.cpf,
        telefone: accountCreate.cliente.telefone,
        email: accountCreate.cliente.email,
        municipio: accountCreate.cliente.municipio,
        bairro: accountCreate.cliente.bairro,
        codigo: accountCreate.cliente.codigo,
        numero: accountCreate.cliente.numero,
        complem: accountCreate.cliente.complem,
        uf: accountCreate.cliente.uf,
        dataNasc: accountCreate.cliente.dataNasc,
        endereco: accountCreate.cliente.endereco,
        id: accountCreate.cliente.id,
      },
    };

    onSubmit(accountCreate.id, body);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        label="Agência: "
        placeholder="Agência"
        {...register("agencia", { required: true })}
      />
      <Input
        label="Conta: "
        placeholder="Conta"
        {...register("conta", { required: true })}
      />
      <Input
        label="Cód. Banco: "
        placeholder="Código do Banco"
        {...register("numBanco", { required: true })}
      />
      <Input
        label="Nome Banco: "
        placeholder="Banco"
        {...register("nomeBanco", { required: true })}
      />
      <Input
        label="Senha: "
        placeholder="Senha"
        {...register("senha", { required: true })}
      />
      <Button type="submit">Cadastrar</Button>
      <Button type="reset">Limpar</Button>
    </form>
  );
};
