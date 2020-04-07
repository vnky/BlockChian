import React from 'react';
import { BlockDetailsContainer } from './global';
import  { Heading1 } from '../../common';
import  BlockDetailsGrid from './components/blockListDashboard';

export const BlockDetailDashboard = props => (
    <BlockDetailsContainer>
        <Heading1>BlockData Details</Heading1>
        <BlockDetailsGrid {...props}/>
    </BlockDetailsContainer>
);
