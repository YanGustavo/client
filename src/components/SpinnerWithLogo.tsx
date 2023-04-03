import styled from 'styled-components';

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  border: 2px solid ${(props) => props.color || '#fff'};
  border-top: 2px solid ${(props) => props.color || '#fff'};
  border-radius: 50%;
  animation: spin-clockwise 1s ease-in-out infinite;
  -webkit-animation: spin-clockwise 1s ease-in-out infinite;

  @keyframes spin-clockwise {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 50px;
  transform: translate(-50%, -50%);
`;

export default function SpinnerWithLogo() {
  return (
    <Spinner size="180px">
      <Logo src="img/logo_name.png" alt="Logo" />
    </Spinner>
  );
}