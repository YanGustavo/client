import React from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type ReviewsProps = {
  rating: number;
};

const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarFull = styled(StarIcon)`
  color: #f5d300;
`;

const StarHalf = styled(StarHalfIcon)`
  color: #f5d300; /* cor da parte preenchida do ícone */
  & path:nth-of-type(2) {
    fill: #a7a7a7; /* cor da parte não preenchida do ícone */
  //color: #f5d300;
  }
`;

const StarEmpty = styled(StarBorderIcon)`
  color: #a7a7a7;
`;

const Reviews: React.FC<ReviewsProps> = ({ rating }) => {
  const starArray: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starArray.push(<StarFull key={i} />);
    } else if (i - rating === 0.5) {
      starArray.push(<StarHalf key={i} />);
    } else {
      starArray.push(<StarEmpty key={i} />);
    }
  }

  return <ReviewsContainer>{starArray}</ReviewsContainer>;
};

export default Reviews;