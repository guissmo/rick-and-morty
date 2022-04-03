/* eslint-disable no-unused-vars */
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
        <Grid item key={1000} lg={12} sx={{ textAlign: 'center' }}>
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

    const somethingFound = (
        <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="stretch"
        >
            {Array.from(Array(mainStore.ids.length).keys()).map((x) => {
                return (
                    <Grid
                        item
                        key={mainStore.ids[x]}
                        lg={3}
                        className="flex-column-parent"
                        sx={{ maxWidth: 300 }}
                    >
                        <CharacterCard
                            key={x}
                            name={mainStore.names[x]}
                            status={mainStore.statuses[x]}
                            id={mainStore.ids[x]}
                            origin={mainStore.origins[x]}
                            image={mainStore.images[x]}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
    return (
        <Box sx={{ flex: 1 }} padding={1}>
            {mainStore.error === '' ? somethingFound : nothingFound}
        </Box>
    )
}

export default observer(CharacterCardGrid)