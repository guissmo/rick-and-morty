import React from 'react'
import { Container, Stack, Pagination } from '@mui/material'
import { observer } from 'mobx-react'
import mainStore from './CharacterGridStore'

function CenteredPagination() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Stack padding={1} alignItems="center" justifyContent="center">
                <Pagination
                    count={mainStore.totalPages()}
                    page={mainStore.page}
                    onChange={(e, v) => {
                        mainStore.page = v
                        mainStore.fetchInfo()
                        console.log(v, mainStore.page)
                    }}
                />
            </Stack>
        </Container>
    )
}

export default observer(CenteredPagination)
