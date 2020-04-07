import axios from "axios";
import { BLOCK_LIST_LIMiT, LATEST_BLOCK_URL, BLOCKS_LIST_URL } from "../../../ducks";

export const generateBlockRequest = async (blockListRequests = []) =>
  await axios.all([...blockListRequests]);
export const getBlocks = async (blocksLimit = BLOCK_LIST_LIMiT) => {
  try {
    const { data } = await axios.get(BLOCKS_LIST_URL(0) + '&cors=true');
    return data.blocks;
  } catch (e) {
    console.log(e);
  }
};

export const getLatestBlock = async () => {
  try {
    const { data } = await axios.get(LATEST_BLOCK_URL + '?cors=true');
    return data;
  } catch (e) {
    return [];
  }
}