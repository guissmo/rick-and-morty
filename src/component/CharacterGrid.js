/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import { observer } from 'mobx-react'
import CharacterCard from './CharacterGridCard'
import mainStore from '../store/CharacterGridStore'
import loadingImage from '../static/loading.png'

function CharacterCardGrid() {
    useEffect(() => {
        mainStore.fetchInfo()
    }, [])
    if (mainStore.error !== '') {
        return (
            <Box sx={{ flex: 1 }} padding={1}>
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    <Grid
                        item
                        key={1000}
                        lg={12}
                        style={{ textAlign: 'center' }}
                    >
                        <Typography variant="h1">
                            Nothing found in this dimension.
                        </Typography>
                        <Typography variant="h2">
                            Clear the filters and start from scratch?
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => {
                                mainStore.search = ''
                                mainStore.filter = 'none'
                                document.getElementById(
                                    'outlined-search'
                                ).value = ''
                                mainStore.fetchInfo('search')
                            }}
                        >
                            Clear
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        )
    }
    if (mainStore.loading) {
        return (
            <Box sx={{ flex: 1 }} padding={1}>
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {Array.from(Array(20).keys()).map((x) => {
                        return (
                            <Grid
                                item
                                key={1000 + x}
                                className="flex-column-parent"
                                lg={2}
                                style={{ maxWidth: 300 }}
                            >
                                <CharacterCard
                                    key={x}
                                    name={x}
                                    status={x}
                                    id={x}
                                    image={loadingImage}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        )
    }
    return (
        <Box sx={{ flex: 1 }} padding={1}>
            <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="stretch"
            >
                {Array.from(Array(mainStore.ids.length).keys()).map((x) => {
                    return (
                        <Grid
                            item
                            key={mainStore.ids[x]}
                            xl={2}
                            className="flex-column-parent"
                            style={{ maxWidth: 300 }}
                        >
                            <CharacterCard
                                key={x}
                                name={mainStore.names[x]}
                                status={mainStore.statuses[x]}
                                id={mainStore.ids[x]}
                                origin={mainStore.origins[x]}
                                image={mainStore.images[x]}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

// class CharacterCardGrid extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {
//         mainStore.fetchInfo()
//     }

//     render() {
//         if (mainStore.loading) {
//             return 'Loading...'
//         }
//         return (
//             <Box sx={{ flex: 1 }} padding={1}>
//                 <Grid
//                     container
//                     spacing={5}
//                     justifyContent="center"
//                     alignItems="stretch"
//                 >
//                     {[0, 1, 2, 3].map((x) => {
//                         return (
//                             <Grid item key={mainStore.ids[x]} lg={2}>
//                                 <CharacterCard
//                                     key={x}
//                                     name={mainStore.names[x]}
//                                     status={mainStore.statuses[x]}
//                                     id={mainStore.ids[x]}
//                                     image={mainStore.images[x]}
//                                 />
//                             </Grid>
//                         )
//                     })}
//                 </Grid>
//             </Box>
//         )
//     }
// }

export default observer(CharacterCardGrid)
