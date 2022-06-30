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
import { useState, useCallback, useEffect } from "react";
import './style.css'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

// const FormSection = styled.form`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   background-color: #f3f3f3;
//   flex-wrap: wrap;

//     > input {
//       border-radius: 3px;
//       width: 25vw;
//       padding: 10px;
//     }

//     > section {
//       margin-top: 20px;
//       margin-bottom: 20px;
//       display: flex;
//       justify-content: center;

//       > div {
//         display: flex;
//         > button {
//           margin-right: 15px;
//           margin-left: 15px;
//           background-color: #6acc86;
//           font-family: "Montserrat";
//           font-weight: bolder;
//           border-radius: 3px;
//           padding: 10px;
//           border: #ababab 1px;
//           width: 150px;
//         }
//       }
//     }
//   }
// `;

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
        if (response.status === 201) {
          notifySuccess();
          return response.json();
        }
        
        notifyError();
      })
      .catch((error) => {
        notifyError();
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

  const notifySuccess = () => {
    ToastsStore.success('Cliente cadastrado com sucesso');
  }

  const notifyError = () => {
    ToastsStore.error('Algo deu errado');
  }

  return (
    <section>
      <ComponentMenu />
      <img className="Img" src={BannerImg} alt="" />
      <h3 className="Title">DADOS PESSOAIS</h3>
      <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
      <section className="first-col">
          <div className="first-div">
            <Input
              label="Nome:"
              type="text"
              placeholder="Nome Completo"
              {...register("nome", { required: true })}
            />
            {errors.name && <p>Campo Obrigatório</p>}
            <Input
              label="Telefone:"
              type="tel"
              {...register("telefone", { required: true, max: 11 })}
              value={phone}
              onChange={(e) => setPhone(maskPhone(e.target.value))}
            />
            {errors.telefone && <p>Campo Obrigatório</p>}

            <Input
              label="Data de Nascimento:"
              type="date"
              {...register("dataNasc", { required: true })}
            />
            {errors.dataNasc && <p>Campo Obrigatório</p>}

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
            {errors.email && <p>Campo Obrigatório</p>}
          </div>
        </section>
        <section className="second-col">
          <div className="second-div">
            <Input
              label="Cep:"
              type="text"
              placeholder="Cep"
              {...register("cep", { onBlur: checkCEP, required: true })}
            />
            {errors.cep && <p>Campo Obrigatório</p>}
            <Input
              label="Município: "
              type="text"
              placeholder="Município"
              {...register("municipio", { required: true })}
            />
            {errors.municipio && <p>Campo Obrigatório</p>}
            <Input
              label="Bairro:"
              type="text"
              placeholder="Bairro"
              {...register("bairro", { required: true })}
            />
            {errors.bairro && <p>Campo Obrigatório</p>}
            <Input
              label="Rua:"
              type="text"
              placeholder="Rua"
              {...register("endereco", { required: true })}
            />
            {errors.endereco && <p>Campo Obrigatório</p>}
            <Input
              label="Número:"
              type="number"
              placeholder="Nº"
              {...register("numero", { required: true })}
            />
            {errors.numero && <p>Campo Obrigatório</p>}
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
            

            <section>
              <div className="register-btn-group">
                <Button buttonClass="btn-primary" title="Confirmar Cadastro" type="submit" />
                <Button  buttonClass="btn-secondary" title="Cancelar Cadastro" type="reset" />
              </div>
            </section>
            {errors.uf && <p>Campo Obrigatório</p>}
          </div>
        </section>
      </form>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
    </section>
  );
};

export default Register;
