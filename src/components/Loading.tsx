import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0.5);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.3);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkeletonItem = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px 0;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.gray_300};
  border-radius: 5px;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const Loading = () => {
  return (
    <SkeletonWrapper>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </SkeletonWrapper>
  );
};

export default Loading;