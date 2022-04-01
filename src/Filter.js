import React from 'react'
import { Box, Typography, Chip } from '@mui/material'

function Filter() {
    return (
        <Box padding={1}>
            <Typography inline>Filters</Typography>
            <Chip label="Alive" />
            <Chip label="Dead" variant="outlined" />
            <Chip label="Unknown" variant="outlined" />
        </Box>
    )
}

export default Filter
