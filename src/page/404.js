import React from 'react'
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import routerStore from '../store/RouterStore'

function NotFoundPage() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <h1>Can&apos;t find that page in this dimension.</h1>
            <Button
                size="medium"
                variant="contained"
                onClick={routerStore.back}
                sx={{ mt: 1 }}
            >
                Go back
            </Button>
            <Link to="/characters/">
                <Button size="medium" variant="contained" sx={{ mt: 1 }}>
                    Characters Page
                </Button>
            </Link>
        </Grid>
    )
}

export default NotFoundPage
