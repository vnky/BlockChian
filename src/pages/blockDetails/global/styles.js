import styled from 'styled-components';

export const BlockDetailsContainer =  styled.section`
    width: 100%;
    height: 100%;
`;

export const TransactionListGrid = styled.section`
    width: 100%;
    height: 400px;
    margin: 20px 0;
`;


export const TransactionDetailsDashboard = styled.section`
    display: flex;
    flex-wrap: wrap;
    div {
        flex: 1 1 calc(100% - 50%);
    }
`;