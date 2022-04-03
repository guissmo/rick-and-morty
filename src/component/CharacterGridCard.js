/* eslint-disable no-unused-vars */
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
import CharacterGridCardImage from './CharacterGridCardImage'
import CharacterGridCardText from './CharacterGridCardText'

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
        this.infoArray = ['name', 'status', 'origin']
    }

    render() {
        return (
            <Card className="flex-column-parent flexer">
                <CharacterGridCardImage
                    image={this.data.image}
                    linkTo={`/characters/${this.id}`}
                />
                <CardContent className="flexer">
                    {Array.from(Array(this.infoArray.length).keys()).map(
                        (x) => {
                            return (
                                <CharacterGridCardText
                                    key={x}
                                    type={this.infoArray[x]}
                                    text={this.data[this.infoArray[x]]}
                                />
                            )
                        }
                    )}
                </CardContent>
                <CardActions>
                    <Link to={`/characters/${this.id}`}>
                        <Button size="small">More info</Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

export default observer(CharacterGridCard)
