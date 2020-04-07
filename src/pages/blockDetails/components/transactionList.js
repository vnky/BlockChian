import React from 'react';
import { TransactionListGrid } from '../global';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const gridCols = [{
    headerName: 'Transaction Id',
    field: 'hash'
}, {
    headerName: 'Transaction Date',
    field: 'time',
    cellRendererFramework: ({ value }) => {
        const transactionDate = new Date(value);
        return <span>{transactionDate.toLocaleDateString()}</span>
    }
}, {
    headerName: 'Transaction Balence ',
    field: 'balance'
}, {
    headerName: 'Is Spent?',
    field: 'double_spend',
    cellRendererFramework: ({ value }) => {
        return <span>{JSON.stringify(value)}</span>
    }
}, {
    headerName: 'Transaction Fee',
    field: 'fee'
}];

export const TransactionDetailsGrid = ({ transactions = [] }) => {
    return (
        <TransactionListGrid>
            <AgGridReact columnDefs={gridCols} rowData={transactions}>
            </AgGridReact>

        </TransactionListGrid>
    );
};