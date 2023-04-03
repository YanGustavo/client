import styled from 'styled-components';

type TypographyProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  fontStyle?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
};
const H1 = styled.h1<TypographyProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-weight: ${(props) => props.fontWeight || 700};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H2 = styled.h2<TypographyProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '1.2rem'};
  font-weight: ${(props) => props.fontWeight || 700};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H3 = styled.h3<TypographyProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 700};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H4 = styled.h4<TypographyProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '0.9rem'};
  font-weight: ${(props) => props.fontWeight || 700};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const P = styled.p<TypographyProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
export {  H1, H2, H3, H4, P};