import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

const Search = styled.a`
  /*padding: 29px 20px 30px 10px;*/
  padding: 10px 10px 15px 10px;
  clear: both; 

${this} .MuiSvgIcon-root {
  margin: 0;
  display: inline-block;
  font-size: 18px;  
}
${this} input {
  border: 1px solid #EEE;
  padding: 10px;
  background: #FFF;
  outline: none;
  color: #777;
  
  /* == */
  width:170px;
  float: left;
  /* == */
}
${this} button {
  border: 1px solid #e67e22;
  /*padding: 10px;*/
  background: #e67e22;
  outline: none;
  color: #FFF;
  margin-left: -4px;  
  /* == */
  float: left;
  padding: 10px 10px 11px 10px;
  /* == */
}
${this} input:focus {
  border: 1px solid #e67e22;
}
@media only screen and (min-width: 768px) and (max-width: 959px) {
${this} input {
  width: 120px;
  font-size: 12px;
}
${this} button{
  padding: 8px 10px 9px 10px;
}
}
@media only screen and (min-width: 480px) and (max-width: 767px) {
${this}{ 
  display: none;
}
}
@media only screen and (max-width: 479px) {
  ${this} { 
  display: none;
}
}
`;
const SearchMobile = styled.a`
	display: none !important;
	background: #e67e22;
	border-left: 1px solid #e67e22;
	border-radius: 0 3px 3px 0;
  ${this} .MuiSvgIcon-root { 
	color: #FFF; 
	margin: 0 !important;
}
`;
const A = styled.a`
  display: block;
  text-decoration: none;
  padding: 12px 20px;
  color: #777;
  /*text-align: center;
  border-right: 1px solid #E7E7E7;*/
  
  /* == */
  text-align: left;
  height: 36px;
  position: relative;
  border-bottom: 1px solid #EEE;
  /* == */

${this} .MuiSvgIcon-root {//.MuiSvgIcon-root
  /*display: block;
  font-size: 30px;
  margin-bottom: 10px;*/
  
  /* == */
  float: left;
  font-size: 20px;
  margin: 0 10px 0 0;
  /* == */
  
}
/* == */
${this} p {
  float: left;
  margin: 0 ;
}
/* == */

${this} strong {
  display: block;
  text-transform: uppercase;
}
${this} small {
  display: block;
  font-size: 10px;
}

${this} .MuiSvgIcon-root, ${this} strong, ${this} small {
  position: relative;  
  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
}
&.active {
  position: relative;
  color: #e67e22;
  border:0;
  /*border-top: 4px solid #e67e22;
  border-bottom: 4px solid #e67e22;
  margin-top: -4px;*/
  box-shadow: 0 0 5px #DDD;
  -moz-box-shadow: 0 0 5px #DDD;
  -webkit-box-shadow: 0 0 5px #DDD;
  
  /* == */
  border-left: 4px solid #e67e22;
  border-right: 4px solid #e67e22;
  margin: 0 -4px;
  /* == */
}
&.active:before {
  content: "";
  position: absolute;
  /*top: 0;
  left: 45%;
  border-top: 5px solid #e67e22;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/
  
  /* == */
  top: 42%;
  left: 0;
  border-left: 5px solid #e67e22;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  /* == */
}

/* == */
&.active:after {
  content: "";
  position: absolute;
  top: 42%;
  right: 0;
  border-right: 5px solid #e67e22;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
/*${this} li.float {
  float: right;
}*/

@media only screen and (min-width: 768px) and (max-width: 959px) {
	${this}  {
		height:30px;
  }
  ${this} strong {
		font-size: 12px;
	}
	${this} small {
		font-size: 10px;
		}
	${this} .MuiSvgIcon-root{
		font-size: 22px;
	}

}

@media only screen and (min-width: 480px) and (max-width: 767px) {
	${this} { 
		position: relative;
		padding: 12px 16px;
		height:20px;  	
	}
  ${this} small { 
		display: none;
    }
  ${this} strong { 
		display: none;
	}
	${this}:hover strong, ${this} &.active strong {
		display: block;
		font-size:10px;
		padding:3px 0;
		position: absolute;
		bottom:0px;
		left:0;
		background:#e67e22;
		color:#FFF;
		min-width:100%;
		text-transform: lowercase;
		font-weight: normal;
		text-align: center;
	}	
}

@media only screen and (max-width: 479px) {
	${this} { 
		position: relative;
		padding: 12px 16px;
	}  
  ${this} small { 
		display: none;
	}
	${this} strong { 
		display: none;
	}
	${this}:hover strong, ${this} &.active strong {
		display:block;
		font-size:10px;
		padding:3px 0;
		position:absolute;
		bottom:0px;
		left:0;
		background:#e67e22;
		color:#FFF;
		min-width:100%;
		text-transform:lowercase;
		font-weight:normal;
		text-align:center;
    
	}    
}
`;
const Li = styled.li`
@keyframes moveFromTop {
    from {
        opacity: 0;
        -webkit-transform: translateY(200%);
        -moz-transform: translateY(200%);
        -ms-transform: translateY(200%);
        -o-transform: translateY(200%);
        transform: translateY(200%);
    }
    to {
        opacity: 1;
        -webkit-transform: translateY(0%);
        -moz-transform: translateY(0%);
        -ms-transform: translateY(0%);
        -o-transform: translateY(0%);
        transform: translateY(0%);
    }
}
@keyframes moveFromLeft {
    from {
        opacity: 0;
        -webkit-transform: translateX(200%);
        -moz-transform: translateX(200%);
        -ms-transform: translateX(200%);
        -o-transform: translateX(200%);
        transform: translateX(200%);
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -ms-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%);
    }
}
@keyframes moveFromRight {
    from {
        opacity: 0;
        -webkit-transform: translateX(-200%);
        -moz-transform: translateX(-200%);
        -ms-transform: translateX(-200%);
        -o-transform: translateX(-200%);
        transform: translateX(-200%);
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -ms-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%);
    }
}
    position: relative;
  /*float:left;*/
  ${this}:hover ${A} .MuiSvgIcon-root {
    opacity: 1;
    -webkit-animation: moveFromTop 300ms ease-in-out;
    -moz-animation: moveFromTop 300ms ease-in-out;
    -ms-animation: moveFromTop 300ms ease-in-out;
    -o-animation: moveFromTop 300ms ease-in-out;
    animation: moveFromTop 300ms ease-in-out;
}
${this}:hover ${A}  strong {
    opacity: 1;
    -webkit-animation: moveFromLeft 300ms ease-in-out;
    -moz-animation: moveFromLeft 300ms ease-in-out;
    -ms-animation: moveFromLeft 300ms ease-in-out;
    -o-animation: moveFromLeft 300ms ease-in-out;
    animation: moveFromLeft 300ms ease-in-out;
}
${this}:hover ${A}  small {
    opacity: 1;
    -webkit-animation: moveFromRight 300ms ease-in-out;
    -moz-animation: moveFromRight 300ms ease-in-out;
    -ms-animation: moveFromRight 300ms ease-in-out;
    -o-animation: moveFromRight 300ms ease-in-out;
    animation: moveFromRight 300ms ease-in-out;
}
${this}:hover ${A} {//.MuiSvgIcon-root 
  color: #e67e22;
}

`;

