import React from 'react';
import styled from 'styled-components';
import { useBaseContext } from 'context/base-context';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

interface CheckoutWizardProps {
  activeStep?: number;
}

const CheckoutWizard: React.FC<CheckoutWizardProps> = ({ activeStep = 0 }) => {
  const [state, actions] = useBaseContext();
  const stepActions = {
    0: () => actions.setLoginPage(),
    1: () => actions.setCartShippingPage(),
    2: () => actions.setCartPaymentPage(),
    3: () => actions.setCartPlaceOrderPage(),
  };
  const stepIcons = [    <LoginIcon className="MuiSvgIcon-root" />,    <HomeIcon className="MuiSvgIcon-root" />,    <PaymentIcon className="MuiSvgIcon-root" />,    <ShoppingBasketIcon className="MuiSvgIcon-root" />,  ];

  return (
    <StyledContainer>
      {['Logado', 'Endereço de Entrega', 'Método de Pagamento', 'Faça a encomenda'].map((step, index) => (
        <StyledStep key={step} active={index <= activeStep}>
          <button onClick={stepActions[index]}>
            <StyledIconWrapper>
              {stepIcons[index]}
            </StyledIconWrapper>
            <span>{step}</span>
          </button>
        </StyledStep>
      ))}
    </StyledContainer>
  );
};

interface StepProps {
  active: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${props => props.theme.colors.heading_color};
  padding: 0.5rem;
`;

const StyledStep = styled.div<StepProps>`
  flex: 1;
  text-align: center;
  border-bottom: 5px solid;
  border-color: ${({ active, theme }) =>
    active ? theme.colors.primary_button_text_color : 'gray'};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary_button_text_color : 'gray'};
  margin: 0 0.2rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ active, theme }) =>
      active ? theme.colors.primary_button_text_color : 'gray'};
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default CheckoutWizard;