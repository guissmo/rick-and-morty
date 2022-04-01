import React from 'react'
import { Box, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CharacterInfo from './CharacterInfo'
import CharacterInfoPageStore from './CharacterInfoPageStore'

class CharacterCard extends CharacterInfo {
    constructor(props) {
        super(props)
        this.store = new CharacterInfoPageStore(Math.floor(Math.random() * 800))
        this.infoArray = ['status']
        this.height = 300
        this.cardActions = (
            <Link to="/characters/1">
                <Button size="small">More info</Button>
            </Link>
        )
    }
}

function CharacterCardGrid() {
    return (
        <Box sx={{ flex: 1 }} padding={1}>
            <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="stretch"
            >
                <Grid item sm={2}>
                    <CharacterCard />
                </Grid>
                <Grid item sm={2}>
                    <CharacterCard />
                </Grid>
                <Grid item sm={2}>
                    <CharacterCard />
                </Grid>
                <Grid item sm={2}>
                    <CharacterCard />
                </Grid>
                {/* <Grid item md={3} className="grid">
                    <CharacterCard mini />
                </Grid>
                <Grid item md={3} className="grid">
                    <CharacterCard mini />
                </Grid>
                <Grid item md={3} className="grid">
                    <CharacterCard mini />
                </Grid>
                <Grid item md={3} className="grid">
                    <CharacterCard mini />
                </Grid>
                <Grid item md={3} className="grid">
                    <CharacterCard mini />
                </Grid> */}
            </Grid>
        </Box>
    )
}

export default CharacterCardGrid
