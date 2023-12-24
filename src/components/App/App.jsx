import { Profile } from 'index';
import user from 'data/user.json';
import css from './app.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        {...user}
        // username={user.username}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // stats={user.stats}
        // followers={user.followers}
        // views={user.views}
        // likes={user.likes}
      />
    </div>
  );
};
