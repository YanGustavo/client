import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Menu from 'pages/dashbord/product/ui';
import BasicInfoForm from 'pages/dashbord/product/ui/BasicInfoForm';
import CharacteristicsForm from 'pages/dashbord/product/ui/CharacteristicsForm';
import ImagesForm from 'pages/dashbord/product/ui/ImagesForm';
import StockForm from 'pages/dashbord/product/ui/StockForm';
import TaxationForm from 'pages/dashbord/product/ui/TaxationForm';
import VariationsForm from 'pages/dashbord/product/ui/VariationsForm';
import Products from 'lib/data/Products';
//component
import Button from 'components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
`;

const MenuContainer = styled.div`
  flex: 1;
  width: 25%;
  border-right: 1px solid #ccc;
  padding-right: 20px;
  margin-right: 20px;
`;

const FormContainer = styled.div`
  flex: 3;
  width: 75%;
  padding-left: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const NavigationButtons = ({ step, maxStep, onBack, onNext, onSave }) => {
  return (
    <ButtonContainer>
      {step > 0 && (
        <Button onClick={onBack} variant="secondary">Voltar</Button>
      )}
      {step < maxStep && (
        <Button onClick={onNext}>Avançar</Button>
      )}
      {step === maxStep && (
        <Button onClick={onSave}>Salvar</Button>
      )}
    </ButtonContainer>
  );
};

function ProductCreateEdit() {
  const router = useRouter();

  // Função para navegar para a URL desejada
  const goToProductProduct = () => {
    router.push('/dashboard/product');
  };
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const maxStep = 5; // Define o número máximo de etapas

  useEffect(() => {
    const type = router.query.type;
    const idProduct = router.query.id_product;

    if (type === 'edit' && idProduct) {
      // Lógica para buscar os dados do produto com ID específico do banco de dados
      // Suponhamos que você tenha uma função fetchDataFromDatabase para isso
      // Exemplo: fetchDataFromDatabase(idProduct)
      // Os dados recuperados podem ser definidos em formData
      // setFormData(data);
    } else {
      // Lógica para criar um novo registro, se necessário
    }
  }, [router.query]);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const selectedProduct = Products[0];

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < maxStep) {
      setStep(step + 1);
    }
  };

  const handleSave = () => {
    // Lógica para salvar os dados do formulário
    // Por exemplo, enviar para um servidor.

    // Simule o sucesso ou falha do salvamento aqui.
    const savedSuccessfully = true;

    if (savedSuccessfully) {
      // Exemplo de toast de sucesso.
      toast.success('Produto salvo com sucesso!', {
        position: 'top-right',
        autoClose: 3000, // Fecha automaticamente após 3 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Exemplo de toast de erro.
      toast.error('Falha ao salvar o produto. Tente novamente.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    // Reinicie o estado do formulário se desejar limpar os dados após o salvamento.
    // setFormData({});
  };
  

  return (
    <ProductContainer>
      <MenuContainer>
        <Menu activeStep={step} handleStepChange={handleStepChange} />
      </MenuContainer>
      <FormContainer>
        {step === 0 && (
          <BasicInfoForm data={selectedProduct.basicInfo} onDataChange={handleDataChange} />
        )}
        {step === 1 && (
          <CharacteristicsForm data={selectedProduct.characteristics} onDataChange={handleDataChange} />
        )}
        {step === 2 && (
          <ImagesForm data={selectedProduct.images} onDataChange={handleDataChange} />
        )}

        {step === 3 && (
          <StockForm data={selectedProduct.stock} onDataChange={handleDataChange} />
        )}

        {step === 4 && (
          <TaxationForm data={selectedProduct.taxation} onDataChange={handleDataChange} />
        )}

        {step === 5 && (
          <VariationsForm data={selectedProduct.variations} onDataChange={handleDataChange} />
        )}

        <NavigationButtons
          step={step}
          maxStep={maxStep}
          onBack={handleBack}
          onNext={handleNext}
          onSave={handleSave}
        />
      </FormContainer>
    </ProductContainer>
  );
}

export default ProductCreateEdit;
