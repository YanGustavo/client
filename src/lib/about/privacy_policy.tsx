import { Suspense } from 'react';
import Loading from 'components/Loading';


export default function PrivacyPolicyPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
      <p>Política de Privacidade do Eai Chefinho</p>

<p>No Eai Chefinho, estamos comprometidos em proteger a privacidade dos nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais fornecidas por você ao utilizar nosso sistema de vendas online.</p>

<p>Coleta de Informações Pessoais</p>
<p>Ao visitar nosso site e realizar compras, podemos coletar informações pessoais que você voluntariamente fornece, como nome, endereço de e-mail, número de telefone, endereço de entrega e informações de pagamento. Essas informações são necessárias para processar seus pedidos e garantir a entrega adequada dos produtos.</p>

<p>Uso das Informações Pessoais</p>
<p>As informações pessoais coletadas são utilizadas exclusivamente para processar seus pedidos, fornecer suporte ao cliente, melhorar nossos serviços e personalizar sua experiência no Eai Chefinho. Além disso, podemos utilizar suas informações para enviar comunicações promocionais relacionadas aos nossos produtos e ofertas especiais, desde que você tenha consentido previamente em receber tais comunicações.</p>

<p>Divulgação de Informações</p>
<p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar suas compras, fornecer serviços relacionados ou cumprir obrigações legais. Em circunstâncias limitadas, podemos compartilhar informações com fornecedores confiáveis ​​que nos auxiliam na operação do site ou na prestação de serviços aos nossos clientes. No entanto, esses fornecedores são contratualmente obrigados a manter a confidencialidade das informações fornecidas e são proibidos de utilizá-las para qualquer finalidade além da prestação dos serviços acordados.</p>

<p>Segurança de Dados</p>
<p>Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, uso indevido, alteração ou destruição. Utilizamos métodos de criptografia para proteger as informações transmitidas durante o processo de pagamento e seguimos as melhores práticas da indústria para garantir a segurança dos dados.</p>

<p>Cookies</p>
<p>Podemos utilizar cookies e tecnologias similares para melhorar a sua experiência no nosso site, personalizar o conteúdo exibido e facilitar o processo de compra. Esses cookies não contêm informações pessoais identificáveis ​​e você pode optar por desativá-los no seu navegador, mas isso pode afetar o funcionamento adequado do site.</p>

<p>Links Externos</p>
<p>Nosso site pode conter links para sites de terceiros. Observe que não somos responsáveis ​​pelas práticas de privacidade desses sites. Recomendamos que você revise as políticas de privacidade deles antes de fornecer qualquer informação pessoal.</p>

<p>Alterações na Política de Privacidade</p>
<p>Podemos atualizar nossa Política de Privacidade periodicamente para refletir mudanças em nossas práticas de informações. Recomendamos que você revise esta política regularmente para estar ciente de quaisquer atualizações.</p>
   <p>Ao utilizar o Eai Chefinho, você concorda com a coleta e uso das suas informações pessoais de acordo com esta Política de Privacidade. Se você tiver alguma dúvida sobre nossa política ou sobre o tratamento dos seus dados, entre em contato conosco através dos canais disponíveis em nosso site.
</p>
<p>Última atualização desta Política de Privacidade: 8 de junho de 2023.</p>  
      </Suspense>
    </>
  );
}