import React, {Component} from "react";
import MoviesService from "../../services/movies-service";

export default class MoviesList extends Component{

    state = {
        moviesList: null
    }

    getData = new MoviesService();

    componentDidMount() {
        this.getData.getMoviesList('matrix')
            .then(response => {
                this.setState({
                    moviesList: response.Search
                })
            })
            .catch(error => console.error(error));
    }

    render() {
        const {moviesList} = this.state;

        if (!moviesList) return <h1>Loaded</h1>;

        return(
            View(moviesList)
        )
    }
};

const View = (moviesList) => {
    return(
        moviesList.map(item => {
            const {Title, imdbID, Type, Poster} = item;
            return (
                <div key={imdbID} className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={Poster} alt={Title} />
                    </div>
                    <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{Title}<i
                                className="material-icons right">{Type}</i></span>
                        <p><a href="!#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><i
                                className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            )
        })
    )
};