import React from 'react';
import { connect } from 'react-redux';
import { TransactionDetailsDashboard  } from '../global';
import { TransactionInfoDetails } from './transactionInfoSection';
import { TransactionDetailsGrid } from './transactionList';

export const TransactionDashboard = ({ currentTransaction = null, transactions = [] }) => {
    return (
        <TransactionDetailsDashboard>
            {currentTransaction && <TransactionInfoDetails {...currentTransaction} />}
            {transactions.length > 0 && <TransactionDetailsGrid transactions={transactions} />}
            {!currentTransaction && transactions.length === 0 && <div>No Data Found</div> }
        </TransactionDetailsDashboard>

    )
}

const stateToProps = (state) => ({
    currentTransaction: state.currentTransaction,
    transactions: state.transactions
});

export default connect(stateToProps)(TransactionDashboard);