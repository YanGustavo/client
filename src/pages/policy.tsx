'use client'
import React from 'react';
import * as Icons from '@mui/icons-material/';

const Policies = [
  { 
    slug: "politicas_de_privacidade",
    slugTheme: "eaichefinho",
    language: "pt-BR",
    title: "Política de Privacidade",
    icon:"CurrencyExchange",
    content: [
        { type: "paragraph", text: "Política de Privacidade do Eai Chefinho" },
        { type: "paragraph", text: "No Eai Chefinho, estamos comprometidos em proteger a privacidade dos nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais fornecidas por você ao utilizar nosso sistema de vendas online." },
        { type: "heading", text: "Coleta de Informações Pessoais" },
        { type: "paragraph", text: "Ao visitar nosso site e realizar compras, podemos coletar informações pessoais que você voluntariamente fornece, como nome, endereço de e-mail, número de telefone, endereço de entrega e informações de pagamento. Essas informações são necessárias para processar seus pedidos e garantir a entrega adequada dos produtos." },
        { type: "heading", text: "Uso das Informações Pessoais" },
        { type: "paragraph", text: "As informações pessoais coletadas são utilizadas exclusivamente para processar seus pedidos, fornecer suporte ao cliente, melhorar nossos serviços e personalizar sua experiência no Eai Chefinho. Além disso, podemos utilizar suas informações para enviar comunicações promocionais relacionadas aos nossos produtos e ofertas especiais, desde que você tenha consentido previamente em receber tais comunicações." },
        { type: "heading", text: "Divulgação de Informações" },
        { type: "paragraph", text: "Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar suas compras, fornecer serviços relacionados ou cumprir obrigações legais. Em circunstâncias limitadas, podemos compartilhar informações com fornecedores confiáveis ​​que nos auxiliam na operação do site ou na prestação de serviços aos nossos clientes. No entanto, esses fornecedores são contratualmente obrigados a manter a confidencialidade das informações fornecidas e são proibidos de utilizá-las para qualquer finalidade além da prestação dos serviços acordados." },
        { type: "heading", text: "Segurança de Dados" },
        { type: "paragraph", text: "Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, uso indevido, alteração ou destruição. Utilizamos métodos de criptografia para proteger as informações transmitidas durante o processo de pagamento e seguimos as melhores práticas da indústria para garantir a segurança dos dados." },
        { type: "heading", text: "Cookies" },
        { type: "paragraph", text: "Podemos utilizar cookies e tecnologias similares para melhorar a sua experiência no nosso site, personalizar o conteúdo exibido e facilitar o processo de compra. Esses cookies não contêm informações pessoais identificáveis ​​e você pode optar por desativá-los no seu navegador, mas isso pode afetar o funcionamento adequado do site." },
        { type: "heading", text: "Links Externos" },
        { type: "paragraph", text: "Nosso site pode conter links para sites de terceiros. Observe que não somos responsáveis ​​pelas práticas de privacidade desses sites. Recomendamos que você revise as políticas de privacidade deles antes de fornecer qualquer informação pessoal." },
        { type: "heading", text: "Alterações na Política de Privacidade" },
        { type: "paragraph", text: "Podemos atualizar nossa Política de Privacidade periodicamente para refletir mudanças em nossas práticas de informações. Recomendamos que você revise esta política regularmente para estar ciente de quaisquer atualizações." },
        { type: "paragraph", text: "Ao utilizar o Eai Chefinho, você concorda com a coleta e uso das suas informações pessoais de acordo com esta Política de Privacidade. Se você tiver alguma dúvida sobre nossa política ou sobre o tratamento dos seus dados, entre em contato conosco através dos canais disponíveis em nosso site." },
        { type: "paragraph", text: "Última atualização desta Política de Privacidade: 8 de junho de 2023." }
      ]
  },
];

const PolicyComponent = ({ policy }) => {
  const IconComponent = Icons[policy.icon]; // Get the icon component based on the 'icon' property

  return (
    <div>
      {IconComponent && <IconComponent />} {/* Render the icon component */}
      <h2>{policy.title}</h2>
      {policy.content.map((item, index) => {
        if (item.type === "paragraph") {
          return <p key={index}>{item.text}</p>;
        } else if (item.type === "heading") {
          return <h3 key={index}>{item.text}</h3>;
        }
        return null;
      })}
    </div>
  );
};

const PoliciesComponent = () => {
  return (
    <div>
      {Policies.map((policy, index) => (
        <PolicyComponent key={index} policy={policy} />
      ))}
    </div>
  );
};

export default PoliciesComponent;
