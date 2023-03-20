import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  grid-column-gap: 30px;
  margin-top: 30px;
  img {
    max-width: 90px;
    height: initial !important;
    border-radius: 10px !important;
  }
  .thumb-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: 90px;
    max-width: 90px;
    cursor: pointer;
    &:hover {
      &:after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: ${theme.colors.header_text_color};
        opacity: 40%;
      }
    }
  }
  .active {
    outline: 2px ${theme.colors.header_text_color} solid;
    &:after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${theme.colors.secondary_button_background};
      opacity: 20%;
    }
  }
`;