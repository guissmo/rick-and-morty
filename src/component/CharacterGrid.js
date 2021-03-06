import React, { useEffect } from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import CharacterCard from './CharacterGridCard'
import mainStore from '../store/CharacterGridStore'

function CharacterCardGrid() {
    useEffect(() => {
        mainStore.fetchInfo()
    }, [])

    const nothingFound = (
        <Grid item lg={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ fontWeight: 900 }}>
                Nothing found in this dimension.
            </Typography>
            <Typography variant="h2">
                Clear the filters and start from scratch?
            </Typography>
            <Button variant="contained" onClick={mainStore.clearFilters}>
                Clear
            </Button>
        </Grid>
    )

    if (mainStore.error !== '') {
        return (
            <Box sx={{ flex: 1 }} padding={1}>
                {nothingFound}
            </Box>
        )
    }

    let somethingFound = Array.from(Array(20).keys()).map((x) => {
        return (
            <Grid
                item
                key={x}
                lg={3}
                className="flex-column-parent"
                sx={{ maxWidth: 300 }}
            >
                <CharacterCard loading key={x} />
            </Grid>
        )
    })

    if (!mainStore.loading) {
        somethingFound = Array.from(Array(mainStore.getCount()).keys()).map(
            (x) => {
                return (
                    <Grid
                        item
                        key={mainStore.getId(x)}
                        lg={3}
                        className="flex-column-parent"
                        sx={{ maxWidth: 300 }}
                    >
                        <CharacterCard
                            key={x}
                            name={mainStore.getName(x)}
                            status={mainStore.getStatus(x)}
                            id={mainStore.getId(x)}
                            origin={mainStore.getOrigin(x)}
                            image={mainStore.getImage(x)}
                        />
                    </Grid>
                )
            }
        )
    }
    return (
        <Box sx={{ flex: 1 }} padding={1}>
            <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="stretch"
            >
                {somethingFound}
            </Grid>
        </Box>
    )
}

export default observer(CharacterCardGrid)
