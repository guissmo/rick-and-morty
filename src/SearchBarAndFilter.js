import { Button, TextField, Chip } from '@mui/material'

function SearchBarAndFilter() {
    return(
        <div className="row">
        <div className="col-lg-8">
        <TextField id="outlined-search" label="Search" type="search" size="small" className="bg"/>
        &nbsp;
        <Button variant="contained">
          Search
        </Button>
        </div>
        <div className="col-lg-4">
        <Chip label="Alive" />
        <Chip label="Dead" variant="outlined"/>
        <Chip label="Unknown" variant="outlined"/>        
        </div>
        </div>
    )
}

export default SearchBarAndFilter;
