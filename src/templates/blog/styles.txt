import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const BaseStyle = styled.div`
.BaseTemplate {
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.background};
  overflow-x: hidden;
  position: relative;
}
.BaseTemplate::-webkit-scrollbar {
  display: none;
}
main {
  width: 100vw;
  /* height: calc(100% - 60px); */
  height: auto;
  min-height: calc(100vh - 70px);
  position: relative;
}
@media screen and (min-width: 650px) {

}
@media screen and (min-width: 950px) {
  main {
    width: calc(100vw - 350px);
    display: flex;
    position: relative;
  }
}
`;
