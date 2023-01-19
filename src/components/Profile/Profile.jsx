import Box from 'components/Box/Box';
import {
  UserInfo,
  StatsList,
  StatsItem,
  Avatar,
  StatsText,
} from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      display="inline-block"
      p={20}
      border="1px solid black"
      borderRadius={5}
      backgroundColor="lightblue"
      textAlign="center"
    >
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <UserInfo>{username}</UserInfo>
        <UserInfo>{`@${tag}`}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </div>
      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsText>{stats.followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsText>{stats.views}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsText>{stats.likes}</StatsText>
        </StatsItem>
      </StatsList>
    </Box>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
