import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import CharacterInfo from '../component/CharacterCard'

function CharacterInfoPage() {
    const { id } = useParams()
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <CharacterInfo id={parseInt(id, 10)} />
        </Grid>
    )
}

export default CharacterInfoPage
