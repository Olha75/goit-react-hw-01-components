import Profile from 'components/Profile/Profile';
import user from 'data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from 'data/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title="UPLOAD STATS" items={data} />
    </div>
  );
};
