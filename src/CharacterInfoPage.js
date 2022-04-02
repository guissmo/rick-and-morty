/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Container,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material'
import { observer } from 'mobx-react'
import CharacterInfo from './CharacterInfo'

function CharacterInfoPage() {
    const { id } = useParams()

    return (
        <Container sx={{ width: 500 }}>
            <CharacterInfo id={id} />
        </Container>
    )
}

export default CharacterInfoPage
