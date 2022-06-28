/* eslint-disable no-unused-vars */
import { Input } from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { CreateUser } from "../../api";
import { validarCpf } from "../../Components/validator";

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

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

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome:"
          type="text"
          placeholder="Nome Completo"
          {...register("nome", { required: true })}
        />
        {errors.nome && <p>Por favor digite seu nome</p>}

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
          {...register("cpf", {
            require: true,
            validate: validarCpf,
          })}
        />
        {errors.cpf && <p>Cpf Invalido</p>}
        <Input
          label="Email:"
          type="email"
          placeholder="user@user.com"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && <p>Por favor digite seu email</p>}

        {/*  */}
        <Input
          label="Cep:"
          type="text"
          placeholder="Cep"
          {...register("cep", { onBlur: checkCEP, required: true })}
        />
        {errors.cep && <p>Por favor digite seu cep</p>}
        <Input
          label="Municipio"
          type="text"
          placeholder="Municipio"
          {...register("municipio", { required: true })}
        />
        {errors.municipio && <p>Por favor digite seu Municipio</p>}
        <Input
          label="Bairro:"
          type="text"
          placeholder="Bairro"
          {...register("bairro", { required: true })}
        />
        {errors.bairro && <p>Por favor digite seu Municipio</p>}
        <Input
          label="Rua:"
          type="text"
          placeholder="Rua"
          {...register("endereco", { required: true })}
        />
        {errors.endereco && <p>Por favor digite seu Municipio</p>}
        <Input
          label="Numero:"
          type="number"
          placeholder="Nº"
          {...register("numero", { required: true })}
        />
        {errors.numero && <p>Por favor digite seu Municipio</p>}
        <Input
          label="Complemento:"
          type="text"
          placeholder="Complemento"
          {...register("complem", { required: true })}
        />
        {errors.complem && <p>Por favor digite seu complemento</p>}
        <Input
          label="UF:"
          type="text"
          placeholder="UF"
          {...register("uf", { required: true })}
        />
        {errors.uf && <p>Por favor digite sua UF</p>}
        <Button title="Cadastrar" type="submit" />
      </form>
    </section>
  );
};

export default Register;
