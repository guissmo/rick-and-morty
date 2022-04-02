/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
import CharacterInfoPageStore from './CharacterInfoPageStore'
import InfoText from './InfoText'
import routerStore from './RouterStore'

class CharacterInfo extends React.Component {
    constructor(props) {
        super(props)
        this.store = new CharacterInfoPageStore(this.props.id)
        this.infoArray = [
            'status',
            'type',
            'species',
            'location',
            'origin',
            'episodeCount',
        ]
        this.height = 500
        this.linkHref = routerStore.back
        this.cardActions = (
            <Button size="small" onClick={routerStore.back}>
                Go back
            </Button>
        )
    }

    componentDidMount() {
        this.store.fetchInfo()
    }

    render() {
        if (this.store.loading) {
            return 'Loading...'
        }

        const content = {
            status: this.store.status,
            type: this.store.type,
            species: this.store.species,
            location: this.store.location,
            origin: this.store.origin,
            episodeCount: this.store.episodeCount,
        }

        return (
            <Card className="flex-column-parent flexer">
                <Link className="flex-column-parent flexer" to={this.linkHref}>
                    <CardMedia
                        component="img"
                        height={this.height}
                        image={this.store.image}
                        alt={this.store.name}
                        style={{ backgroundSize: 'cover' }}
                    />
                </Link>
                <CardContent className="flexer">
                    <Typography component="div" variant="h5">
                        {this.store.name}
                    </Typography>
                    {this.infoArray.map((x) => (
                        <InfoText
                            key={Math.random() * 100} // FIX!!!!!!!!!
                            type={x}
                            text={content[x]}
                        />
                    ))}
                </CardContent>
                <CardActions>{this.cardActions}</CardActions>
            </Card>
        )
    }
}

export default observer(CharacterInfo)
