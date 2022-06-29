/* eslint-disable no-unused-vars */
import { Input } from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { CreateUser } from "../../api";
import { useState } from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";
import ComponentMenu from "../../Components/Menu";
import BannerImg from "../../Img/banner-register.png";


const FormSection = styled.form`
  /* @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inder&family=Montserrat:wght@300&display=swap'); */
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #F3F3F3;
  flex-wrap: wrap;
  > div{
    display: flex;
    flex-direction: column;
    padding: 150px;
    padding-top: 0px;
    padding-bottom: 0px;
  
    > label{
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

   > section {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
     > div {
      display: flex;
      > button {
        margin-right: 15px;
        margin-left: 15px;
      }
     }
   }
  }
`;

const Img = styled.img `
width: 100%;
`

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
      <ComponentMenu />
      <Img src={BannerImg} alt="Banner Image"/>
      <h3>DADOS PESSOAIS</h3>
      <FormSection onSubmit={handleSubmit(onSubmit)}>
        <div>
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
          <label>CPF:</label>
          <InputMask
            label="CPF:"
            type="text"
            placeholder="000.000.000-00"
            {...register("cpf")}
            mask="999.999.99-99"
          />
          <Input
            label="Email:"
            type="email"
            placeholder="user@user.com"
            {...register("email")}
          />
        </div>

        {/*  */}

        <div>
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
          <section>
          <div>
            <Button title="Confirmar Cadastro" type="submit" />
            <Button title="Cancelar Cadastro" type="submit" /> 
          </div>
        </section>          
        </div>
        
          
      </FormSection>

    </section>
  );
};

export default Register;
