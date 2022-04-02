import React, { Fragment } from 'react'
import CharacterCardGrid from './CharacterCardGrid'
import SearchBarAndFilter from './SearchBarAndFilter'
import CenteredPagination from './CenteredPagination'

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
