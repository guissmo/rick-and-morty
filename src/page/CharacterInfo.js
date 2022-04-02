import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import CharacterInfo from '../component/CharacterCard'

function CharacterInfoPage() {
    const { id } = useParams()
    return (
        <Container sx={{ width: 500 }}>
            <CharacterInfo id={id} />
        </Container>
    )
}

export default CharacterInfoPage
