import React from 'react'
import { Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function BackToTop() {
    return (
        <Fab
            size="large"
            aria-label="back to top"
            color="primary"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
        >
            <KeyboardArrowUpIcon />
        </Fab>
    )
}
export default BackToTop
