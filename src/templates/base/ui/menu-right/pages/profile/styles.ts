import styled from 'styled-components';


import theme from 'styles/styled-components/theme';



const MenuTrigger = styled.div`
@keyframes toggleMenuAnimation {
	0% { opacity: 0; transform: translateY(-2px); color: white;  }
  25% { opacity: 0; transform: translateY(-2px); color: green;  }
	50% { opacity: 1; transform: translateY(0); color: white;}
	100% { opacity: 0; transform: translateY(2px); color: white;}
}
      width: 2rem;
			height: 2rem;
			position: absolute;
      top: 5px;
			left:0;
      border-radius: 0 25% 25% 0;
      z-index: 101;
			background: ${theme.colors.footer_background_color};	
      display: flex;
      align-items: center;
      align-content: center;
      cursor: pointer;
      ${this} .MuiSvgIcon-root {
        animation: toggleMenuAnimation 1.5s infinite; 
        font-size: 2rem;
        color: ${theme.colors.secondary_button_text_color};
			}
      ${this}:hover {
      width: 2.5rem;
			height: 2.5rem;
        ${this} .MuiSvgIcon-root {
        font-size: 2.5rem;
			}
			}
      &.active{ 
        width: 1.5rem;
			height: 1.5rem;
      left: 100px;
      ${this} .MuiSvgIcon-root {
        font-size: 1.5rem;
			}     
      ${this}:hover {
      width: 2.5rem;
			height: 2.5rem;
        ${this} .MuiSvgIcon-root {
        font-size: 2.5rem;
			}
			}
      }
			
`;
const Nav = styled.nav`
background: ${theme.colors.footer_background_color};
	height: 100%;
	width: 100px;
	position: absolute;
	top: 0;
	left: 0;
	outline: none;
  z-index: 100;
  transform: translateX(-100px);
  display: none;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &.active{
    transform: translateX(0); 
    display: block; 
  }
  
`;
const Avatar = styled.header`
	  //background: rgba(0,0,0,0.1);		
		text-align: center;
		
		${this} img {
      margin-top: 15px;
      margin-left: 10%;
      margin-bottom: 15px;
			width: 80%;
			border-radius: 50%;
			overflow: hidden;
			border: 4px solid ${theme.colors.secondary_button_background};
			box-shadow: 0 0 0 4px rgba(255,255,255,0.2);
		}
    ${this} img:hover {
      border: 4px solid ${theme.colors.background_light};
			box-shadow: 0 0 0 5px rgba(0,255,255,0.2);
    }
		
		${this} h2{
			font-weight: normal;
			margin-bottom: 0;
      font-size: 0.9rem;
      color: ${theme.colors.secondary_button_text_color};
		}
`;
const Ul = styled.ul`
		list-style: none;
		padding: 0.5em 0;
		margin: 0;
		
		${this} li {
			padding: 0.2rem;
			font-size: 0.7rem;
			font-weight: regular;
			background-repeat: no-repeat;
			background-position: left 15px center;
			background-size: auto 20px;
			transition: all 0.15s linear;
			cursor: pointer;
      color: ${theme.colors.secondary_button_text_color};
      
			${this} li:hover {
        background-color: rgba(0,0,0,0.3);
      }
      ${this} li.MuiSvgIcon-root {
				opacity: 0.8;
			}
			${this} li:hover .MuiSvgIcon-root {
        font-size: 1rem;
				opacity: 1;
			}
			
			${this} li:focus .MuiSvgIcon-root {
				outline:none;
			}
			
		}
`;
const Main = styled.main`
  position: relative;
	height: 100%;
`;



export { Nav, MenuTrigger, Avatar, Ul, Main,};