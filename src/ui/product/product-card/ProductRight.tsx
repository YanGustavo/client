import React, { useState } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Right = styled.div`
  width: 50%;
  background: ${(props) => props.theme.colors.success_color};
  color: white;
  float: right;
  height: 200%;
  overflow: hidden;

  &:hover .done {
    transform: translateY(-100%);
  }

  &:hover .remove {
    transform: translateY(-100%);
  }
`;

type Props = {
  children: ReactNode;
};

function ProductRight({ children }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: isHovered ? 'done' : 'remove',
      });
    }
    return child;
  });

  return (
    <Right onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {modifiedChildren}
    </Right>
  );
}

export default ProductRight;
