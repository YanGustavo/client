import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode[];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Carousel: React.FC<Props> = ({ children }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const scroll = element.scrollLeft;
    setScrollPosition(scroll);
  };

  return (
    <>
      <Wrapper onScroll={handleScroll}>
        {children.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Wrapper>
      <Indicator>
        {children.map((_, index) => (
          <Dot
            key={index}
            isActive={
              index * 100 < scrollPosition + 10 &&
              index * 100 > scrollPosition - 10
            }
          />
        ))}
      </Indicator>
    </>
  );
};

const Indicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface DotProps {
  isActive: boolean;
}

const Dot = styled.div<DotProps>`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => (props.isActive ? "#000" : "#aaa")};
`;

export default Carousel;