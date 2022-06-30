import Button from "../Button";
import IconButton from "../IconButton";
import "./style.css";
import { useForm } from "react-hook-form";

export const SearchBar = ({ onSubmit, onReset }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
    >
      <input placeholder="NOME" {...register("nome")} />
      <input placeholder="CPF" {...register("cpf")} />
      <IconButton className="icon-search" type="submit" />
      <Button type="reset">Limpar</Button>
    </form>
  );
};

export const SearchBarAccount = ({ onSubmit, onReset }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
    >
      <input placeholder="AGENCIA" {...register("agencia")} />
      <input placeholder="CONTA" {...register("conta")} />
      <IconButton className="icon-reset" type="submit" />
      <Button type="reset">Limpar</Button>
    </form>
  );
};
