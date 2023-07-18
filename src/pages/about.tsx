import StepsMenu from 'ui/StepsMenu';
import Layout from 'components/Layout';
import {
  ABOUT_US,
  CONTACT,
  EXCHANGE_AND_REFUND_POLICY,
  FAQ,
  PRIVACY_POLICY,
  SERVICE_TERMS,
  SHIPPING_POLICY
} from 'constants/about-constants';
import useAbout from 'hooks/useAbout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Base } from 'templates/base';
//icons
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PolicyIcon from '@mui/icons-material/Policy';
import QuizIcon from '@mui/icons-material/Quiz';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import styled from 'styled-components';
import {H2, I} from 'components/Typography';
//import Tooltip from 'components/Tooltip';

const RightBox = styled.div`
  float: right;
  width: 70%;
  height: auto;
  min-height: calc(100vh-150px);
  max-height: 100vh;
  position: relative;
  overflow-y: auto;
`;
const LeftBox = styled.div`
  float: left;
  top: -5px;
  left: 10px;
  position: absolute;
  width: 10%;
  max-width: 15%;
  height: calc(100% + 10px);
  background: ${(props) => props.theme.desing.colors.header.background};
  box-shadow: ${(props) => props.theme.desing.box.shadow};
  border: 1px dotted ${(props) => props.theme.desing.colors.header.color};
  @media screen and (min-width: 950px) {
  ${this}{
    border: 4px dotted ${(props) => props.theme.desing.border.color};
}
}
`;
const Nav = styled.div`
${this} a {
  list-style: none;
  padding: 1rem 0.2rem 1rem 0.2rem;  
  color: ${(props) => props.theme.desing.colors.header.color};
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-wrap: wrap;
  margin: auto;
  ${this}:hover {    
  }
  ${this}:first-child {
    margin-top: 7px;
  }
}
${this} a .MuiSvgIcon-root {
  opacity: 0.5;
  transition: 1s;
  font-size: 1.1em !important;
  color: #faf9fb;
  transition: all .3s ease-in-out;
}
${this} a.active {
  background-color: ${(props) => props.theme.desing.buttons.secondary.backgroundColor};
}
/* ${this} a:hover .MuiSvgIcon-root,
${this} a.active .MuiSvgIcon-root {
  color: ${(props) => props.theme.desing.colors.header.textColor};
  opacity: 1;
  transition: 1s;
  transform: scale(1.5) translateY(0.1rem);
  cursor: pointer;   
} */
${this} a ${I} {
  padding: 0.2rem;
display: none;
transition: all .3s ease-in-out;
}
${this} a:hover ${I}, ${this} a.active ${I} {
  opacity: 0;
  //font-size: 0.4rem;
}
@media screen and (min-width: 650px) {
  ${this} a ${I} {
  display: inline-block;
  font-size: 0.6rem; 
}
}
@media screen and (min-width: 1100px) {
  ${this} a ${I} {
  display: inline-block;
  font-size: 0.7rem; 
}
}
`;
export default function About() {
  const router = useRouter();
  const typeRouter = router.query.keyword;
  const { data, content } = useAbout(router.query);
  return (
    <Layout title={data ? data : ''}>
      <Base>
        <StepsMenu>
          <LeftBox>
            <Nav>
              <Link
                href={{ query: { keyword: PRIVACY_POLICY } }}
                className={typeRouter === PRIVACY_POLICY ? 'active' : ''}
              >
                <PolicyIcon />
                <I color='white' textAlign='center'>Política de Privacidade</I>
              </Link>
              <Link
                href={{ query: { keyword: EXCHANGE_AND_REFUND_POLICY } }}
                className={
                  typeRouter === EXCHANGE_AND_REFUND_POLICY ? 'active' : ''
                }
              >
                <CurrencyExchangeIcon />
                <I color='white' textAlign='center'>Política de Trocas e Reembolso</I>
              </Link>
              <Link
                href={{ query: { keyword: SHIPPING_POLICY } }}
                className={typeRouter === SHIPPING_POLICY ? 'active' : ''}
              >
                <LocalShippingIcon />
                <I color='white' textAlign='center'>Política de Envio</I>
              </Link>
              <Link
                href={{ query: { keyword: SERVICE_TERMS } }}
                className={typeRouter === SERVICE_TERMS ? 'active' : ''}
              >
                <ReceiptLongIcon />
                <I color='white' textAlign='center'>Termos de Serviço</I>
              </Link>
              <Link
                href={{ query: { keyword: CONTACT } }}
                className={typeRouter === CONTACT ? 'active' : ''}
              >
                <ContactPageIcon />
                <I color='white' textAlign='center'>Contate-nos</I>
              </Link>
              <Link
                href={{ query: { keyword: FAQ } }}
                className={typeRouter === FAQ ? 'active' : ''}
              >
                <QuizIcon />
                <I color='white' textAlign='center'>FAQ - Perguntas Frequentes</I>
              </Link>
              <Link
                href={{ query: { keyword: ABOUT_US } }}
                className={typeRouter === ABOUT_US ? 'active' : ''}
              >
                <InfoIcon />
                <I color='white' textAlign='center'>Sobre Nós</I>
              </Link>
            </Nav>
          </LeftBox>
          <RightBox className='baseScrollbar'>
            <H2>{data}</H2>
            {content}
          </RightBox>
        </StepsMenu>
      </Base>
    </Layout>
  );
}
