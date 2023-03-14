import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: hsl(0, 0%, 0%, 75%);
    z-index: -1;
  }
`;

export const Slide = styled.div`
  margin: auto;
  width: fit-content;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  .exit {
    position: absolute;
    top: -35px;
    width: fit-content;
    margin: auto;
    width: 500px;
    display: flex;
    justify-content: right;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
  .active-container {
    position: relative;
  }
  .active-image {
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
  }
  .thumbnails {
    width: 450px;
    margin: auto;
  }
  @media (max-height: 720px) {
    .active-image {
      height: 500px;
    }
    .thumbnails {
      display: none;
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
  width: 550px;
  z-index: 100;
  user-select: none;
  .next,
  .prev {
    background-color: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;