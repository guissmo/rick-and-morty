import React from 'react'
import { Container, Stack } from '@mui/material'

function Pagination() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Stack padding={1} alignItems="center" justifyContent="center">
                <Pagination count={10} />
            </Stack>
        </Container>
    )
}

export default Pagination
