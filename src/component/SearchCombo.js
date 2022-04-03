import React from 'react'
import { Box, Container } from '@mui/material'
import { observer } from 'mobx-react'
import SearchStatus from './SearchStatus'

function SearchBarAndFilter() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Box padding={1} alignItems="center" justifyContent="center">
                <SearchStatus />
            </Box>
        </Container>
    )
}

export default observer(SearchBarAndFilter)
