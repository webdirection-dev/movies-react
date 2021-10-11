import React, {Component} from "react";
import Search from "../components/search";
import MoviesList from "../components/moviesList";
import Preloader from "../components/preloader/preloader";
import './layout.css'

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moviesList: null
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData('matrix');
    }

    async getData(str) {
        const url = `http://www.omdbapi.com/?apikey=9130863b&s=${str}`;
        await fetch(url)
            .then(response => response.json())
            .then(response => {this.setState({moviesList: response.Search})})
            .catch(error => console.error(error));
    }

    toSearch = (str) => {
        this.getData(str);
        // мой вариант
        // const arr = [];
        //
        // this.state.moviesList.forEach(item => {
        //     if (item.Title.includes(str)) {
        //         arr.push(item)
        //     }
        // });
        //
        // this.setState({
        //     moviesList: arr
        // })
    }

    render() {
        const {moviesList} = this.state;

        return(
            <>
                <main className='container content'>
                    <div className="main__preloader">
                        {!moviesList ? <Preloader/> : null}
                    </div>

                    <Search
                        toSearch={this.toSearch}
                        getData={this.getData}
                    />

                    {
                        !moviesList ? null : <MoviesList moviesList={moviesList}/>
                    }
                </main>
            </>
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