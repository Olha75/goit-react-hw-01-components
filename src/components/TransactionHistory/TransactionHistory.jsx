import css from './transactionHistory.module.css';
// import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  const elements = transactions.map(({ id, type, amount, currency }) => (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tittleTabl}>Type</th>
          <th className={css.tittleTabl}>Amount</th>
          <th className={css.tittleTabl}>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{type}Invoice</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        <tr>
          <td>{type}Withdrawal</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    </table>
  ));
  return;
};

export default TransactionHistory;
