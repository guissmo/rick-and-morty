import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import mainStore from '../store/CharacterGridStore'

function SearchBar() {
    return (
        <Box
            padding={1}
            alignItems="center"
            justifyContent="center"
            sx={{ textAlign: 'center' }}
        >
            <TextField
                id="outlined-search"
                label="Name"
                type="search"
                size="small"
                className="bg"
                sx={{
                    mr: 2,
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        mainStore.search =
                            document.getElementById('outlined-search').value
                        mainStore.fetchInfo('search')
                    }
                }}
            />
            <Button
                variant="contained"
                onClick={() => {
                    mainStore.search =
                        document.getElementById('outlined-search').value
                    mainStore.fetchInfo('search')
                }}
                sx={{
                    mr: 2,
                }}
            >
                Search
            </Button>
        </Box>
    )
}

export default SearchBar
