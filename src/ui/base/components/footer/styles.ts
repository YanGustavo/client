import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const FooterStyle = styled.footer`
    background-color: #2d5734;
    margin-top: 1rem;    

.container-footer{
    max-width: 1400px;
    min-width: 300px;
    padding-top: 0.4rem;
    margin: auto;
}
.row-footer{
    display: flex;
    flex-wrap: wrap;
}

.footer-col{
    width: 33.33%;
    padding: 0 15px;
}
.footer-col h4{
    font-size: 0.8rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 500;
    position: relative;
    text-transform: uppercase;
}
.footer-col ul{
    list-style: none;
}
.footer-col ul li{
    margin: 0.4rem 0;
}
.footer-col ul li a{
    font-size: 0.8rem;
    color: white;
    text-decoration: none;
    font-weight: 300;
    display: block;
    transition: ease-in-out 0.3s;
}
.footer-col ul li a:hover{
    color: #00aa00;
    padding-left: 4rem;
}
.footer-col ul li p {
    font-size: 0.8rem;
    color: white;
    display: block;
}
.footer-col ul li p strong {
    font-size: 0.8rem;
    color: white;
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
}
@media (max-width:541px) {
    .footer-col{
        width: 100%;
    }
}
@media (max-width: 950px) {
    .footer-col{
        width: 50%;
        margin-bottom: 30px;
    }
}
@media screen and (min-width: 1232px) {
    .footer-col ul li p{
    display: flex;
    align-items: baseline;
  }
}
@media screen and (min-width: 1400px) {
  
}
@media screen and (min-width: 1600px) {
  
}
`;
