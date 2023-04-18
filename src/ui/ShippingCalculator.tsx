import { useState } from 'react';
import styled from 'styled-components';
import * as z from 'zod';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  margin-top: 0.5rem;
`;

const schema = z.object({
  cep: z.string().length(8, 'O CEP deve ter exatamente 8 caracteres'),
});

type FormData = z.infer<typeof schema>;

type ShippingCalculatorProps = {
  onCalculateShipping: (cep: string) => void;
};

const ShippingCalculator = ({ onCalculateShipping }: ShippingCalculatorProps) => {
  const [formData, setFormData] = useState<FormData>({ cep: '' });
  const [formErrors, setFormErrors] = useState<{ cep?: string }>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const validFormData = schema.parse(formData);
      setFormErrors({});
      onCalculateShipping(validFormData.cep);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors(error.formErrors.fieldErrors);
      } else {
        throw error;
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isFormValid = Object.keys(formErrors).length === 0 && formData.cep.length === 8;

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        CEP:
        <Input
          type="text"
          name="cep"
          value={formData.cep}
          onChange={handleChange}
          maxLength={8}
          minLength={8}
        />
        {formErrors.cep && <ErrorMessage>{formErrors.cep}</ErrorMessage>}
      </Label>
      <Button type="submit" disabled={!isFormValid}>
        Calcular frete
      </Button>
    </Form>
  );
};

export default ShippingCalculator;