import React, { Fragment } from 'react'
import CharacterCardGrid from '../component/CharacterGrid'
import SearchBarAndFilter from '../component/Search'
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

export default MainPage
