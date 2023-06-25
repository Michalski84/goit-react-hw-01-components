import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  const statusClassName = isOnline ? css.statusOnline : css.statusOffline;

  return (
    <li className={`${css.item} ${statusClassName}`}>
      <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
