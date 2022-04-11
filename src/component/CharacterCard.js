/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import { observer } from 'mobx-react'
import infoStore from '../store/CharacterInfoPageStore'
import routerStore from '../store/RouterStore'
import CharacterGridCardImage from './CharacterGridCardImage'
import CharacterGridCardText from './CharacterGridCardText'

class CharacterCard extends React.Component {
    constructor(props) {
        super(props)
        infoStore.fetchInfo(this.props.id)
        this.infoArray = [
            'name',
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
        return (
            <Card style={{ width: 300, maxWidth: 300 }}>
                <CharacterGridCardImage
                    image={infoStore.image}
                    linkTo={`/characters/${this.id}`}
                    loading={infoStore.loading}
                    onClick={routerStore.back}
                />
                <CardContent>
                    {Array.from(Array(this.infoArray.length).keys()).map(
                        (x) => {
                            return (
                                <CharacterGridCardText
                                    key={x}
                                    type={this.infoArray[x]}
                                    text={infoStore[this.infoArray[x]]}
                                    loading={infoStore.loading}
                                />
                            )
                        }
                    )}
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={routerStore.back}>
                        Go back
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default observer(CharacterCard)
