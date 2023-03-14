import styled from 'styled-components';
import { color, space, fontSize, buttonStyle, variant } from 'styled-system';


const Button = styled.button`
   border: 0;
   outline: 0;
   ${color}
   ${space}
   ${fontSize}
   ${buttonStyle}   
   padding: 0.02em 0.1em;
   border: 1px solid ${props => props.theme.colors.heading_color};
   border-radius: 3px;
   transition: all 0.5s ease;
   cursor: pointer;
   ${this}:hover{
    opacity: 0.8;
   }
 `
  /* prettier-ignore */
//  Button.defaultProps = {
//   variant: 'primary',
//   backgroundColor: '#2d4b2a',
//   size: 'medium',
// }
export default Button;

