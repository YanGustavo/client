import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const CreditCardStyle = styled.div`
.card,  
 .card__chip {  
      overflow: hidden;  
      position: relative;  
 }  
 .card,  
 .card__chip-texture,  
 .card__texture {  
      animation-duration: 3s;  
      animation-timing-function: ease-in-out;  
      animation-iteration-count: infinite;  
 }  
 .card {  
      animation-name: rotate;  
      background-color: ${theme.colors.heading_color};
      background-image:  
           radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.08) 29.5%,hsla(0,0%,100%,0) 30%),  
           radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.08) 39.5%,hsla(0,0%,100%,0) 40%),  
           radial-gradient(circle at 100% 0%,hsla(0,0%,100%,0.08) 49.5%,hsla(0,0%,100%,0) 50%);  
      border-radius: 0.5em;  
      box-shadow:  
           0 0 0 hsl(0,0%,80%),  
           0 0 0 hsl(0,0%,100%),  
           -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);  
      color: hsl(0,0%,100%);  
      width: 14.3em;  // 10.3em;  
      height: 8.8em; // 6.8em;  
      transform: translate3d(0,0,0);  
      margin-left: 10px;
 }  
 .card__info,  
 .card__chip-texture,  
 .card__texture {  
      position: absolute;  
 }  
 .card__chip-texture,  
 .card__texture {  
      animation-name: texture;  
      top: 0;  
      left: 0;  
      width: 200%;  
      height: 100%;  
 }  
 .card__info {  
      font: 0.75em/1 "DM Sans", sans-serif;  
      display: flex;  
      align-items: center;  
      flex-wrap: wrap;  
      padding: 0.75rem;  
      inset: 0;  
 }  
 .card__logo,  
 .card__number {  
      width: 100%;  
 }  
 .card__logo {  
      font-weight: bold;  
      font-style: italic;  
 }  
 .card__chip {  
      background-image: linear-gradient(hsl(0,0%,70%),hsl(0,0%,80%));  
      border-radius: 0.2rem;  
      box-shadow: 0 0 0 0.05rem hsla(0,0%,0%,0.5) inset;  
      width: 1.75rem;  
      height: 1.75rem;  
      transform: translate3d(0,0,0);  
 }  
 .card__chip-lines {  
      width: 100%;  
      height: auto;  
 }  
 .card__chip-texture {  
      background-image: linear-gradient(-80deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0.6) 48% 52%,hsla(0,0%,100%,0));  
 }  
 .card__type {  
      align-self: flex-end;  
      margin-left: auto;  
 }  
 .card__digit-group,  
 .card__exp-date,  
 .card__name {  
      background: linear-gradient(hsl(0,0%,100%),hsl(0,0%,85%) 15% 55%,hsl(0,0%,70%) 70%);  
      -webkit-background-clip: text;  
      -webkit-text-fill-color: transparent;  
      font-family: "Courier Prime", monospace;  
      filter: drop-shadow(0 0.05rem hsla(0,0%,0%,0.3));  
 }  
 .card__number {  
      font-size: 0.8rem;  
      display: flex;  
      justify-content: space-between;  
 }  
 .card__valid-thru,  
 .card__name {  
      text-transform: uppercase;  
 }  
 .card__valid-thru,  
 .card__exp-date {  
      margin-bottom: 0.25rem;  
      width: 50%;  
 }  
 .card__valid-thru { 
     font-family: ${theme.font.family}; 
      font-size: 0.4rem;  
      padding-right: 0.25rem;  
      text-align: right;  
 }  
 .card__exp-date,  
 .card__name {  
      font-size: 0.6rem;  
 }  
 .card__exp-date {  
      padding-left: 0.25rem;  
 }  
 .card__name {  
      overflow: hidden;  
      white-space: nowrap;  
      text-overflow: ellipsis;  
      width: 6.25rem;  
 }  
 .card__vendor,  
 .card__vendor:before,  
 .card__vendor:after {  
      position: absolute;  
 }  
 .card__vendor {  
      right: 0.375rem;  
      bottom: 0.375rem;  
      width: 2.55rem;  
      height: 1.5rem;  
      color: #FFF;
 }  
 .card__vendor:before,  
 .card__vendor:after {  
      border-radius: 50%;  
      content: "";  
      display: block;  
      top: 0;  
      width: 1.5rem;  
      height: 1.5rem;  
 }  
 .card__vendor:before {  
      background-color: #e71d1a;  
      left: 0;  
 }  
 .card__vendor:after {  
      background-color: #fa5e03;  
      box-shadow: -1.05rem 0 0 #f59d1a inset;  
      right: 0;  
 }  
 .card__vendor-sr {  
      clip: rect(1px,1px,1px,1px);  
      overflow: hidden;  
      position: absolute;  
      width: 1px;  
      height: 1px;  
 }  
 .card__texture {  
      animation-name: texture;  
      background-image: linear-gradient(-80deg,hsla(0,0%,100%,0.3) 25%,hsla(0,0%,100%,0) 45%);  
 }  
 /* Dark theme */  
 @media (prefers-color-scheme: dark) {  
      :root {  
           --bg: hsl(var(--hue),10%,30%);  
           --fg: hsl(var(--hue),10%,90%);  
      }  
 }  
 /* Animation */  
 @keyframes rotate {  
      from,  
      to {  
           animation-timing-function: ease-in;  
           box-shadow:  
                0 0 0 hsl(0,0%,80%),  
                0.1rem 0 0 hsl(0,0%,100%),  
                -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);  
           transform: rotateY(-10deg);  
      }  
      25%,  
      75% {  
           animation-timing-function: ease-out;  
           box-shadow:  
                0 0 0 hsl(0,0%,80%),  
                0 0 0 hsl(0,0%,100%),  
                -0.25rem -0.05rem 1rem 0.15rem hsla(0,0%,0%,0.3);  
           transform: rotateY(0deg);  
      }  
      50% {  
           animation-timing-function: ease-in;  
           box-shadow:  
                -0.1rem 0 0 hsl(0,0%,80%),  
                0 0 0 hsl(0,0%,100%),  
                -0.3rem -0.1rem 1.5rem 0.3rem hsla(0,0%,0%,0.3);  
           transform: rotateY(10deg);  
      }  
 }  
 @keyframes texture {  
      from,  
      to {  
           transform: translate3d(0,0,0);  
      }  
      50% {  
           transform: translate3d(-50%,0,0);  
      }  
 }  

`;
