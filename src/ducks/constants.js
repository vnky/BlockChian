export const UPDATE_BLOCKS = "UPDATE_BLOCKS";
export const UPDATE_CURRENT_BLOCK = 'UPDATE_CURRENT_BLOCK';
export const UPDATE_TRANSACTION ='UPDATE_TRANSACTION';

export const GET_REQUEST = "get";
export const BLOCK_LIST_LIMiT = 20;

export const BLOCKS_LIST_URL = (timeStamp=0) => `https://blockchain.info/blocks/${timeStamp}?format=json`;
export const BLOCK_REQUETS_URL = (id = 0) => `https://blockchain.info/rawblock/${id}`;
export const LATEST_BLOCK_URL = 'https://blockchain.info/latestblock';

export const MULTI_TRANSACTION_URL =(address='') => `https://blockchain.info/multiaddr?active=${address}`;