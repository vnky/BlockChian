
import { UPDATE_BLOCKS, UPDATE_CURRENT_BLOCK, UPDATE_TRANSACTION } from '../constants';


export const updateBlocks = (list = []) => ({
    type: UPDATE_BLOCKS,
    payload: {
        blocks: list
    }
})

export const updateCurrentBlock = (data = null) => ({
    type: UPDATE_CURRENT_BLOCK,
    payload: {
        currentBlock: data
    }
})


export const updateTransaction = (data = {}) => ({
    type: UPDATE_TRANSACTION,
    payload: {
        ...data
    }
})