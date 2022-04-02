import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { observer } from 'mobx-react'
import mainStore from '../store/CharacterGridStore'

export default observer(function FilterSelect() {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="filter-label">Filter</InputLabel>
            <Select
                labelId="filter-label"
                id="select-label"
                value={
                    mainStore.filter === 'none' ? 'No Filter' : mainStore.filter
                }
                onChange={(e, v) => {
                    mainStore.filter = v.props.value
                    mainStore.fetchInfo()
                }}
                label="Filter"
            >
                <MenuItem value={'none'}>No Filter</MenuItem>
                <MenuItem value={'alive'}>Alive</MenuItem>
                <MenuItem value={'dead'}>Dead</MenuItem>
                <MenuItem value={'unknown'}>Unknown</MenuItem>
            </Select>
        </FormControl>
    )
})
