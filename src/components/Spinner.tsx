import styled from 'styled-components';

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  border: 2px solid ${(props) => props.color || '#fff'};
  border-top: 2px solid ${(props) => props.color || '#fff'};
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  transform-origin: 50% 50%;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;