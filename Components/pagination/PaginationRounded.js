import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({setPage,pageCount}) {

    const handleChangePagination = (event, value) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={pageCount}
                        onChange={handleChangePagination}
                        variant="outlined" shape="rounded" color="primary" />
        </Stack>
    );
}
