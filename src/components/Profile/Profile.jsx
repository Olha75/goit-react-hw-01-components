// import user from '/user.json';
// import { Profiler } from 'react';
// import { Profile } from "index";
import css from './profile.module.css';
// import PropTypes from 'prop-types';

export const Profile = ({
  views,
  followers,
  stats,
  avatar,
  location,
  tag,
  username,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>

          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span class={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
