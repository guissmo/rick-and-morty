/* eslint-disable react/prop-types */
import React from 'react'
import { CardMedia, Skeleton } from '@mui/material'
import { observer } from 'mobx-react'
import Fade from '@material-ui/core/Fade'

class CharacterGridCardImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageLoaded: false,
        }
    }

    render() {
        let cardMedia = (
            <Skeleton
                variant="rectangular"
                height={300}
                animation="wave"
                width={300}
            />
        )
        if (!this.props.loading && this.state.imageLoaded) {
            cardMedia = (
                <Fade
                    in={this.state.imageLoaded}
                    timeout={Math.random() * 200 + 800}
                >
                    <CardMedia
                        component="img"
                        height={300}
                        width={300}
                        image={this.props.image}
                        style={{ backgroundSize: 'cover' }}
                    />
                </Fade>
            )
        }
        return (
            <span>
                {cardMedia}
                <img
                    style={{ display: 'none' }}
                    src={this.props.image}
                    onLoad={() => this.setState({ imageLoaded: true })}
                />
            </span>
        )
    }
}

export default observer(CharacterGridCardImage)
