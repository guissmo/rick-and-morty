/* eslint-disable react/prop-types */
import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Skeleton,
} from '@mui/material'
import { observer } from 'mobx-react'
import Fade from '@material-ui/core/Fade'
import infoStore from '../store/CharacterInfoPageStore'
import InfoText from './InfoText'
import routerStore from '../store/RouterStore'

class CharacterCard extends React.Component {
    constructor(props) {
        super(props)
        infoStore.fetchInfo(this.props.id)
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
        this.state = {
            imageLoaded: false,
        }
    }

    render() {
        if (infoStore.loading) {
            return (
                <Card>
                    <Skeleton
                        variant="rectangular"
                        width={500}
                        height={this.height}
                        animation="wave"
                    />
                    <CardContent>
                        <Typography component="div" variant="h5">
                            <Skeleton animation="wave" />
                        </Typography>
                        {Array.from(Array(this.infoArray.length).keys()).map(
                            (x) => (
                                <Skeleton animation="wave" key={x} />
                            )
                        )}
                    </CardContent>
                    <CardActions>{this.cardActions}</CardActions>
                </Card>
            )
        }

        const content = {
            status: infoStore.status,
            type: infoStore.type,
            species: infoStore.species,
            location: infoStore.location,
            origin: infoStore.origin,
            episodeCount: infoStore.episodeCount,
        }

        return (
            <Card>
                {this.state.imageLoaded ? (
                    <Fade
                        in={this.state.imageLoaded}
                        timeout={Math.random() * 200 + 800}
                    >
                        <CardMedia
                            component="img"
                            height={this.height}
                            image={infoStore.image}
                            alt={infoStore.name}
                            style={{
                                backgroundSize: 'cover',
                                cursor: 'pointer',
                            }}
                            onClick={routerStore.back}
                        />
                    </Fade>
                ) : (
                    <Skeleton
                        variant="rectangular"
                        width={500}
                        height={this.height}
                        animation="wave"
                    />
                )}
                <img
                    style={{ display: 'none' }}
                    src={infoStore.image}
                    onLoad={() => this.setState({ imageLoaded: true })}
                />
                <CardContent sx={{ height: 180 }}>
                    <Typography component="div" variant="h5">
                        {infoStore.name}
                    </Typography>
                    {this.infoArray.map((x) => (
                        <InfoText
                            key={10000 + Math.random() * 100} // FIX!!!!!!!!!
                            type={x}
                            text={String(content[x])}
                        />
                    ))}
                </CardContent>
                <CardActions>{this.cardActions}</CardActions>
            </Card>
        )
    }
}

export default observer(CharacterCard)
