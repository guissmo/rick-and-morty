import React from 'react'
import {
    Box,
    Container,
    Typography,
    Chip,
    Paper,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material'
import { observer } from 'mobx-react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import mainStore from '../store/CharacterGridStore'
import SearchBar from './SearchBar'
import Filter from './Filter'

function SearchStatus() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Box padding={1} alignItems="center" justifyContent="center">
                <Paper
                    elevation={3}
                    sx={{
                        padding: 2,
                        backgroundColor: '#2f9331',
                        color: '#e7e0db',
                    }}
                >
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{ fontWeight: 300, padding: 2 }}
                    >
                        You are looking at the list of all{' '}
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
                        {mainStore.status === '' ? '' : mainStore.status} Rick
                        and Morty characters
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
                    <Accordion
                        style={{
                            backgroundColor: '#fff874',
                            maxWidth: 600,
                            margin: 'auto',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ flexDirection: 'row-reverse' }}
                        >
                            <Typography variant="button" sx={{ ml: 1 }}>
                                Filters
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                padding={1}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Stack
                                    direction={{
                                        xs: 'column',
                                        sm: 'column',
                                        md: 'row',
                                        lg: 'row',
                                    }}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Filter lg={4} />
                                    <SearchBar xl={8} />
                                </Stack>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            </Box>
        </Container>
    )
}

export default observer(SearchStatus)
