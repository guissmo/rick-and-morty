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
        this.data = {
            name: this.props.name,
            status: this.props.status,
            origin: this.props.origin,
            image: this.props.image,
        }
        this.infoArray = ['status', 'origin']
        this.height = 300
        this.linkHref = `/characters/${this.id}`
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
                        width={300}
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
            status: this.data.status,
            type: this.data.type,
            species: this.data.species,
            location: this.data.location,
            origin: this.data.origin,
            episodeCount: this.data.episodeCount,
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
                                width={300}
                                image={this.data.image}
                                alt={this.data.name}
                                style={{ backgroundSize: 'cover' }}
                            />
                        </Fade>
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            height={this.height}
                            animation="wave"
                            width={300}
                        />
                    )}
                    <img
                        style={{ display: 'none' }}
                        src={this.data.image}
                        onLoad={() => this.setState({ imageLoaded: true })}
                    />
                </Link>
                <CardContent className="flexer">
                    <Typography component="div" variant="h5">
                        {this.data.name}
                    </Typography>
                    {this.infoArray.map((x) => (
                        <InfoText
                            key={10000 + Math.random() * 100} // FIX!!!!!!!!!
                            type={x}
                            text={content[x]}
                        />
                    ))}
                </CardContent>
                <CardActions>
                    <Link to={this.linkHref}>
                        <Button size="small">More info</Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

export default observer(CharacterGridCard)
