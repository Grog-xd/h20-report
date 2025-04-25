import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

interface UserInfoProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StatusIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.successGreen};
  border: 2px solid ${({ theme }) => theme.colors.bgLight};
`;

const UserInfo: React.FC<UserInfoProps> = ({ name, role, avatarUrl }) => {
  return (
    <UserInfoContainer>
      <AvatarContainer>
        <Avatar src={avatarUrl || '/assets/default-avatar.svg'} alt={name} />
        <StatusIndicator />
      </AvatarContainer>
      <UserDetails>
        <Typography variant="caption" color="white">{name}</Typography>
        <Typography variant="subcaption" color="tertiary">{role}</Typography>
      </UserDetails>
    </UserInfoContainer>
  );
};

export default UserInfo; 