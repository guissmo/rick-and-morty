import React from 'react'
import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material'
import { observer } from 'mobx-react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchStatus from './SearchStatus'
import SearchBar from './SearchBar'
import FilterSelect from './FilterSelect'

function Search() {
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
                    <SearchStatus />
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
                                    <FilterSelect lg={4} />
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

export default observer(Search)
