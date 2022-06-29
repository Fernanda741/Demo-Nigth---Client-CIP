/* eslint-disable no-unused-vars */
import { Input } from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { createClients } from "../../api";
import { validarCpf, emailRegExp, maskCPF, maskPhone } from "../../validator";
import { ErrorAlert, ErrorMessages } from "../../Components/ErrorComponent";
import styled from "styled-components";
import ComponentMenu from "../../Components/Menu";
import BannerImg from "../../Img/banner-register.png";
import { useState } from "react";

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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (data) => {
    createClients(data)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        alert("Deu certo");
      })
      .catch((error) => {
        errors(ErrorAlert(error));
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
          {errors.name && <p>campo obrigatório</p>}
          <Input
            label="Telefone:"
            type="tel"
            {...register("telefone", { required: true, max: 11 })}
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
          />
          {errors.telefone && <p>campo obrigatório</p>}

          <Input
            label="Data de Nascimento:"
            type="date"
            {...register("dataNasc", { required: true })}
          />
          {errors.dataNasc && <p>campo obrigatório</p>}

          <Input
            label="CPF:"
            type="text"
            placeholder="000.000.000-00"
            {...register("cpf", {
              required: "true",
              validate: validarCpf,
            })}
            value={cpf}
            onChange={(e) => setCpf(maskCPF(e.target.value))}
          />
          {errors.cpf && <p>Por favor, digite um CPF válido</p>}

          <Input
            label="Email:"
            type="email"
            placeholder="user@user.com"
            {...register("email", {
              required: true,
              pattern: emailRegExp,
            })}
          />
          {errors.email && <p>campo obrigatório</p>}
        </div>
        <div>
          <Input
            label="Cep:"
            type="text"
            placeholder="Cep"
            {...register("cep", { onBlur: checkCEP, required: true })}
          />
          {errors.cep && <p>campo obrigatório</p>}
          <Input
            label="Municipio"
            type="text"
            placeholder="Municipio"
            {...register("municipio", { required: true })}
          />
          {errors.municipio && <p>campo obrigatório</p>}
          <Input
            label="Bairro:"
            type="text"
            placeholder="Bairro"
            {...register("bairro", { required: true })}
          />
          {errors.bairro && <p>campo obrigatório</p>}
          <Input
            label="Rua:"
            type="text"
            placeholder="Rua"
            {...register("endereco", { required: true })}
          />
          {errors.endereco && <p>campo obrigatório</p>}
          <Input
            label="Numero:"
            type="number"
            placeholder="Nº"
            {...register("numero", { required: true })}
          />
          {errors.numero && <p>campo obrigatório</p>}
          <Input
            label="Complemento:"
            type="text"
            placeholder="Complemento"
            {...register("complem", { required: true, min: 2 })}
          />
          <Input
            label="UF:"
            type="text"
            placeholder="UF"
            {...register("uf", { required: true })}
          />

          <Input label="UF:" type="text" placeholder="UF" {...register("uf")} />
          <section>
          <div>
            <Button title="Confirmar Cadastro" type="submit" />
            <Button title="Cancelar Cadastro" type="submit" /> 
          </div>
        </section>          
          {errors.uf && <p>campo obrigatório</p>}
        </div>  
      </FormSection>
   </section>
  );
};

export default Register;
