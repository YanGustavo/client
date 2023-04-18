import React from 'react';
import styled from 'styled-components';
import { Chat, ThumbUp, CreditCard, LocalShipping } from '@mui/icons-material';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  width: 200px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  border-radius: 50%;
  margin-left: 1rem;
  .MuiSvgIcon-root {
color: #FFFFFF;
  font-size: 1rem;
  }
`;

const CardTitle = styled.h3`
  color: #FFFFFF;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
`;

const CardDescription = styled.p`
  color: #757575;
  font-size: 0.6rem;
`;

const InfoCard = ({ icon, title, description }) => {
  const iconMappings = {
    'chat': <Chat />,
    'thumb-up': <ThumbUp />,
    'credit-card': <CreditCard />,
    'local-shipping': <LocalShipping />,
  };

  return (
    <CardContainer>      
      <CardTitle>
        <IconContainer>
        {iconMappings[icon]}
      </IconContainer>
        {title}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
    </CardContainer>
  );
};

export default InfoCard;
