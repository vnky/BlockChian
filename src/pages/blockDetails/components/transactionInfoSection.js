import React from 'react';
import { finalBalance  ,totalRecieved ,totalSpent } from '../global'; 

export const TransactionInfoDetails = ({ address = [], ...opts}) => {
    
    const finalBal = finalBalance(address);
    const totSpent = totalSpent(address);
    const totRecieved = totalRecieved(address);
    console.log(opts);
    return (
       <ul>
           <li>Spent: {totSpent}</li>
           <li>Final Balance: {finalBal}</li>
           <li>Total Recieved: {totRecieved}</li>
       </ul>
    )
}