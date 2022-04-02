import React from 'react'
import { Box, Stack, Container } from '@mui/material'
import SearchBar from './SearchBar'
import Filter from './Filter'

function SearchBarAndFilter() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Box padding={1} alignItems="center" justifyContent="center">
                <Stack
                    direction={{
                        xs: 'column',
                        sm: 'row',
                        md: 'row',
                        lg: 'row',
                    }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <SearchBar />
                    <Filter />
                </Stack>
            </Box>
        </Container>
    )
}

export default SearchBarAndFilter
