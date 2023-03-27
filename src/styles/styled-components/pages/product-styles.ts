import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const Images = styled.div`
 grid-column-start: first;
 grid-column: 1 / 6;
 margin-bottom: 1rem;
  .displayed {
    position: relative;
    .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }
    .current-image {
      width: 100%;
      border-radius: 20px;
    }
  }
  .mobile-carousel {
    display: none;
    overflow: hidden;
  }
  @media (max-width: 1099px) {
    width: 100%;
  }
  @media (max-width: 1039px) {
    .desktop-carousel {
      display: none;
    }
    .mobile-carousel {
      /* overflow: hidden; */
      display: block;
      .slider {
        display: flex;
        transition: 500ms ease;
      }
    }
    .thumbnails {
      display: none;
    }
    .overlay {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .displayed {
      .current-image {
        border-radius: 0;
      }
    }
  }
`;
export const Details = styled.div`
grid-column-start: col4-start;
grid-column: 1 / 6;
`;
export const DescriptionContainer = styled.div`
  position: relative;
  grid-row: 2; /* ocupa a segunda linha */
  grid-column: 1 / 6; /* ocupa da segunda coluna até a quarta coluna */
`;
export const Body = styled.div`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(60%, 1fr));
  grid-template-columns: [first] 10% [line2] 30% [line3] auto [col4-start] 30%  [five] 10% [end];
  grid-template-rows: auto auto auto;
  column-gap: 1rem;
  hr {
   padding: 0;
   border: none;
   border-top: medium double #333;
   color: #333;
   text-align: center;
 }
  img {
    cursor: pointer;
    user-select: none;
  }
  @media screen and (min-width: 541px) {}
@media screen and (min-width: 650px) {
  grid-template-columns: [first] 5% [line2] 35% [line3] auto [col4-start] 35%  [five] 5% [end];
  ${Images}{
    grid-column: 2 / 5;
  }
  ${Details}{
    grid-column: 2 / 5;
  }
}
@media screen and (min-width: 950px) {
  grid-template-columns: [first] 5% [line2] 35% [line3] auto [col4-start] 20%  [five] 20% [end];
  ${Images}{
    grid-column: 1 / 4;
  }
  ${Details}{
    grid-column: 4 / 6;
  }
  ${DescriptionContainer} {
    grid-row: 2; /* ocupa a segunda linha */
  grid-column: 2 / 4; /* ocupa da segunda coluna até a quarta coluna */
  }
  
}
@media screen and (min-width: 1100px) {
  grid-template-columns: [first] 1% [line2] 39% [line3] auto [col4-start] 20%  [five] 20% [end];
  ${Images}{
    grid-column: 2 / 4;
  }
  ${Details}{
    grid-column: 4 / 6;
  }
}
`;
export const Name = styled.div`
  .brand {
    text-transform: uppercase;
    color: ${theme.colors.header_text_color};
    font-weight: 500;
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
    margin-bottom: 0.2rem;
  }
  .name {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    .name {
      font-size: 28px;
      margin-bottom: 2rem;
    }
  }
`;

export const ProductDetails = styled.div``;

export const Description = styled.div`
  color: ${theme.colors.text_color};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const Price = styled.div`
  margin-bottom: 30px;
  .total-price {
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  .discouted-price {
    font-size: 25px;
    margin-right: 15px;
  }
  .original-price {
    margin-top: 10px;
    font-weight: 700;
    text-decoration: line-through;
    color: ${theme.colors.text_color}
  }
  .percentage {
    padding: 3px 7px;
    font-weight: 600;
    border-radius: 6px;
    background-color: ${theme.colors.product_price_percentage};
    color: ${theme.colors.heading_color};
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .original-price {
      margin-top: 0px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  .quantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.header_background};
    width: fit-content;
    height: 55px;
    width: 50%;
    border-radius: 10px;
    user-select: none;
    margin-right: 0;
    .current-quantity {
      font-weight: 700;
      width: 50px;
      text-align: center;
    }
    .dec {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;
      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }
    .inc {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;
      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }
  }
  .add-to-cart {
    position: relative;
    width: 100%;
    margin-top:1rem;
    button {
      width: 100%;
      height: 55px;
      background-color: ${theme.colors.secondary_button_background};
      border: none;
      border-radius: 10px;
      align-items: center;
      display: flex;
      justify-content: center;
      img {
        margin-right: 10px;
      }
      color: white;
      font-weight: 700;
      cursor: pointer;
      transition: 100ms ease;
      &:hover {
        background-color: hsl(26, 100%, 55%, 50%);
      }
    }
  }
  @media (max-width: 499px) {
    .quantity {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
    }
    .add-to-cart {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 90%;
  z-index: 10;
  user-select: none;
  .next,
  .prev {
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;