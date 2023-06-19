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
  color: ${(props) => props.color || theme.colors.accent_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.huge};
  font-weight: ${(props) => props.fontWeight || 700};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H2 = styled.h2<TypographyProps>`
  color: ${(props) => props.color || theme.colors.accent_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.xxxlarge};
  font-weight: ${(props) => props.fontWeight || 600};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H3 = styled.h3<TypographyProps>`
  color: ${(props) => props.color || theme.colors.accent_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.xxlarge};
  font-weight: ${(props) => props.fontWeight || 500};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H4 = styled.h4<TypographyProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || theme.font.sizes.xlarge};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const H5 = styled.h6<TypographyProps>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || theme.font.sizes.large};
  font-weight: ${(props) => props.fontWeight || 300};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const H6 = styled.h6<TypographyProps>`
  color: ${(props) => props.color || theme.colors.accent_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.large};
  font-weight: ${(props) => props.fontWeight || 200};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const Strong = styled.strong<TypographyProps>`
  color: ${(props) => props.color || theme.colors.accent_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.medium};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const P = styled.p<TypographyProps>`
  color: ${(props) => props.color || theme.colors.header_text_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.small};
  font-weight: ${(props) => props.fontWeight || 300};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const Span = styled.span<TypographyProps>`
  /* Styles for the <span> tag */
  color: ${(props) => props.color || theme.colors.header_text_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.xsmall};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const I = styled.i<TypographyProps>`
  /* Styles for the <i> tag */
  color: ${(props) => props.color || theme.colors.header_text_color};
  font-size: ${(props) => props.fontSize || theme.font.sizes.xxsmall};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
  ${this} .MuiSvgIcon-root {
   font-size: 1rem !important;
  }
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




export { H1, H2, H3, H4, H5, H6, P, Hr,Span, I};