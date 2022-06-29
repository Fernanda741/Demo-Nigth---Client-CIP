/* eslint-disable no-unused-vars */
import { Input } from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { updtadeClients } from "../../api";
import { validarCpf, emailRegExp, cpfMask } from "../../validator";

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

const Uptade = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    updtadeClients(data).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    });
  };
};

export default Uptade;
