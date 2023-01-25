import Profile from './Profile/Profile';
import user from '../data/user';
import Statistics from './Statistics/Statistics';
import statistics from '../data/statistics';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
