import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CharacterInfo from './CharacterCard'

class CharacterCard extends CharacterInfo {
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
    }

    componentDidMount() {
        // eslint-disable-next-line no-unused-vars
        const { id } = this
    }
}

export default CharacterCard
