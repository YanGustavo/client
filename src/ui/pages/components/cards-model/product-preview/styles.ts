import styled from 'styled-components';
import theme from 'styles/styled-components/theme';
export const ProductCard = styled.div`
 background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) 
`;
export const CardBody = styled.div`
margin: 10px 15px 0;
`;
export const Title = styled.div`
font-family: 'Judson', serif;
    font-weight: bolder;
    line-height: 100%;
`;
export const CardTag = styled.div`
margin: 5px 0 10px;
    font-family: 'Anonymous Pro', monospace;
    color: grey;
`;
export const CardText = styled.div`
margin: 12px 0;
    font-family: 'Noto Sans', sans-serif;
    font-size: 13px;
    color: grey;
`;
export const NewPrice = styled.div`
display: inline;
    font-family: 'Abril Fatface', cursive;
    color: #2e8c57;
`;
export const OldPrice = styled.div`
display: inline;
    margin: 0 15px;
    font-size: small;
    vertical-align: 30%;
    color: gray;
    text-decoration: line-through;
`;
export const AddToCartButton = styled.div`
margin: 10px 0 0;
    color: white;
    background-color: #2e8c57;
    width: 100%;
${this}:hover {
  color: white;
    background-color: #08542d;
}
`;
export const Button = styled.div`
${this} i {
  display: inline;
    margin: 0 10px 0;
}
${this} p {
  display: inline;
    font-size: 90%;
    font-weight:bold; 
}
`;
export const Attribution = styled.div`
position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
`;
export const Desktop = styled.div`
@media(max-width: 550px){   
  ${this}{
        display: none;
    }
}
`;
export const Mobile = styled.div`
display: none;
@media(max-width: 550px){   
  ${this}{
        display: block;
    }
}
`;