/* eslint-disable react/prop-types */
import React from 'react'
import { Typography, Skeleton } from '@mui/material'
import { observer } from 'mobx-react'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import PetsIcon from '@mui/icons-material/Pets'
import BiotechIcon from '@mui/icons-material/Biotech'
import TvIcon from '@mui/icons-material/Tv'

function MyIcon(props) {
    const sx = { fontSize: 'small' }
    switch (props.myType) {
        case 'status':
            return <MonitorHeartIcon sx={sx} />
        case 'species':
            return <PetsIcon sx={sx} />
        case 'type':
            return <BiotechIcon sx={sx} />
        case 'location':
            return <LocationOnIcon sx={sx} />
        case 'origin':
            return <ChildCareIcon sx={sx} />
        case 'episodeCount':
            return <TvIcon sx={sx} />
        default:
            return <MonitorHeartIcon sx={sx} />
    }
}

function MyActualText(props) {
    if (props.myType === 'episodeCount') {
        return (
            <span>
                Appeared in <b>{props.myText}</b> episode
                {parseInt(props.myText, 10) === 1 ? '' : 's'}
            </span>
        )
    }
    return (
        <span>
            {props.myType
                .toLowerCase()
                .split(' ')
                .map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1)
                })
                .join(' ')}
            : <b>{props.myText}</b>
        </span>
    )
}

class CharacterGridCardText extends React.Component {
    render() {
        if (this.props.loading) return <Skeleton animation="wave" />
        const variant = this.props.type === 'name' ? 'h5' : 'body2'
        let content = this.props.text
        if (this.props.type !== 'name' && this.props.type !== 'episodes') {
            content = (
                <span>
                    <MyIcon myType={this.props.type} />{' '}
                    <MyActualText
                        myType={this.props.type}
                        myText={this.props.text}
                    />
                </span>
            )
        }
        return (
            <Typography component="div" variant={variant}>
                {content}
            </Typography>
        )
    }
}

export default observer(CharacterGridCardText)
