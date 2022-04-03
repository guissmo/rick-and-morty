import React from 'react'
import { observer } from 'mobx-react'
import { Container } from '@mui/material'
import CharacterCardGrid from '../component/CharacterGrid'
import SearchStatus from '../component/SearchStatus'
import CenteredPagination from '../component/PaginationControlled'

function MainPage() {
    return (
        <Container sx={{ maxWidth: 900 }}>
            <SearchStatus />
            <CenteredPagination />
            <CharacterCardGrid />
            <CenteredPagination />
        </Container>
    )
}

export default observer(MainPage)
