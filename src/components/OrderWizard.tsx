'use client'
import styled from 'styled-components';
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import MopedIcon from '@mui/icons-material/Moped';
import LocalPizza from "@mui/icons-material/LocalPizza";
import Payment from "@mui/icons-material/Payment";
import SentimentSatisfiedAlt from "@mui/icons-material/SentimentSatisfiedAlt";
import { classNames } from 'functions';


const Body = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem;  
  position: relative;
  color: #FFF;
  width: 100%;
  background-color: rgba(45, 75, 42, 0.03);
`;

const Elements = styled.div`
&.nothing {
background-color: red;
  color: #FFF;
}
&.done {
  background-color: green;
  color: #FFF;
}

&.inProgress {
  @keyframes inProgress {
  from {
    opacity: 0.3;
    border : 0.5px solid #FFF;
  }
  
  to {
    opacity: 1;
    border : 1px solid green;
  }
}
  animation: inProgress 0.5s ease infinite alternate;
  background-color: orange;
  color: #FFF;
}
&.undone {
  opacity: 0.4;
  background-color: gray;
}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 0.2rem;  
  font-size: 0.6rem;
  @media screen and (min-width: 541px) {//medium

}
@media screen and (min-width: 650px) {//big

}
@media screen and (min-width: 950px) {//huge

}
@media screen and (min-width: 1100px) {//huge_one

}
`;

const Title = styled.span`
  margin-top: 0.5rem;
`;
const Icon = styled.i`
${this} .MuiSvgIcon-root{
  font-size: ${(props) => props.theme.font.sizes.xxxsmall};

}
`;

const OrderWizard = ({ status }: { status: number }) => {
  const statusClass = (index:any) => {
    if(status >= 3){
      return classNames('done');
    }else if(status > 0){
      if (index - status < 1) return classNames('done');
    if (index - status === 1) return classNames('inProgress');
    if ((index - status > 1) && (index - status <= 3)) return classNames('undone');
    
    }else if(status === 0) {
      if (index - status < 1) return classNames('nothing');
      if (index - status >= 1) return classNames('undone');
    }
    
  };
  return (
    <Body>
      <Elements className={`elements ${statusClass(0)}`}>
        {status > 0 && (<Payment />)}
        <Title>{status === 0 ? 'Não Pago': 'Pago'}</Title>
        {status > 0 && (<Icon>{status >= 1 ? <CheckCircleOutline/> : null}</Icon>)}
      </Elements>
      <Elements className={`elements ${statusClass(2)}`}>
        <SentimentSatisfiedAlt />
        <Title>Preparing</Title>
        <Icon>{status >= 2 ? <CheckCircleOutline/> : null}</Icon>
      </Elements>
      <Elements className={`elements ${statusClass(3)}`}>
        <MopedIcon />
        <Title>On the way</Title>
        <Icon>{status >= 3 ? <CheckCircleOutline/> : null}</Icon>
      </Elements>
      <Elements className={`elements ${statusClass(4)}`}>
        <LocalPizza />
        <Title>Delivered</Title>
        <Icon>{status >= 4 ? <CheckCircleOutline/> : null}</Icon>
      </Elements>
    </Body>
  );
};

export default OrderWizard;