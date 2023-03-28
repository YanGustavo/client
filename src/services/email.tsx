import React from 'react';
import nodemailer from 'nodemailer';

type EmailProps = {
  html: string;
  to: string;
};

const Email: React.FC<EmailProps> = ({ html, to }) => {
  const sendEmail = async () => {
    // Configuração do serviço de email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha',
      },
    });

    // Configuração do email a ser enviado
    const mailOptions = {
      from: 'seuemail@gmail.com',
      to,
      subject: 'Assunto do email',
      html,
    };

    try {
      // Envia o email
      await transporter.sendMail(mailOptions);
      console.log('Email enviado com sucesso!');
    } catch (err) {
      console.error('Erro ao enviar o email:', err);
    }
  };

  return (
    <button onClick={sendEmail}>
      Enviar email
    </button>
  );
};

export default Email;