import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const Body = styled.section`
display: flex;
direction: horizontal;
gap: 1rem;
  .our-team {
  padding: 30px 0 40px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;

}

.our-team .picture {
  display: inline-block;
  height: 12rem;
  width: 12rem;
  padding: 1rem;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: ${theme.colors.header_text_color};
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${theme.colors.accent_background};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}

.our-team .title {
  display: block;
  font-size: 15px;
  color: ${theme.colors.header_text_color};
  text-transform: capitalize;
}

.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: ${theme.colors.secondary_button_background};
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li a {
  display: block;
  padding: 2px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}

.our-team .social li a:hover {
  color: ${theme.colors.header_text_color};
  background-color: #f7f5ec;
}
`;
