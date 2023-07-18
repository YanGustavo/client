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
interface HrProps {
  primary?: boolean;
  secondary?: boolean;
  hasChildren?: boolean;
}
const H1 = styled.h1<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.huge};
  font-weight: ${(props) => props.fontWeight || 700};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H2 = styled.h2<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.xxxlarge};
  font-weight: ${(props) => props.fontWeight || 600};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H3 = styled.h3<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.xxlarge};
  font-weight: ${(props) => props.fontWeight || 500};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const H4 = styled.h4<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.xlarge};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const H5 = styled.h6<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.large};
  font-weight: ${(props) => props.fontWeight || 300};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const H6 = styled.h6<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.large};
  font-weight: ${(props) => props.fontWeight || 200};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const Strong = styled.strong<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.medium};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;

const P = styled.p<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.small};
  font-weight: ${(props) => props.fontWeight || 300};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const Span = styled.span<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.xsmall};
  font-weight: ${(props) => props.fontWeight || 400};
  font-style: ${(props) => props.fontStyle || 'normal'};
  text-align: ${(props) => props.textAlign || 'left'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  text-transform: ${(props) => props.textTransform || 'none'};
`;
const I = styled.i<TypographyProps>`
  color: ${(props) => props.theme.desing.colors.heading};
  font-size: ${(props) => props.theme.desing.font.sizes.xxsmall};
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
}

  h1::before,
  h1::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -120px;
    width: 100px;
    border-bottom: 1px solid ${(props) => (props.primary ? props.theme.desing.border.color : props.theme.desing.border.color)};
  }

  h1::after {
    left: auto;
    right: -120px;
  }
`;
export { H1, H2, H3, H4, H5, H6, P, Hr,Span, I};