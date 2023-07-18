import styled from 'styled-components';

const Button = styled.button`
border: none;
background: none;

${this} .MuiSvgIcon-root{
font-size: 24px;
color: ${(props) => props.theme.desing.colors.link.default};
cursor: pointer;
transition:.5s;
 &:hover{
 color: ${(props) => props.theme.desing.colors.link.hover};
 transform: rotate(22deg)
}}
`;

const ImageAvatar = styled.div`
 width: 115px;
  height: 115px;
  position: absolute;
  border-radius: 50%;
  border: 6px solid white;
  background-image: linear-gradient(-60deg, ${(props) => props.theme.desing.colors.header.background} 0%, ${(props) => props.theme.desing.buttons.secondary.backgroundColor} 100%);
  top: 15px;
  left: 35px;
  ${this} svg {
  width: 120px;
  height: 120px;
  margin: 0 auto;
}
  ${this} path {
  fill: white;
}
`;

const TitleTotal = styled.div`
  padding: 2.5em 1.5em 1.5em 1.5em;
`;
const Portada = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: url("https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg");
  background-position: bottom center;
  background-size: cover;
`;
const CardText = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
const ImagePortada = styled.img`
width: 100%;
`;
const Description = styled.div`
  padding: 0.5rem 1rem;
  font-size: 12px;
`;
const H2 = styled.h2`
 margin: 0;
  padding: 0 1rem;
`;
const Title = styled.h1`
 padding: 1rem;
  text-align: right;
  color: green;
  font-weight: bold;
  font-size: 12px;
`;
const Action = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 0.5rem 1rem;
`;
const Card = styled.section`
background: ${(props) => props.theme.desing.colors.header.textColor};
  border-radius: 4px;
  box-shadow: 0px 14px 0.2rem rgba(34, 35, 58, 0.5);
  max-width: 400px;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  position: relative;
  width: 90%;
  margin-left: 5%; 
`;
export {Card, ImageAvatar, CardText, Portada, ImagePortada, Title, H2, Description, Action, TitleTotal, Button,};