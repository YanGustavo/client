import * as SFooter from './styles';
import Link from 'next/link';
import { PRIVACY_POLICY, EXCHANGE_AND_REFUND_POLICY, SHIPPING_POLICY, SERVICE_TERMS, CONTACT, FAQ, ABOUT_US} from "constants/about-constants";

export default function Footer() {

return(
  <SFooter.FooterStyle>
    <div className="lineGradientTop"></div>
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
    </SFooter.FooterStyle>
  )
  }