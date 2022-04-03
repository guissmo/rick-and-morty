import React from 'react'
import { Container, Stack, Pagination } from '@mui/material'
import { observer } from 'mobx-react'
import mainStore from '../store/CharacterGridStore'

function CenteredPagination() {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Stack padding={1} alignItems="center" justifyContent="center">
                <Pagination
                    count={mainStore.totalPages()}
                    color="primary"
                    page={mainStore.page}
                    onChange={(e, v) => {
                        mainStore.page = v
                        mainStore.fetchInfo()
                    }}
                />
            </Stack>
        </Container>
    )
}

export default observer(CenteredPagination)
