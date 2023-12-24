// import user from '/user.json';
// import { Profiler } from 'react';
// import { Profile } from "index";
import css from './profile.module.css';
import PropTypes from 'prop-types';

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
        <img src={avatar} alt="User avatar" class="avatar" />
        <p className={css.name}>{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">{followers}</span>

          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">{views}</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">{likes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};
