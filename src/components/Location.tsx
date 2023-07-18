'use client'
import React, { useState, useEffect } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.desing.font.family};
  font-size: ${(props) => props.theme.desing.font.sizes.small};
  color: ${(props) => props.theme.desing.colors.primaryButton.textColor};
  width: 100%;
`;

const LocationText = styled.span`
  margin-left: 0.5rem;
  display: inline-block;
  white-space: nowrap;
`;
const Location: React.FC = () => {
  const [city, setCity] = useState<string | undefined>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.locality) {
              setCity(data.locality);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  return (
    <Container>      
      {!city &&(<LocationText><LocationOnIcon/> Entregamos em todo o Brasil.</LocationText>)}
      {city &&(<LocationText><LocationOnIcon/> Entregamos em {city} e região.</LocationText>)}   
      
    </Container>
  );
};

export default Location;