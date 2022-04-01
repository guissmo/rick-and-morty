import React from 'react'
import { Box, Button, TextField } from '@mui/material'

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
            <Button variant="contained">Search</Button>
        </Box>
    )
}

export default SearchBar
