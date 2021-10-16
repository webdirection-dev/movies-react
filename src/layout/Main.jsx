import React, {Component} from "react";
import Forms from "../components/forms";
import MoviesList from "../components/moviesList";
import Preloader from "../components/preloader/preloader";
import './layout.css';
import MoviesService from "../services/movies-service";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moviesList: null,
            nameForURL: 'all',
            typeForURL: null
        }

        this.toSearch = this.toSearch.bind(this);
        this.toPutNameToSearch = this.toPutNameToSearch.bind(this);
        this.toPutTypeToSearch = this.toPutTypeToSearch.bind(this);
    }

    getData = new MoviesService();

    componentDidMount() {
        const {nameForURL, typeForURL} = this.state;
        this.dataForMovies(nameForURL, typeForURL)
    }

    dataForMovies = (name, type) => {
        this.getData.getMoviesList(name, type)
            .then(response => {
                this.setState({
                    moviesList: response.Search
                })
            })
            .catch(error => console.error(error));
    }

    // Записать в state название фильма из строки поиска для формирования запроса get
    toPutNameToSearch(url) {
        const {typeForURL} = this.state;

        this.setState({
            nameForURL: url
        })

        this.dataForMovies(url, typeForURL)
    }

    // toPutNameToSearch(url=this.state.nameForURL) {
    //     this.setState({
    //         nameForURL: url
    //     })
    // }

    // Записать в state тип фильма из строки поиска для формирования запроса get
    toPutTypeToSearch(type) {
        const {nameForURL} = this.state;

        this.setState({
            typeForURL: type
        })

        this.dataForMovies(nameForURL, type)
    }

    // toPutTypeToSearch(type=this.state.typeForURL) {
    //     this.setState({
    //         typeForURL: type
    //     })
    // }

    toSearch() {
        const {nameForURL, typeForURL} = this.state;
        this.dataForMovies(nameForURL, typeForURL)
    }

    // toSearch() {
    //     const {nameForURL, typeForURL} = this.state;
    //     this.dataForMovies(nameForURL, typeForURL)
    // }

    render() {
        const {moviesList} = this.state;

        return(
            <>
                <main className='container content'>
                    <div className="main__preloader">
                        {!moviesList ? <Preloader/> : null}
                    </div>

                    <Forms
                        toPutNameToSearch={this.toPutNameToSearch}
                        toPutTypeToSearch={this.toPutTypeToSearch}
                        toSearch={this.toSearch}
                    />

                    {
                        !moviesList ? null : <MoviesList moviesList={moviesList}/>
                    }
                </main>
            </>
        )
    }
};