import { Input } from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";

export const FormCreateAccount = ({ accountCreate, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => {
    const body = {
      ...data,

      cliente: accountCreate,
    };

    onSubmit(body);
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