const Ul = styled.ul`
 list-style: none;
  padding: 0;
  margin: 0;
  background: #FFF;
  /*height: 100px;*/
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  
  /* == */
  width: 250px;
  /* == */
  
 

/* == */
${this} li ul,
${this} li ul li ul {
  position: absolute;
  height: auto;
  min-width: 200px;
  padding: 0;
  margin: 0;
  background: #FFF;
  /*border-top: 4px solid #e67e22;*/
  opacity: 0;
  visibility: hidden;
  transition: all 300ms linear;
  -o-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
  /*top: 130px;*/
  z-index: 1000;
  
  /* == */
  left:280px;
  top: 0px;
  border-left: 4px solid #e67e22;
  /* == */
}
${this} li ul:before {
  content: "";
  position: absolute;
  /*top: -8px;
  left: 23%;
  border-bottom: 5px solid #e67e22;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;*/
  
  /* == */
  top: 25px;
  left: -9px;
  border-right: 5px solid #e67e22;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  /* == */
}
${this} li:hover > ul,
${this} li ul li:hover > ul {
  display: block;
  opacity: 1;
  visibility: visible;
  /*top: 100px;*/
  
  /* == */
  left:250px;
  /* == */
}
/*${this} li ul li {
  float: none;
}*/
${this} li ul li a {
  padding: 10px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid #EEE;
  
  /* == */
  height: auto;
  /* == */
}
${this} li ul li a i {
  font-size: 16px;
  display: inline-block;
  margin: 0 10px 0 0;
}
${this} li ul li ul {
  left: 230px;
  top: 0;
  border: 0;
  border-left: 4px solid #e67e22;
}  
${this} li ul li ul:before {
  content: "";
  position: absolute;
  top: 15px;
  /*left: -14px;*/
  /* == */
  left: -9px;
  /* == */
  border-right: 5px solid #e67e22;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
}
${this} li ul li:hover > ul {
  top: 0px;
  left: 200px;
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
    ${this} {
		margin-left:10px;
	}
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
    ${this} {
		width: 200px;
    ${this} li > ul {
		min-width:180px;
	}
	${this} li:hover > ul {
		min-width:180px;
		left:200px;
	}
	${this} li ul li > ul, ${this} li ul li ul li > ul {
		min-width:150px;
	}
	${this} li ul li:hover > ul {
		left:180px;
		min-width:150px;
	}
	${this} li ul li ul li:hover > ul {
		left:150px;
		min-width:150px;
	}
	${this} li ul a {
		font-size:12px;
	}
	${this} li ul a .MuiSvgIcon-root {
		font-size:14px;
	}
	}
	
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
	
	${this} { 
		width: 50px;
	}
	${this} li a { 
		position: relative;
		padding: 12px 16px;
		height:20px;
	}
	${this} li a small { 
		display: none;
	}
	${this} li a strong { 
		display: none;
	}
	${this} li a:hover strong,${this} li a.active strong {
		display:block;
		font-size:10px;
		padding:3px 0;
		position:absolute;
		bottom:0px;
		left:0;
		background:#e67e22;
		color:#FFF;
		min-width:100%;
		text-transform:lowercase;
		font-weight:normal;
		text-align:center;
	}
	${this} li .search { 
		display: none;
	}
	
	${this} li > ul {
		min-width:180px;
		left:70px;
	}
	${this} li:hover > ul {
		min-width:180px;
		left:50px;
	}
	${this} li ul li > ul, ${this} li ul li ul li > ul {
		min-width:150px;
	}
	${this} li ul li:hover > ul {
		left:180px;
		min-width:150px;
	}
	${this} li ul li ul li > ul {
		left:35px;
		top: 45px;
		border:0;
		border-top:4px solid #e67e22;
	}
	${this} li ul li ul li > ul:before {
		left:30px;
		top: -9px;
		border:0;
		border-bottom:5px solid #e67e22;
		border-left:5px solid transparent;
		border-right:5px solid transparent;
	}
	${this} li ul li ul li:hover > ul {
		left:30px;
		min-width:150px;
		top: 35px;
	}
	${this} li ul a {
		font-size:12px;
	}
	${this} li ul a .MuiSvgIcon-root {
		font-size:14px;
	}
	
}

@media only screen and (max-width: 479px) {
    ${this} { 
		width: 50px;
	}
	${this} li a { 
		position: relative;
		padding: 12px 16px;
		height:20px;
	}
	${this} li a small { 
		display: none;
	}
	${this} li a strong { 
		display: none;
	}
	${this} li a:hover strong, ${this} li a.active strong {
		display:block;
		font-size:10px;
		padding:3px 0;
		position:absolute;
		bottom:0px;
		left:0;
		background:#e67e22;
		color:#FFF;
		min-width:100%;
		text-transform:lowercase;
		font-weight:normal;
		text-align:center;
    
	}
	${this} li .search { 
		display: none;
	}
	
	${this} li > ul {
		min-width:180px;
		left:70px;
	}
	${this} li:hover > ul {
		min-width:180px;
		left:50px;
	}
	${this} li ul li > ul, ${this} li ul li ul li > ul {
		min-width:150px;
	}
	${this} li ul li:hover > ul {
		left:180px;
		min-width:150px;
	}
	${this} li ul li ul li > ul {
		left:35px;
		top: 45px;
		border:0;
		border-top:4px solid #e67e22;
	}
	${this} li ul li ul li > ul:before {
		left:30px;
		top: -9px;
		border:0;
		border-bottom:5px solid #e67e22;
		border-left:5px solid transparent;
		border-right:5px solid transparent;
	}
	${this} li ul li ul li:hover > ul {
		left:30px;
		min-width:150px;
		top: 35px;
	}
	${this} li ul a {
		font-size:12px;
	}
	${this} li ul a .MuiSvgIcon-root {
		font-size:14px;
	}
    
}

`;

export {Ul, Li, A, Search, SearchMobile};