import Box from 'components/Box/Box';
import { Friend, Chip } from 'components/FriendsList/FriendsList.styled';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <Box display="flex" justifyContent="center" textAlign="center" as="ul">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id}>
          <Chip isOnline={isOnline} />
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </Friend>
      ))}
    </Box>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
