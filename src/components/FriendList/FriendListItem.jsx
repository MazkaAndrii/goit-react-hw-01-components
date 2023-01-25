import PropTypes from 'prop-types';
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <li class="item">
      <span
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        class="status"
      ></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
