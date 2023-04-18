import React from 'react';
import styled, { keyframes } from 'styled-components';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const glow = keyframes`
  from {
    color: #FFA500;
    text-shadow: 0 0 10px #FFA500, 0 0 20px #FFA500, 0 0 30px #FFA500, 0 0 40px #FFA500, 0 0 50px #FFA500, 0 0 60px #FFA500, 0 0 70px #FFA500;
    box-shadow: 0 10px 20px #FFA500;
  }
  to {
    text-shadow: none;
    box-shadow: none;
  }
`;

const OnlineUsersContainer = styled.div`
  display: flex;
  align-items: center;
`;

const OnlineUsersCount = styled.p`
  margin: 0 5px;
  font-size: 0.6rem;
`;

const OnlineUsersIcon = styled(LightbulbIcon)`
  font-size: 2.5rem;
  color: #FFA500;
  animation: ${glow} 0.5s ease-in-out infinite alternate;
`;

type Props = {
  onlineUsers: number;
};

const OnlineUsers: React.FC<Props> = ({ onlineUsers }) => {
  return (
    <OnlineUsersContainer>
      {onlineUsers > 0 && (
        <>
      <OnlineUsersIcon />
      <OnlineUsersCount>{onlineUsers} usuários online</OnlineUsersCount>
      </>
      )}   
    </OnlineUsersContainer>
  );
};

export default OnlineUsers;

// const http = require('http');
// const socketIO = require('socket.io');

// const server = http.createServer((req, res) => {
//   // handle HTTP requests
// });

// const io = socketIO(server);

// let onlineUsers = 0;

// io.on('connection', (socket) => {
//   // increment onlineUsers when a new connection is established
//   onlineUsers++;

//   // send the updated count to all connected clients
//   io.emit('updateOnlineUsers', onlineUsers);

//   socket.on('disconnect', () => {
//     // decrement onlineUsers when a connection is closed
//     onlineUsers--;

//     // send the updated count to all connected clients
//     io.emit('updateOnlineUsers', onlineUsers);
//   });
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
