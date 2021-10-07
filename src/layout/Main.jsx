import React from "react";
import './layout.css'

import MoviesList from "../components/moviesList";

const Main = () => {
    return(
        <main className='container content'>
            <MoviesList />
        </main>
    )
};

export default Main;