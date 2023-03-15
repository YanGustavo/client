import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const Body = styled.div`
  max-width: 1152px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
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
  @media (max-width: 1099px) {
    grid-column-gap: 40px;
  }
  @media (max-width: 1039px) {
    padding: 90px;
  }
  @media (max-width: 768px) {
    padding: 70px 0 0 0;
    grid-template-columns: 100%;
  }
`;

export const Images = styled.div`
  width: 470px;
  padding: 10px;
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
  padding: 40px;
  @media (max-width: 1099px) {
    padding: 40px 0;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Name = styled.div`
  .brand {
    text-transform: uppercase;
    color: ${theme.colors.header_text_color};
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }
  .name {
    font-size: 45px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    .name {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
`;

export const ProductDetails = styled.div``;

export const Description = styled.div`
  color: ${theme.colors.text_color};
  margin-bottom: 30px;
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
    width: 160px;
    border-radius: 10px;
    user-select: none;
    margin-right: 20px;
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
    button {
      height: 55px;
      width: 250px;
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
  z-index: 100;
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