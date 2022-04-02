import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
// import CharacterInfoPageStore from './CharacterInfoPageStore'
import CharacterInfo from './CharacterInfo'

class CharacterCard extends CharacterInfo {
    constructor(props) {
        super(props)
        this.id = this.props.id
        this.store = {
            name: this.props.name,
            status: this.props.status,
            image: this.props.image,
        }
        this.infoArray = ['status']
        this.height = 300
        this.cardActions = (
            <Link to={`/characters/${this.id}`}>
                <Button size="small">More info</Button>
            </Link>
        )
    }

    componentDidMount() {
        console.log(this.id * 0)
    }
}

export default CharacterCard
