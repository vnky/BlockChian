import { blockChainDataModel } from "../model";
import { UPDATE_BLOCKS, UPDATE_CURRENT_BLOCK, UPDATE_TRANSACTION } from '../constants';
export const block = (state = blockChainDataModel(), { type, payload }) => {
  switch (type) {
    case UPDATE_BLOCKS:
      return { ...state, ...payload };
    case UPDATE_CURRENT_BLOCK:
      return { ...state, ...payload };
    case UPDATE_TRANSACTION:
      return { ...state, ...payload };
    default:
      return state;
  }
};
