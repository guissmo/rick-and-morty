/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { observer } from 'mobx-react'
import CharacterCard from './CharacterCard'
import mainStore from './CharacterGridStore'
import loadingImage from './loading.png'

function CharacterCardGrid() {
    useEffect(() => {
        mainStore.fetchInfo()
    }, [])
    if (mainStore.loading) {
        return (
            <Box sx={{ flex: 1 }} padding={1}>
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {Array.from(Array(mainStore.numViewable).keys()).map(
                        (x) => {
                            return (
                                <Grid item key={1000 + x} lg={2}>
                                    <CharacterCard
                                        key={x}
                                        name={x}
                                        status={x}
                                        id={x}
                                        image={loadingImage}
                                    />
                                </Grid>
                            )
                        }
                    )}
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
                        <Grid item key={mainStore.ids[x]} xl={2}>
                            <CharacterCard
                                key={x}
                                name={mainStore.names[x]}
                                status={mainStore.statuses[x]}
                                id={mainStore.ids[x]}
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
