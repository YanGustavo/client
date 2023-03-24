import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const SubMenuContainerStyle = styled.div`
.subMenuContianer,
.viewAll {
  padding: 0;
  margin:0;
  display: flex;
  justify-content: space-between;
  //align-items: center;
}

.subMenuContianer h3 {
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.white};
}

.subMenuContianer .viewAll p {
  font-size: 12px;
  color: ${theme.colors.white};
  font-weight: 400;
}

.subMenuContianer .viewAll i {
  background: ${theme.colors.white};
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.subMenuContianer .viewAll i .MuiSvgIcon-root {
  font-size: 1rem !important;
}
`;
