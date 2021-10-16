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
    // Берет Тип фильма из State а название из Компонента Search из строки поиска
    // Вызывает функцию dataForMovies для обработки запроса get
    toPutNameToSearch(url) {
        const {typeForURL} = this.state;

        this.setState({
            nameForURL: url
        })

        this.dataForMovies(url, typeForURL)
    }

    // Записать в state тип фильма из строки поиска для формирования запроса get
    // Берет Тип название из State а тип из Компонента Radio из строки поиска
    // Вызывает функцию dataForMovies для обработки запроса get
    toPutTypeToSearch(type) {
        const {nameForURL} = this.state;

        this.setState({
            typeForURL: type
        })

        this.dataForMovies(nameForURL, type)
    }

    // Вызовет dataForMovies при нажатии кнопки Search или нажатии клавиши Enter
    // По сути бесполезный метод тк toPutTypeToSearch и toPutNameToSearch делает это автоматически
    toSearch() {
        const {nameForURL, typeForURL} = this.state;
        this.dataForMovies(nameForURL, typeForURL)
    }

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