// import user from '/user.json';
// import { Profiler } from 'react';
// import { Profile } from "index";
import css from './Profile.module.css';

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
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p className="name">{username}</p>
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
