import React from 'react';
import styled from 'styled-components';
import Button from "components/Button";
import {Container, ContainerFlush, ButtonsFullAlign,} from "templates/base/ui/menu-right/styles";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

interface FormProps {
 // onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ConfigPage: React.FC<FormProps> = () => {//{ onSubmit }
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [receiveEmailNotifications, setReceiveEmailNotifications] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit form data
    //onSubmit(event);
  };

  return (
    
    <Form onSubmit={handleSubmit}>
      <Container>
      <ContainerFlush>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="confirmPassword">Confirm Password:</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="age">Age:</Label>
        <Input type="number" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="gender">Gender:</Label>
        <Input type="text" id="gender" value={gender} onChange={(event) => setGender(event.target.value)} />
      </FormGroup>
      <FormGroup>
        <CheckboxLabel htmlFor="receiveEmailNotifications">
          <Checkbox
            type="checkbox"
            id="receiveEmailNotifications"
            checked={receiveEmailNotifications}
            onChange={(event) => setReceiveEmailNotifications(event.target.checked)}
          />
          Receber atualizações por E-Mail
        </CheckboxLabel>
      </FormGroup>
      <ButtonsFullAlign><Button size="large">Salvar</Button></ButtonsFullAlign>
      </ContainerFlush>
      </Container>
    </Form>    
      
  );
};

export default ConfigPage;