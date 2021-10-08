import React, {Component} from "react";
import MoviesList from "../components/moviesList";
import Preloader from "../components/preloader/preloader";
import './layout.css'

export default class Main extends Component {
    state = {
        moviesList: null
    }

    async componentDidMount() {
        const url = 'http://www.omdbapi.com/?apikey=9130863b&s=matrix';
        await fetch(url)
            .then(response => response.json())
            .then(response => {this.setState({moviesList: response.Search})})
            .catch(error => console.error(error));
    }

    render() {
        const {moviesList} = this.state;

        return(
            <main className='container content'>
                {
                    !moviesList ? <Preloader /> : <MoviesList moviesList={moviesList}/>
                }
            </main>
        )
    }
};


// Мой вариант
// import React from "react";
// import './layout.css'
//
// import MoviesList from "../components/moviesList";
//
// const Main = () => {
//     return(
//         <main className='container content'>
//             <MoviesList />
//         </main>
//     )
// };
//
// export default Main;