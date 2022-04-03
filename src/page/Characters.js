import React, { Fragment } from 'react'
import { observer } from 'mobx-react'
import CharacterCardGrid from '../component/CharacterGrid'
import SearchBarAndFilter from '../component/SearchCombo'
import CenteredPagination from '../component/PaginationControlled'

function MainPage() {
    return (
        <Fragment>
            <SearchBarAndFilter />
            <CenteredPagination />
            <CharacterCardGrid />
            <CenteredPagination />
        </Fragment>
    )
}

export default observer(MainPage)
