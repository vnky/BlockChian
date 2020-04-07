import styled from 'styled-components';

export const PaginationContainer = styled.section`
    width: 100%;
    height: 500px;
`;

export const PaginationHeader = styled.section`
    ul {
        display: block;
        margin-bottom: 20px;
        li {
            list-style: none;
           
            a {
                color: #000;
                text-decoration: underline;
                display: inline-block;
                margin-right: 20px;
            }
            & {
                color:#000;
                display: inline-block;
                margin: 0;
                background-color:#FFF;
                padding: 0;
                margin-right: 20px;
                box-shadow: none;
            }
            &:hover {
                top: 0;
                position: static;
                box-shadow: none;
            }
            &:first-child {
               
            }
        }
    }
`;