import React from 'react'
import { Chip, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import mainStore from '../store/CharacterGridStore'

function SearchStatus() {
    return (
        <Typography
            align="center"
            variant="h5"
            className="search-status-text"
            sx={{ mb: 2 }}
        >
            This is the list of all{' '}
            {mainStore.filter === 'none' ? (
                ''
            ) : (
                <Chip
                    label={
                        mainStore.filter === 'unknown'
                            ? 'unknown status'
                            : mainStore.filter
                    }
                    sx={{
                        fontSize: 18,
                        fontWeight: 900,
                        backgroundColor: '#62a4ab',
                    }}
                    onDelete={() => {
                        mainStore.filter = 'none'
                        mainStore.page = 1
                        mainStore.fetchInfo()
                    }}
                />
            )}
            {mainStore.status === '' ? '' : mainStore.status} Rick and Morty
            characters
            {mainStore.search === '' ? (
                '.'
            ) : (
                <span>
                    {' '}
                    whose name contains{' '}
                    <Chip
                        label={mainStore.search}
                        sx={{
                            fontSize: 18,
                            fontWeight: 900,
                            backgroundColor: '#62a4ab',
                        }}
                        onDelete={() => {
                            mainStore.search = ''
                            mainStore.page = 1
                            document.getElementById('outlined-search').value =
                                ''
                            mainStore.fetchInfo()
                        }}
                    />
                    .
                </span>
            )}
        </Typography>
    )
}
export default observer(SearchStatus)
