import React, {Component} from "react";
import './moviesList.css';
// import MovieItem from "../movieItem";
import Preloader from "../preloader/preloader";

export default class MoviesList extends Component{
    render() {
        // По умолчанию moviesList = [] для того чтобы отрисовывать <h4>Nothing found</h4>
        const {moviesList = []} = this.props;

        if (!moviesList) return <Preloader/>;

        return(
            <div className='moviesList'>
                {moviesList.length ? View(moviesList) : <h4>Nothing found</h4>}
            </div>
        )
    }
};

const View = (moviesList) => {
    return(
        moviesList.map(item => {
            const {
                Title: title,
                Year: year,
                imdbID: id,
                Type: type,
                Poster: poster
            } = item;

            return (
                <div key={id} id={id} className="card movieItem">
                    <div className="card-image waves-effect waves-block waves-light">
                        {
                            poster === 'N/A' ?
                                <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`} alt={title} />
                                :
                                <img className="activator" src={poster} alt={title} />
                        }
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{title}</span>
                        <p>
                            {year}
                            <span className='right'>{type}</span>
                        </p>
                    </div>
                </div>
            )
        })
    )
};