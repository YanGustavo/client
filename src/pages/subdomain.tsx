'use client'
import React from 'react';
import styled from 'styled-components';

// Função para obter o subdomínio da URL
const getSubdomain = () => {
  if (typeof window !== 'undefined') {
    const parts = window.location.hostname.split('.');
    return parts.length >= 3 ? parts[0] : 'eaichefinho';
  }
  return 'eaichefinho';
};

// Componente estilizado
const SubdomainText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const SubDomain = () => {
  // Obtem o subdomínio da URL
  const subdomain = getSubdomain();

  return (
    <div>
      <SubdomainText>Subdomínio: {subdomain}</SubdomainText>
      {/* Outros componentes e conteúdos */}
    </div>
  );
};

export default SubDomain;


