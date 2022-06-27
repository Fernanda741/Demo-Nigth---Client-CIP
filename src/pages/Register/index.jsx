/* eslint-disable no-unused-vars */
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [county, setCounty] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [uf, setUf] = useState("");

  return (
    <section>
      <form>
        <label>Nome:</label>
        <Input type="text" placeholder="Nome Completo" />
        <label>Telefone:</label>
        <Input type="tel" placeholder="(xx) x xxxxxxxx" />
        <label>Data de Nascimento:</label>
        <Input type="date" />
        <label>CPF:</label>
        <Input type="number" placeholder="000.000.000-00" />
        <label>Email:</label>
        <Input type="email" placeholder="user@user.com" />
        <label>Cep:</label>
        <Input type="text" placeholder="Cep" />
        <label>Municipio:</label>
        <Input type="text" placeholder="Municipio" />
        <label>Bairro:</label>
        <Input type="text" placeholder="Bairro" />
        <label>Rua:</label>
        <Input type="text" placeholder="Rua" />
        <label>Numero:</label>
        <Input type="text" placeholder="Nº" />
        <label>Complemento:</label>
        <Input type="text" placeholder="Complemento" />
        <label>UF:</label>
        <Input type="text" placeholder="UF" />
      </form>
      <Button title="Cadastrar" />
    </section>
  );
};

export default Register;
