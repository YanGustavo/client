import React from 'react';
import styled, { css } from 'styled-components';
import { usePathname, useSearchParams } from 'next/navigation';

interface AddressBarProps {
  className?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #999;
  background-color: #000;
  color: #999;

  & > svg {
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const Segment = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  background-color: #333;
  color: #fff;
  font-size: 0.875rem;
  font-weight: bold;

  ${(props) =>
    props.animate &&
    css`
      animation: highlight 1s ease-in-out 1;
    `}

  @keyframes highlight {
    0% {
      background-color: #ffc107;
    }
    50% {
      background-color: #ff9800;
    }
    100% {
      background-color: #ffc107;
    }
  }
`;

const AddressBar: React.FC<AddressBarProps> = ({ className }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Container className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
      <div>
        <span>acme.com</span>
      </div>
      {pathname ? (
        <>
          <span>/</span>
          {pathname
            .split('/')
            .slice(2)
            .map((segment) => {
              return (
                <React.Fragment key={segment}>
                  <Segment animate>{segment}</Segment>
                  <span>/</span>
                </React.Fragment>
              );
            })}
        </>
      ) : null}
      {searchParams.toString().length !== 0 ? (
        <div>
          <span>?</span>
          {Array.from(searchParams.entries()).map(([key, value], index) => {
            return (
              <React.Fragment key={key}>
                {index !== 0 ? <span>&</span> : null}
                <span>
                  <span>{key}</span>
                  <span>=</span>
                  <span>{value}</span>
                </span>
              </React.Fragment>
            );
          })}
        </div>
      ) : null}
    </Container>
  );
};

export default AddressBar;