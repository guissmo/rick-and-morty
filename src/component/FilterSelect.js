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
            <InputLabel id="demo-simple-select-standard-label">
                Filter
            </InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={mainStore.filter}
                onChange={(e, v) => {
                    mainStore.filter = v.props.value
                    mainStore.fetchInfo()
                }}
                label="Filter"
            >
                <MenuItem value={''}>No Filter</MenuItem>
                <MenuItem value={'alive'}>Alive</MenuItem>
                <MenuItem value={'dead'}>Dead</MenuItem>
                <MenuItem value={'unknown'}>Unknown</MenuItem>
            </Select>
        </FormControl>
    )
})
