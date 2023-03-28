import React, { useState } from "react";
import ModalPage from "./Modal";
import Button from "components/Button";
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }

  input,
  textarea {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.border_color};
    border-radius: 5px;
  }

  textarea {
    height: 150px;
  }
`;
const ReportError = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar e-mail com informações sobre o erro
    // ...

    // Fechar o modal após o envio do e-mail
    setIsOpen(false);
  };

 

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Relatar um Problema!</Button>
<ModalPage isOpen={isOpen}>
  
  <Form onSubmit={handleSubmit}>
    <h2>Reportar erro</h2>
    <label htmlFor="type">Tipo de erro</label>
    <input
      id="type"
      type="text"
      value={type}
      onChange={(e) => setType(e.target.value)}
    />
    <label htmlFor="description">Descrição do erro</label>
    <textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <Button type="submit">Enviar</Button>
  </Form>
</ModalPage>
    </>
  );
};

export default ReportError;