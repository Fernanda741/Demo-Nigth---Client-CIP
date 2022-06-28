/* eslint-disable no-unused-vars */
import { Input } from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { CreateUser } from "../../api";
import { validarCpf, emailRegExp } from "../../validator";
// import InputMask from "react-input-mask";

import styled from "styled-components";
import ComponentMenu from "../../Components/Menu";
import BannerImg from "../../Img/banner-register.png";

const FormSection = styled.form`
  /* @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inder&family=Montserrat:wght@300&display=swap'); */
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #f3f3f3;
  > div {
    display: flex;
    flex-direction: column;
    padding: 150px;
    padding-top: 0px;
    padding-bottom: 0px;
    width: 100%;

    > label {
      margin-bottom: 10px;
      margin-top: 3px;
      border-color: black;
      font-family: "Montserrat";
      font-weight: bolder;
      font-size: 15px;
    }

    > input {
      border-radius: 3px;
      width: 25vw;
      padding: 10px;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Register = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log("teste");
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
      <ComponentMenu />
      <Img src={BannerImg} alt="Banner Image" />
      <h3>DADOS PESSOAIS</h3>
      <FormSection onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Nome:"
            type="text"
            placeholder="Nome Completo"
            {...register("nome", { required: true })}
          />
          <Input
            label="Telefone:"
            type="tel"
            placeholder="(xx) x xxxxxxxx"
            {...register("telefone", { required: true })}
          />

          <Input
            label="Data de Nascimento:"
            type="date"
            {...register("dataNasc", { required: true })}
          />

          <label>CPF:</label>
          <Input
            label="CPF:"
            type="text"
            placeholder="000.000.000-00"
            mask="999.999.99-99"
            {...register("cpf", {
              required: true,
              validate: validarCpf,
            })}
          />
          <Input
            label="Email:"
            type="email"
            placeholder="user@user.com"
            {...register("email", {
              required: true,
              pattern: emailRegExp,
            })}
          />
        </div>
        <div>
          <Input
            label="Cep:"
            type="text"
            placeholder="Cep"
            {...register("cep", { onBlur: checkCEP, required: true })}
          />
          <Input
            label="Municipio"
            type="text"
            placeholder="Municipio"
            {...register("municipio", { required: true })}
          />
          <Input
            label="Bairro:"
            type="text"
            placeholder="Bairro"
            {...register("bairro", { required: true })}
          />
          <Input
            label="Rua:"
            type="text"
            placeholder="Rua"
            {...register("endereco", { required: true })}
          />
          <Input
            label="Numero:"
            type="number"
            placeholder="Nº"
            {...register("numero", { required: true })}
          />
          <Input
            label="Complemento:"
            type="text"
            placeholder="Complemento"
            {...register("complem")}
          />
          <Input
            label="UF:"
            type="text"
            placeholder="UF"
            {...register("uf", { required: true })}
          />
          <Button title="Cadastrar" type="submit" />
        </div>
      </FormSection>
    </section>
  );
};

export default Register;
