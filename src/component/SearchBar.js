import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import mainStore from '../store/CharacterGridStore'

function SearchBar() {
    return (
        <Box padding={1} alignItems="center" justifyContent="center">
            <TextField
                id="outlined-search"
                label="Search"
                type="search"
                size="small"
                className="bg"
                sx={{
                    mr: 2,
                }}
            />
            <Button
                variant="contained"
                onClick={() => {
                    mainStore.search =
                        document.getElementById('outlined-search').value
                    mainStore.fetchInfo()
                }}
                sx={{
                    mr: 2,
                }}
            >
                Search
            </Button>
            <Button
                variant="contained"
                onClick={() => {
                    if (mainStore.search !== '') {
                        mainStore.search = ''
                        mainStore.fetchInfo()
                    }
                }}
            >
                Clear
            </Button>
        </Box>
    )
}

export default SearchBar
