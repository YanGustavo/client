'use client'
import Link from 'next/link';
import { PRIVACY_POLICY, EXCHANGE_AND_REFUND_POLICY, SHIPPING_POLICY, SERVICE_TERMS, CONTACT, FAQ, ABOUT_US} from "constants/about-constants";
import styled from 'styled-components';
const FooterStyle = styled.footer`
    background-color: #2d5734;
    margin-top: 1rem;    

.container-footer{
    max-width: 1400px;
    min-width: 300px;
    padding-top: 0.4rem;
    margin: auto;
}
.row-footer{
    display: flex;
    flex-wrap: wrap;
}

.footer-col{
    width: 33.33%;
    padding: 0 15px;
}
.footer-col h4{
    font-size: 0.8rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 500;
    position: relative;
    text-transform: uppercase;
}
.footer-col ul{
    list-style: none;
}
.footer-col ul li{
    margin: 0.4rem 0;
}
.footer-col ul li a{
    font-size: 0.8rem;
    color: white;
    text-decoration: none;
    font-weight: 300;
    display: block;
    transition: ease-in-out 0.3s;
}
.footer-col ul li a:hover{
    color: #00aa00;
    padding-left: 4rem;
}
.footer-col ul li p {
    font-size: 0.8rem;
    color: white;
    display: block;
}
.footer-col ul li p strong {
    font-size: 0.8rem;
    color: white;
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
}
@media (max-width:541px) {
    .footer-col{
        width: 100%;
    }
}
@media (max-width: 950px) {
    .footer-col{
        width: 50%;
        margin-bottom: 30px;
    }
}
@media screen and (min-width: 1232px) {
    .footer-col ul li p{
    display: flex;
    align-items: baseline;
  }
}
@media screen and (min-width: 1400px) {
  
}
@media screen and (min-width: 1600px) {
  
}
`;
export default function Footer() {

return(
  <FooterStyle>
    <div className="lineGradient"></div>
        <div className="container-footer">
            <div className="row-footer">
               {/* footer col */}
               <div className="footer-col">
                    <h4>Central de Atendimento</h4>
                    <ul>
                        <li><p><strong>Atendimento:&nbsp;</strong>Segunda á Domingo das 9:00h ás 20:00h</p></li>
                        <li><p><strong>E-mail:&nbsp;</strong>atendimento@eaichefinho.com.br</p></li>
                        <li><p><strong>Telefone:&nbsp;</strong>+55 (98) 95842-8872</p></li>
                        <li><p><strong>Endereço:&nbsp;</strong>Online</p></li>
                        <li><p><strong>CNPJ:&nbsp;</strong>36.630.209/0001-86</p></li>
                        <li><p>Preços e condições de pagamento exclusivas para compras nesse site oficial.</p></li>
                    </ul>
                </div>
                {/* end footer col */}
                {/* footer col */}
                <div className="footer-col">
                    <h4>Políticas</h4>
                    <ul>
                        <li><Link href={{ pathname: '/about', query: { keyword: PRIVACY_POLICY } }}>Política de Privacidade</Link></li>
                        <li><Link href={{ pathname: '/about', query: { keyword: EXCHANGE_AND_REFUND_POLICY } }}>Política de Trocas e Reembolso</Link></li>
                        <li><Link href={{ pathname: '/about', query: { keyword: SHIPPING_POLICY } }}>Política de Envio</Link></li>
                        <li><Link href={{ pathname: '/about', query: { keyword: SERVICE_TERMS } }}>Termos de Serviço</Link></li>
                    </ul>
                </div>
                {/* end footer col */}
                {/* footer col */}
                <div className="footer-col">
                    <h4>Link´s Úteis</h4>
                    <ul>
                        <li><Link href={{ pathname: '/about', query: { keyword: CONTACT } }}>Contato</Link></li>
                        <li><Link href={{ pathname: '/about', query: { keyword: FAQ } }}>FAQ - Perguntas Frequentes</Link></li>
                        <li><Link href={{ pathname: '/about', query: { keyword: ABOUT_US } }}>Sobre Nós</Link></li>
                    </ul>
                </div>
                {/* end footer col */}             
                
            </div>
            <div className="flex h-10 justify-center items-center shadow-inner">
            <p className="text-white">Copyright © 2023 Eai Chefinho</p>
            </div>
        </div>
        {/* <footer classNameName="flex h-10 justify-center items-center shadow-inner">
          <p classNameName="c-white">Copyright © 2023 Eai Chefinho</p>
</footer> */}
    </FooterStyle>
  )
  }