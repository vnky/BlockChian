import React, { useState, useMemo, useEffect } from 'react';
import { PaginationContainer, processData, PaginationHeader } from './global';

export const Pagination = ({ data = [], itemsPerPage = 0, children }) => {
    const [paginationData, updatePaginationData] = useState({
        items: data,
        itemsCount: itemsPerPage,
        currentPage: 0,
        currentPageData: [],
        chunkedData: []
    });
    useMemo(() => {
        if (paginationData.currentPage === paginationData.chunkedData.length) {
            const chunks = processData(data, itemsPerPage);
            updatePaginationData({
                chunkedData: chunks,
                currentPage: 0,
                currentPageData: chunks[0]
            })
        }
    }, [data])
    const loadNextSetData = (pageIndex) => {
        if (pageIndex >= 0 && paginationData.chunkedData[pageIndex]) {
            const data = paginationData.chunkedData[pageIndex];
            updatePaginationData({
                currentPage: pageIndex,
                currentPageData: data,
                chunkedData: paginationData.chunkedData
            })
        }
    }
    return (
        <PaginationContainer>
            <PaginationHeader>
                <ul>
                    <li>{`${[paginationData.currentPage]} of ${paginationData.chunkedData.length - 1}`}</li>
                    <li>
                        {paginationData.currentPage >= 0 && paginationData.currentPage < paginationData.chunkedData.length - 1 &&
                            <a href="javascript:void(0)" onClick={(e) => loadNextSetData(++paginationData.currentPage)}>
                                Next
                            </a>
                        }
                        {paginationData.currentPage > 0 && paginationData.currentPage <= paginationData.chunkedData.length &&
                            <a href="javascript:void(0)" onClick={(e) => loadNextSetData(--paginationData.currentPage)}>
                                Prev
                            </a>
                        }
                    </li>
                </ul>
            </PaginationHeader>
            {React.cloneElement(children, { items: paginationData.currentPageData })}
        </PaginationContainer>
    )
} 