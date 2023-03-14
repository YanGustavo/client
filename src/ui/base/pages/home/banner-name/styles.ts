import styled from 'styled-components';

import theme from 'styles/styled-components/theme';

export const BannerNameStyle = styled.div`

#stage {
  overflow: hidden;
  position:relative;
  perspective: 500px;
}
.banner {
  width: 100%;
  min-height:120px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  
}
#road {
  position: absolute;
  top: 0;
  left: 0;
  opacity: .9;
  width: 120%;
  height: 140%;
  background: #888;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.2) 35%,
      rgba(80, 80, 80, 0.2) 50%,
      rgba(30, 30, 30, 0.4) 70%,
      rgba(60, 60, 60, 0.5) 87%,
      rgba(180, 180, 180, 0.5) 100%
    ),    url("data:image/gif;base64,R0lGODlhAAFAAJEAAGdnZ3d3d4eHh5iYmCH5BAAAAAAALAAAAAAAAUAAAAL/xGKCm3re4pNs2kthzVxj/4HdGG7liZLpyram+rqwTNfxfOc2vvP+3xMBh8SgUahLKpdHpvOJhEqj1Kq1ib1Oi1kt99v1isNbcnl8NqfB6rX73Y6z0XI4/W7P4/Xz/r4OyBf4R+hXOHgoiKiYuNho6PgIyThJWWl5iRmpucmZKfnZKepJOhpaCmqqesqK2pq6CvsaK+tKWzuLm7vLa3vbq+sLPCxcHHyMTKz8u8xs3Azt/Cw9TW0djX2drM293Z1dHf49Di7uXX6Onk6uzr7+3g7vHk8vXz+Pb5+/f9/P768vIECB/wiaO4jQYMGFCgc6ZPiwYUKIEyNKpIjRosaMWRwrdvS4MeTFjyRFjgSJMqXJkixXqmwJ0+XJmTFpyrRZM6fOlzxv+tzZ8ydOoUOBEjWK9KjSokGbJmW6FOrTqFOlWqV6FavTrFW1dvUKdutXrmLLhh1r1lABADs=");
  background-size: 19vw auto;
  transform-origin: center top;
  transform: rotateX(45deg) translate(-20vw);
  animation: stripemove 0.2s linear infinite;
}

@keyframes stripemove {
  to {
    transform: rotateX(45deg) translate(0vw);
  }
}

#stripes {
  position: absolute;
  opacity: 0.5;
  top: 50%;
  width: 120vw;
  min-width:60vw;
  height: 5%;
  background: repeating-linear-gradient(
    to right,
    orange,
    orange 8vw,
    transparent 8vw,
    transparent 20vw
  );
}

.deliveryPic {
  position: absolute;
  right: -20px;
  top: 10px;
  width: 160px;
}
.bannerContent {
  position: absolute;
  top: 0;
  left: 0;  
  width: 65%;
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  z-index: 10;  
  background: url("https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fbanner.png?alt=media&token=7e244d84-8821-477d-b273-4c9381a474fb")
  no-repeat center;
  background-size: cover;
}

.bannerContent h3 {
  font-size: 0.8rem;
  font-weight: 500;
  color: #2a2b3c;
}

.bannerContent p {
  font-size: 0.6rem;
  width: 200px;
  color: ${theme.colors.heading_color};
  margin: 5px 0;
}

.bannerContent p span {
  color: ${theme.colors.heading_color};
  font-weight: 500;
}

.bannerContent a {
  background: ${theme.colors.heading_color};
  padding: 0.1rem 0.5rem;
  border-radius: 100vw;
  color: #faf9fb;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
}

.bannerContent a:hover {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
}
@media screen and (min-width: 950px) {
  .banner {
    height: 200px;
  }    
  .deliveryPic {
    bottom: -13px;
    width: 278px;
  }
  .bannerContent {
  width: 50%;
  }
 .bannerContent h3 {
    font-size: 24px;
  }

  .bannerContent p {
    font-size: 15px;
    margin: 12px 0;
  }

  .bannerContent a {
    font-size: 16px;
  }
}
`;
