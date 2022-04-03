import React from 'react'
import { observer } from 'mobx-react'
import { Container } from '@mui/material'
import CharacterGrid from '../component/CharacterGrid'
import Search from '../component/Search'
import Paginator from '../component/Paginator'

function MainPage() {
    return (
        <Container sx={{ maxWidth: 900 }}>
            <Search />
            <Paginator />
            <CharacterGrid />
            <Paginator />
        </Container>
    )
}

export default observer(MainPage)
