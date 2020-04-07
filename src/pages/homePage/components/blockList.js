import React from "react";
import {
  BlockListContainer,
  getBlocks as fetchBlocks,
  BtnContainer,
  getLatestBlock
} from "../global";
import { updateBlocks } from '../../../ducks';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Pagination, AppPrimaryBtn, AppSuccessBtn } from '../../../common';



export const BlockList = ({ blocks = [], updateBlocks, ...opts }) => {
  const getBlocks = async () => {
    const resultList = await fetchBlocks();
    console.log(resultList)
    updateBlocks(resultList);

  };
  const getLatest = async () => {
    const result = await getLatestBlock();
    updateBlocks(new Array({ ...result }));
  }
  const PagedData = ({ items = [] }) => {
    return (<ul>
      {items.map(({ hash }, idx) => (
        <li key={idx} onClick={e => opts.history.push(`/blockDetails/${hash}`)}>
          {hash.substring(hash.length - 3, hash.length)}
        </li>
      ))}
    </ul>)
  };
  return (
    <BlockListContainer>
      <BtnContainer>
        <AppPrimaryBtn onClick={getBlocks}>
          All Blocks
        </AppPrimaryBtn>
        <AppSuccessBtn onClick={getLatest}>
          Latest block
        </AppSuccessBtn>
      </BtnContainer>
      {blocks.length > 20 && <Pagination data={blocks} itemsPerPage={20}>
        <PagedData />
      </Pagination>}
      {blocks.length <= 20 && <Pagination data={blocks} itemsPerPage={20}>
        <PagedData items={blocks} />
      </Pagination>}
    </BlockListContainer>
  );
};

export const stateToProps = state => ({
  blocks: state.blocks
});

export default connect(stateToProps, { updateBlocks: updateBlocks })(BlockList);
