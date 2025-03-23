import React from 'react'
import Banner from '../FerComponent/Banner'
import NewBook from '../FerComponent/NewBook'
import ListBook from '../FerComponent/ListBook'
import ListMovieByGenre from '../FerComponent/ListMovieByGenre'
import Footer from '../FerComponent/Footer'

function HomeBody() {
    return (
        <>
            <Banner />
            <NewBook />
            <ListMovieByGenre genre={ "Hành động" } num={1}/>
            <ListMovieByGenre genre={ "" } num={2}/> 
            <ListBook />
            <Footer />
        </>
    )
}

export default HomeBody