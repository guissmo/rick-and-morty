import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { observer } from 'mobx-react'
import { Box } from '@mui/material'
import mainStore from '../store/CharacterGridStore'

export default observer(function FilterSelect() {
    return (
        <Box padding={1}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="filter-label">Status</InputLabel>
                <Select
                    labelId="filter-label"
                    id="select-label"
                    value={mainStore.filter}
                    onChange={(e, v) => mainStore.changeFilter(v.props.value)}
                    label="Status"
                >
                    <MenuItem value={'none'}>all</MenuItem>
                    <MenuItem value={'alive'}>alive</MenuItem>
                    <MenuItem value={'dead'}>dead</MenuItem>
                    <MenuItem value={'unknown'}>unknown status</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
})
