import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import { observer } from 'mobx-react'
import CharacterInfo from '../component/CharacterCard'
import PageNotFound from './404'
import infoStore from '../store/CharacterInfoPageStore'

function CharacterInfoPage() {
    const { id } = useParams()

    if (infoStore.error) return <PageNotFound />
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

export default observer(CharacterInfoPage)
