import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({setPage,pageCount}) {

    const handleChangePagination = (event, value) => {
        setPage(value);
    };

    return (
        <div className="mt-auto">
            <nav aria-label="pagination navigation" className="MuiPagination-root">
                <ul className="MuiPagination-ul">
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded Mui-disabled Mui-disabled"
                            tabIndex="-1" type="button" disabled="" aria-label="Go to previous page">
                            <svg className="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24"
                                 aria-hidden="true">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded Mui-selected"
                            tabIndex="0" type="button" aria-current="true" aria-label="page 1">1<span
                            className="MuiTouchRipple-root"></span></button>
                    </li>
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded"
                            tabIndex="0" type="button" aria-label="Go to page 2">2<span className="MuiTouchRipple-root"></span>
                        </button>
                    </li>
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded"
                            tabIndex="0" type="button" aria-label="Go to page 3">3<span className="MuiTouchRipple-root"></span>
                        </button>
                    </li>
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded"
                            tabIndex="0" type="button" aria-label="Go to page 4">4<span className="MuiTouchRipple-root"></span>
                        </button>
                    </li>
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded"
                            tabIndex="0" type="button" aria-label="Go to page 5">5<span className="MuiTouchRipple-root"></span>
                        </button>
                    </li>
                    <li>
                        <div className="MuiPaginationItem-root MuiPaginationItem-ellipsis">…</div>
                    </li>
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded"
                            tabIndex="0" type="button" aria-label="Go to page 10">10<span
                            className="MuiTouchRipple-root"></span></button>
                    </li>
                    <li>
                        <button
                            className="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-page MuiPaginationItem-outlined MuiPaginationItem-rounded"
                            tabIndex="0" type="button" aria-label="Go to next page">
                            <svg className="MuiSvgIcon-root MuiPaginationItem-icon" focusable="false" viewBox="0 0 24 24"
                                 aria-hidden="true">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                            <span className="MuiTouchRipple-root"></span></button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}




