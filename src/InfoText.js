import React from 'react'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import PetsIcon from '@mui/icons-material/Pets'
import BiotechIcon from '@mui/icons-material/Biotech'
import TvIcon from '@mui/icons-material/Tv'

class InfoText extends React.Component {
    constructor(props) {
        super(props)
        this.text = this.props.text
        this.infoType = this.props.type
    }

    render() {
        const sx = { fontSize: 'small' }
        let iconComponent
        switch (this.infoType) {
            case 'status':
                iconComponent = <MonitorHeartIcon sx={sx} />
                break
            case 'species':
                iconComponent = <PetsIcon sx={sx} />
                break
            case 'type':
                iconComponent = <BiotechIcon sx={sx} />
                break
            case 'location':
                iconComponent = <LocationOnIcon sx={sx} />
                break
            case 'origin':
                iconComponent = <ChildCareIcon sx={sx} />
                break
            case 'episodeCount':
                iconComponent = <TvIcon sx={sx} />
                break
            default:
                iconComponent = <MonitorHeartIcon sx={sx} />
        }
        if (this.text === '') {
            return ''
        }
        if (this.infoType !== 'episodeCount') {
            return (
                <Typography variant="body2" color="text.secondary">
                    {iconComponent}{' '}
                    {this.infoType
                        .toLowerCase()
                        .split(' ')
                        .map((word) => {
                            return word.charAt(0).toUpperCase() + word.slice(1)
                        })
                        .join(' ')}
                    : <b>{this.text}</b>
                </Typography>
            )
        }
        return (
            <Typography variant="body2" color="text.secondary">
                {iconComponent} Appeared in <b>{this.text}</b> episode
                {parseInt(this.text, 10) === '1' ? '' : 's'}.
            </Typography>
        )
    }
}

InfoText.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
}

export default InfoText
