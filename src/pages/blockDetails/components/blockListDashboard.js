import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBlockDetails, getAddress, getTransactionList, TransactionListGrid } from '../global';
import { updateCurrentBlock, updateTransaction } from '../../../ducks';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import TransactionDashboard from './transactionDashBoard';
import { Pagination } from '../../../common';


const PageData = ({ items }) => {
    
}

export const BlockDetailsGrid = ({ history = {}, blockId = null, currentBlock = null, updateCurrentBlock, updateTransaction, transactions = [] }) => {
    const [requestState, updateRequestState] = useState(null);
    const showTransactionDetails = async (params) => {
        try {
            const {
                tx
            } = currentBlock;
            const [
                transactionId = ''
            ] = params;
            if (tx.length && transactionId) {
                let currentTransaction = tx.findIndex(({ hash }) => hash === transactionId);
                if (currentTransaction >= 0) {
                    let transactionAddress = '';
                    currentTransaction = tx[currentTransaction];
                    transactionAddress += getAddress(currentTransaction.inputs);
                    transactionAddress += getAddress(currentTransaction.out);
                    if (transactionAddress.length) {
                        updateRequestState({
                            isLoading: true,
                            request_type: 'transaction_details'
                        })
                        const result = await getTransactionList(transactionAddress);
                        const data = {
                            currentTransaction: {
                                ...result.info,
                                ...result.wallet,
                                address: result.addresses
                            },
                            transactions: result.txs
                        }
                        updateTransaction(data);
                        updateRequestState({
                            isLoading: false,
                            request_type: 'transaction_details'
                        })
                    }
                }
            }
        } catch (e) {

            updateTransaction({
                currentTransaction: null,
                transactions: []
            });
            updateRequestState({
                isLoading: false,
                hasError: true,
                request_type: 'transaction_details'
            })
        }

    }
    const getDetails = async () => {
        try {
            if (blockId && !currentBlock) {
                updateRequestState({
                    isLoading: true,
                    request_type: 'block_details'
                })
                const data = await getBlockDetails(blockId);
                updateCurrentBlock(data);
                updateRequestState({
                    isLoading: false,
                    request_type: 'block_details'
                })
            }
        } catch (e) {
            updateRequestState({
                isLoading: false,
                hasError: true,
                request_type: 'block_details'
            })
        }

    }
    useEffect(() => {
        if (!blockId) {
            history.push('/')
        }
        else if (blockId) {
            getDetails()
        }
    }, [blockId, currentBlock]);
    return (
        <section>
            <TransactionListGrid className="ag-theme-balham">
                {currentBlock &&
                    <Accordion onChange={showTransactionDetails}>
                        {currentBlock.tx.map(({ hash }) => {
                            return (
                                <AccordionItem uuid={hash} >
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {hash}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {requestState && requestState.isLoading && requestState.request_type === 'transaction_details' &&
                                            <p>Please wait we're fetching transactions</p>
                                        }
                                        {requestState && !requestState.isLoading &&
                                            !requestState.hasError &&
                                            requestState.request_type === 'transaction_details' &&
                                            transactions.length &&
                                            <TransactionDashboard />}
                                        {requestState && requestState.hasError && requestState.request_type === 'transaction_details' &&
                                            <p>Something went wrong</p>
                                        }
                                        {requestState && !requestState.isLoading && requestState.request_type === 'transaction_details' &&
                                            !requestState.hasError &&
                                            transactions.length <= 0 &&
                                            <p>No data found</p>
                                        }
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>}
                {requestState && requestState.isLoading && requestState.request_type === 'block_details' &&
                    <p>Please wait we're fetching the records</p>
                }
            </TransactionListGrid>

        </section>
    )
}

const stateToProps = (state, props) => ({
    currentBlock: state.currentBlock,
    blockId: props.match.params.id,
    transactions: state.transactions,
    ...props
})

export default connect(stateToProps, { updateCurrentBlock, updateTransaction })(BlockDetailsGrid);