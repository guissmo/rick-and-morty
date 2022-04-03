/* eslint-disable react/prop-types */
import React from 'react'
import {
    Button,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Skeleton,
} from '@mui/material'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import InfoText from './InfoText'
import mainStore from '../store/CharacterGridStore'

class CharacterGridCard extends React.Component {
    constructor(props) {
        super(props)
        this.id = this.props.id
        this.store = {
            name: this.props.name,
            status: this.props.status,
            origin: this.props.origin,
            image: this.props.image,
        }
        this.infoArray = ['status', 'origin']
        this.height = 300
        this.linkHref = `/characters/${this.id}`
        this.cardActions = (
            <Link to={this.linkHref}>
                <Button size="small">More info</Button>
            </Link>
        )
        this.state = {
            imageLoaded: false,
        }
    }

    render() {
        if (mainStore.loading) {
            return (
                <Card className="flex-column-parent flexer">
                    <Skeleton
                        variant="rectangular"
                        height={this.height}
                        animation="wave"
                        sx={{ width: '100%', minWidth: '252px' }}
                    />
                    <CardContent className="flexer">
                        <Typography component="div" variant="h5">
                            <Skeleton animation="wave" />
                        </Typography>
                        {this.infoArray.map(() => (
                            <Skeleton
                                key={10000 + Math.random() * 100}
                                animation="wave"
                            />
                        ))}
                    </CardContent>
                    <CardActions>{this.cardActions}</CardActions>
                </Card>
            )
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
                    {this.state.imageLoaded ? (
                        <Fade
                            in={this.state.imageLoaded}
                            timeout={Math.random() * 200 + 800}
                        >
                            <CardMedia
                                component="img"
                                height={this.height}
                                image={this.store.image}
                                alt={this.store.name}
                                style={{ backgroundSize: 'cover' }}
                            />
                        </Fade>
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            height={this.height}
                            animation="wave"
                            sx={{ width: '100%', minWidth: '252px' }}
                        />
                    )}
                    <img
                        style={{ display: 'none' }}
                        src={this.store.image}
                        onLoad={() => this.setState({ imageLoaded: true })}
                    />
                </Link>
                <CardContent className="flexer">
                    <Typography component="div" variant="h5">
                        {this.store.name}
                    </Typography>
                    {this.infoArray.map((x) => (
                        <InfoText
                            key={10000 + Math.random() * 100} // FIX!!!!!!!!!
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

export default observer(CharacterGridCard)
