import React from 'react'
import Banner from './Banner'
import NewBook from './NewBook'
import ListBook from './ListBook'
import ListMovieByGenre from './ListMovieByGenre'
import IntroComponent from '../FerComponent/IntroComponent'

function HomeBody() {
    return (
        <>
            <Banner />
            <NewBook />
            <ListMovieByGenre />
            <ListMovieByGenre />
            <ListBook />

        </>
    )
}

export default HomeBody