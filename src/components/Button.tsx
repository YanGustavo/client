'use client'
import styled from 'styled-components';
import { motion } from 'framer-motion';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  contained?: boolean; // Nova propriedade
};

const Button = styled(motion.button)<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'secondary'
      ? props.theme.desing.buttons.secondary.backgroundColor
      : props.theme.desing.buttons.primary.backgroundColor};
  color: ${(props) => props.theme.desing.buttons.primary.color};
  border: none;
  font-family: ${(props) => props.theme.desing.font.family};
  border-radius: ${(props) => props.theme.desing.border.radius};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return props.theme.desing.font.sizes.xxxsmall;
      case 'medium':
        return props.theme.desing.font.sizes.medium;
      case 'large':
        return props.theme.desing.font.sizes.large;
      default:
        return props.theme.desing.font.sizes.medium;
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '0.5rem 1rem';
      case 'medium':
        return '0.75rem 1.5rem';
      case 'large':
        return '0.75rem 1.5rem';
      default:
        return '0.75rem 1.5rem';
    }
  }};
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.contained &&
    `
    background-color: ${
      props.variant === 'secondary'
        ? props.theme.desing.buttons.secondary.backgroundColor //_hover
        : props.theme.desing.buttons.primary.backgroundColor //_hover// faltou criar o background hover nos buttons
    };
    color: ${
      props.variant === 'secondary'
        ? props.theme.desing.buttons.secondary.color
        : props.theme.desing.buttons.primary.color
    };
    &:hover {
      background-color: ${
        props.variant === 'secondary'
          ? props.theme.desing.buttons.secondary.backgroundColor //_hover
          : props.theme.desing.buttons.primary.backgroundColor //_hover
      };
    }
    &:before {
      content: '';
      position: absolute;
      background-color: ${
        props.variant === 'secondary'
        ? props.theme.desing.buttons.secondary.backgroundColor //_hover
          : props.theme.desing.buttons.primary.backgroundColor //_hover
      };
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.2s ease;
    }

    &:active:before {
      transform: scale(0);
      opacity: 0.2;
      transition: 0s;
    }

    &:hover:before {
      transform: scale(1.2);
      opacity: 0.1;
    }

    &:focus:before {
      box-shadow: 0 0 0 2px ${props.theme.desing.box.shadow};
    }
  `}
`;

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  contained: false, // Valor padrão
};

export default Button;
