import { Input } from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";

export const Form = ({ client, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const onSubmitForm = (data) => {
    const body = {
      ...data,
      codigo: client.codigo,
    };
    onSubmit(client.id, body);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Input {...register("nome", { value: client.nome })} />
      <Input {...register("telefone", { value: client.telefone })} />
      <Input
        type="date"
        {...register("dataNasc", { value: client.dataNasc })}
      />
      <Input {...register("cpf", { value: client.cpf })} />
      <Input {...register("email", { value: client.email })} />
      <Input {...register("cep", { value: client.cep })} />
      <Input {...register("municipio", { value: client.municipio })} />
      <Input {...register("bairro", { value: client.bairro })} />
      <Input {...register("endereco", { value: client.endereco })} />
      <Input {...register("numero", { value: client.numero })} />
      <Input {...register("complem", { value: client.complem })} />
      <Input {...register("uf", { value: client.uf })} />

      <Button type="submit">Atualizar</Button>
    </form>
  );
};
