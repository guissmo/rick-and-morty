import React from 'react'
import { Box, Container, Typography, Chip } from '@mui/material'
import { observer } from 'mobx-react'
import mainStore from '../store/CharacterGridStore'

function SearchStatus() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Box padding={1} alignItems="center" justifyContent="center">
                <Typography align="center" variant="h5">
                    You are looking at a list of all{' '}
                    {mainStore.filter === 'none' ? (
                        ''
                    ) : (
                        <Chip
                            label={
                                mainStore.filter === 'unknown'
                                    ? 'unknown status'
                                    : mainStore.filter
                            }
                            style={{
                                fontSize: 18,
                            }}
                            onDelete={() => {
                                mainStore.filter = 'none'
                                mainStore.fetchInfo()
                            }}
                        />
                    )}
                    {mainStore.status === '' ? '' : mainStore.status} Rick and
                    Morty characters
                    {mainStore.search === '' ? (
                        '.'
                    ) : (
                        <span>
                            {' '}
                            whose name contains{' '}
                            <Chip
                                label={mainStore.search}
                                style={{
                                    fontSize: 18,
                                }}
                                onDelete={() => {
                                    mainStore.search = ''
                                    document.getElementById(
                                        'outlined-search'
                                    ).value = ''
                                    mainStore.fetchInfo()
                                }}
                            />
                            .
                        </span>
                    )}
                </Typography>
            </Box>
        </Container>
    )
}

export default observer(SearchStatus)
