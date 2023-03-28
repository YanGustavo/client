import StepsMenu from '@/ui/pages/about/components/steps-menu';
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
import {
  LeftBox,
  Nav,
  RightBox
} from 'ui/pages/about/components/steps-menu/styles';
//icons
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PolicyIcon from '@mui/icons-material/Policy';
import QuizIcon from '@mui/icons-material/Quiz';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

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
                <i>Política de Privacidade</i>
              </Link>
              <Link
                href={{ query: { keyword: EXCHANGE_AND_REFUND_POLICY } }}
                className={
                  typeRouter === EXCHANGE_AND_REFUND_POLICY ? 'active' : ''
                }
              >
                <CurrencyExchangeIcon />
                <i>Política de Trocas e Reembolso</i>
              </Link>
              <Link
                href={{ query: { keyword: SHIPPING_POLICY } }}
                className={typeRouter === SHIPPING_POLICY ? 'active' : ''}
              >
                <LocalShippingIcon />
                <i>Política de Envio</i>
              </Link>
              <Link
                href={{ query: { keyword: SERVICE_TERMS } }}
                className={typeRouter === SERVICE_TERMS ? 'active' : ''}
              >
                <ReceiptLongIcon />
                <i>Termos de Serviço</i>
              </Link>
              <hr />
              <Link
                href={{ query: { keyword: CONTACT } }}
                className={typeRouter === CONTACT ? 'active' : ''}
              >
                <ContactPageIcon />
                <br />
                <i>Contato</i>
              </Link>
              <Link
                href={{ query: { keyword: FAQ } }}
                className={typeRouter === FAQ ? 'active' : ''}
              >
                <QuizIcon />
                <i>FAQ - Perguntas Frequentes</i>
              </Link>
              <Link
                href={{ query: { keyword: ABOUT_US } }}
                className={typeRouter === ABOUT_US ? 'active' : ''}
              >
                <InfoIcon />
                <i>Sobre Nós</i>
              </Link>
            </Nav>
          </LeftBox>
          <RightBox>
            <h1>{data}</h1>
            {content}
          </RightBox>
        </StepsMenu>
      </Base>
    </Layout>
  );
}
