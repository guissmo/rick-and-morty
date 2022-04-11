/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Card, CardContent, CardActions } from '@mui/material'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
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
                <Link
                    className="flex-column-parent flexer"
                    to={`/characters/${this.id}`}
                >
                    <CharacterGridCardImage
                        image={this.data.image}
                        loading={mainStore.loading}
                    />
                </Link>
                <CardContent className="flexer height-fixed">
                    {Array.from(Array(this.infoArray.length).keys()).map(
                        (x) => {
                            return (
                                <CharacterGridCardText
                                    key={x}
                                    type={this.infoArray[x]}
                                    text={this.data[this.infoArray[x]]}
                                    loading={mainStore.loading}
                                />
                            )
                        }
                    )}
                </CardContent>
                <CardActions>
                    <Link to={`/characters/${this.id ? this.id : ''}`}>
                        <Button size="small">More info</Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

export default observer(CharacterGridCard)
