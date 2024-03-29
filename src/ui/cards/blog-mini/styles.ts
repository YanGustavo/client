import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const Body = styled.section`

.blog-card {
  display: block;
  position: relative;
  width: 100%;
  height: 180px;
  margin: auto;
  margin-left: 5%;
  margin-top: 5px;
  box-shadow: 0 2px 10px rgba(#000, 0.85);
  transition: all 450ms ease-out 0s;
  overflow: hidden;
  .blog-img {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
    overflow: hidden;
  }
  &:hover {
    box-shadow: 0 2px 35px rgba(#000, 0.85);
    .text-overlay {
      background: rgba(#fff, 0.8);
      height: 50%;
      top: 50%;
      transition: all 450ms ease-in-out 0s;
    }
    p {
      height: 60px; 
      transition: all 350ms ease-in-out 0s;
      a {
        visibility: visible;
      }
    }
  }
}

.text-overlay {
  position: relative;
  background: rgba(#fff, 0.6);
  width: 100%;
  height: 40%;
  top: 60%;
  box-shadow: 0 -2px 12px rgba(#000, 0.3);
  padding: 10px 12px;
  overflow: hidden;
  transition: all 450ms ease-in-out 0s;
  cursor: pointer;
  h2 {
    color: rgba(#000, 0.85);
    letter-spacing: 0.0225em;
    width: auto;
    margin: 0;
  }
  p {
    color: #555;
    width: 380px;
    height: 38px;
    margin: 8px 0;
    line-height: 1.25;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  a {
    color: #378AEE;
    text-decoration: none;
    transition: all 350ms linear;
    visibility: hidden;
    &:hover {
      color: #449CC5;
      border-bottom: 1px dotted #47A8F2;
    }
  }
}


`;
