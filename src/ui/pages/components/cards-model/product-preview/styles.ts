import styled from 'styled-components';
import theme from 'styles/styled-components/theme';

const Body = styled.div`
  width: 300px;
  height: 500px;
  background: white;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  ${this}:hover{
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);
  }
  ${this} .bottom.clicked{
        transform: translateX(-50%);
      }
  
`;
const ContainerPreview = styled.div`
 width:100%;
    height:100%;
`;
const Top = styled.div`
height: 80%;
      width:100%;
      //background: url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg) no-repeat center center; 
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  position: relative;
  ${this} img {
    width: 100%;
    height: 100%;
  }
`;
const Bottom = styled.div`
      width: 200%;
      height: 20%;
      transition: transform 0.5s;     
      
`;
const Left = styled.div`
        height:100%;
        width: 50%;
        background: ${theme.colors.text_color};
        position: relative;
        float: left;        
`;
const Details = styled.div`
         padding: 0.5rem 0.2rem 0.5rem 0.2rem;
          float: left;
          width: calc(80% - 40px);
          height: 100%;
          color: ${theme.colors.secondary_button_text_color};
          position: relative;
          ${this} h1{
            font-size: 1.2rem;

          margin:0;
          padding:0;
      }
      ${this} p {
        position: absolute;
        bottom: 0.55rem;
        right: 0.5rem;
            font-size: 1rem;
          margin:0;
          padding:0;
          float: right;
      }
`;
const BuyButton = styled.div`
        float: right;
          width: calc(30% - 2px);
          height: 100%;
          background: ${theme.colors.footer_accent_color};
          transition: background 0.5s;
          border-left: solid thin ${theme.colors.link_color_hover};;
          display: flex;
          align-items: center;
          align-content: center;
           ${this}:hover{
            background: ${theme.colors.success_color};
          }
          ${this} i{
            font-size:30px;
            padding:30px;
            color:  ${theme.colors.secondary_button_text_color};
            transition: transform 0.5s;
          }
         
          ${this}:hover i{
            transform: translateY(-5px) scale(1.5);
          }
`;

const RightDetails = styled.div`
 padding: 20px;
float: right;
   width: calc(70% - 40px);
   ${this} h1{
    font-size: 1.2rem;
          margin:0;
          padding:0;
      }
      ${this} p{
        font-size: 0.7rem;
          margin:0;
          padding:0;
      }
`;
const Done = styled.div`
width: calc(30% - 2px);
          float: left;
          transition: transform 0.5s;
          border-right: solid thin ${theme.colors.header_border_color};
          height:50%;
          display: flex;
          align-items: center;
          align-content: center;
          ${this} i{
            transform: translateY(-5px) scale(1.5);
            font-size:30px;
            padding:30px;
            color: white;
          }
`;

const Remove = styled.div`
  width: calc(30% - 1px);
          clear: both;
          border-right: solid thin ${theme.colors.header_border_color};
          height: 50%;
          background: ${theme.colors.tertiary_button_background};
          transition: transform 0.5s, background 0.5s;
          display: flex;
          align-items: center;
          align-content: center;
          ${this}:hover{
            background: ${theme.colors.tertiary_button_background};
          }
          ${this} i{
            transition: transform 0.5s;
            font-size:30px;
            padding:30px;
            color: white;
          }
          ${this}:hover i{
            transform: translateY(-5px) scale(1.5);
          }
          
`;

const Right = styled.div`
        width: 50%;
        background: ${theme.colors.success_color};
        color: white;
        float: right;
        height:200%;
        overflow: hidden;
        
        ${this}:hover{
            ${Remove}, ${Done}{
            transform: translateY(-100%);
          }
        }
`;


const Icon = styled.div`
position: absolute;
      right:85px;
      top:85px;
      color: white;
      opacity: 1;
`;
const Contents = styled.div`
padding: 5%;      
      transform: scale(0.5);
      transform: translateY(-200%);
      transition: opacity 0.2s, transform 0.8s;
      opacity: 0;
      ${this} table{
        text-align: left;
        width:100%;
        opacity: 0;
      }
`;
const Inside = styled.div`
    z-index: 9;
    background-color: ${theme.colors.background_light};
    background: ${theme.colors.background_light_radial};
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
    
    ${this}:hover{
     background: ${theme.colors.background_light};
      width:100%;
      right:0;
      top:0;
      border-radius: 0;
      height:80%;
      ${Icon} {
        opacity: 0;
        right:15px;
        top:15px;
      }
      ${Contents} {
        opacity: 1;
        transform: scale(1);
        transform: translateY(0);        
      }
      ${Contents} table{
        opacity: 1;
      }
      ${Contents}  h1, ${Contents} p, ${Contents} table{
        color: white;
      }
      ${Contents}  h1{
        font-size: 1.2rem;
      }
      ${Contents}  p{
        font-size: 0.8rem
      }
    }    
`;
export {Body,  ContainerPreview, Top, Bottom, Left, Details, BuyButton, Right, RightDetails, Done, Remove, Icon, Contents, Inside,};