import React from 'react';
import styled from 'styled-components';

const FeatureSection = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 20%;
  margin-right: 2rem;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

interface FeatureProps {
  title: string;
  imageUrl: string;
  children?: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, imageUrl, children }) => {
  return (
    <FeatureSection>
      <Title>{title}</Title>
      <ContentWrapper>
        <Image src={imageUrl} />
        <div>{children}</div>
      </ContentWrapper>
    </FeatureSection>
  );
};

export default Feature;