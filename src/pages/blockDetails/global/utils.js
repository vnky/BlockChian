import axios from 'axios';
import { BLOCK_REQUETS_URL, MULTI_TRANSACTION_URL } from '../../../ducks';



export const getAddress = (list = []) => {
    let address = [];
    list.forEach((listObj) => {
        if (listObj.addr) {
            address.push(listObj.addr);
        }
    })
    console.log(address.length);
    return address.join('|');

}

export const getBlockDetails = async (blockId = 0) => {
    try {
        const { data } = await axios.get(`${BLOCK_REQUETS_URL(blockId)}?cors=true`);
        return data;
    }
    catch (e) {
        return null;
    }
}

export const getTransactionList = async (transactionId = '') => {
    try {
        const { data } = await axios.get(`${MULTI_TRANSACTION_URL(transactionId)}&cors=true`);
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const finalBalance = (list = []) => {
    let total = 0;
    list.map(({ final_balance }) => {
        total+=final_balance
    });
    return total;
}



export const totalSpent = (list = []) => {
    let total = 0;
    list.map(({ total_sent }) => {
        total+=total_sent
    });
    return total;
}

export const totalRecieved = (list = []) => {
    let total = 0;
    list.map(({ total_received }) => {
        total+=total_received
    });
    return total;
}