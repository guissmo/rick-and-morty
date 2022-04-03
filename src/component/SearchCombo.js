import React from 'react'
import { Box, Stack, Container } from '@mui/material'
import { observer } from 'mobx-react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import SearchStatus from './SearchStatus'

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
                    <Filter lg={4} />
                    <SearchBar xl={8} />
                </Stack>
            </Box>
            <Box padding={1} alignItems="center" justifyContent="center">
                <SearchStatus />
            </Box>
        </Container>
    )
}

export default observer(SearchBarAndFilter)
