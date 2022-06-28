/* eslint-disable no-unused-vars */
import { Input } from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { CreateUser } from "../../api";
import { useState } from "react";

const Register = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    CreateUser(data).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    });
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("bairro", data.bairro);
        setValue("municipio", data.localidade);
        setValue("endereco", data.logradouro);
        setValue("complem", data.complemento);
        setValue("numero", data.numero);
        setValue("uf", data.uf);
      });
  };

  // "codigo": "48", verificar na documentação sobre mascaras e como extrair o codigo do telefone

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome:"
          type="text"
          placeholder="Nome Completo"
          {...register("nome")}
        />

        <Input
          label="Telefone:"
          type="tel"
          placeholder="(xx) x xxxxxxxx"
          {...register("telefone")}
        />

        <Input
          label="Data de Nascimento:"
          type="date"
          {...register("dataNasc")}
        />
        <Input
          label="CPF:"
          type="text"
          placeholder="000.000.000-00"
          {...register("cpf")}
        />
        <Input
          label="Email:"
          type="email"
          placeholder="user@user.com"
          {...register("email")}
        />

        {/*  */}
        <Input
          label="Cep:"
          type="text"
          placeholder="Cep"
          {...register("cep", { onBlur: checkCEP })}
        />
        <Input
          label="Municipio"
          type="text"
          placeholder="Municipio"
          {...register("municipio")}
        />
        <Input
          label="Bairro:"
          type="text"
          placeholder="Bairro"
          {...register("bairro")}
        />
        <Input
          label="Rua:"
          type="text"
          placeholder="Rua"
          {...register("endereco")}
        />
        <Input
          label="Numero:"
          type="number"
          placeholder="Nº"
          {...register("numero")}
        />
        <Input
          label="Complemento:"
          type="text"
          placeholder="Complemento"
          {...register("complem")}
        />
        <Input label="UF:" type="text" placeholder="UF" {...register("uf")} />
        <Button title="Cadastrar" type="submit" />
      </form>
    </section>
  );
};

export default Register;
