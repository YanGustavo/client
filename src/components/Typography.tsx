import styled from 'styled-components';
import theme from 'styles/styled-components/theme';

type TypographyProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  fontStyle?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
};
interface HrProps {
  primary?: boolean;
  secondary?: boolean;
  hasChildren?: boolean; // Adicione essa propriedade como opcional
}
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
const Hr = styled.div<HrProps>`
  text-align: center;

  h1 {
    position: relative;
    display: inline-block;
   // color: ${(props) => (props.primary ? props.theme.colors.primary_button_text_color : props.theme.colors.accent_color)};
  }

  h1::before,
  h1::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -120px;
    width: 100px;
    border-bottom: 1px solid ${(props) => (props.primary ? props.theme.colors.primary_button_text_color : props.theme.colors.accent_color)};
  }

  h1::after {
    left: auto;
    right: -120px;
  }

  /* p {
    color: ${(props) => (props.primary ? props.theme.colors.primary_button_text_color : props.theme.colors.accent_color)};
  }

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.colors.accent_color};
  } */
  /* Estilos do seu componente */

  /* Adicione a propriedade display para controlar a exibição do hr */
  /* hr {
    display: ${(props) => (props.hasChildren ? 'none' : 'block')};
    /* Adicione os estilos da linha horizontal /
    border: 0;
    border-top: 1px solid ${(props) =>
      props.primary
        ? props.theme.colors.primary_button_text_color
        : props.theme.colors.secondary_button_text_color};
    margin: 20px 0;
  } */
`;
export {  H1, H2, H3, H4, P, Hr};