import React, {Component} from "react";
import './radio.css'

export default class Radio extends Component {
    state = {
        genre: ''
    }

    onChangeRadio = (event) => {
        const {getData, search} = this.props;
        const {name, value} = event.target;
        let valueToState = value;

        this.setState({
            [name]: valueToState
        });

        console.log(search, value)
        // if (value === 'all') getData('all');
        getData(search, value);
    };

    render() {
        const {genre} = this.state

        return(
            <form className='movie__radio'>
                <p>
                    <label>
                        <input
                            name="genre"
                            type="radio"
                            checked={genre === '' || genre === 'all'}
                            value='all'
                            className='with-gap'
                            onChange={this.onChangeRadio}
                        />
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="genre"
                            type="radio"
                            checked={genre === 'movie'}
                            value='movie'
                            className='with-gap'
                            onChange={this.onChangeRadio}
                        />
                        <span>Movie</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="genre"
                            type="radio"
                            checked={genre === 'series'}
                            value='series'
                            className='with-gap'
                            onChange={this.onChangeRadio}
                        />
                        <span>Series</span>
                    </label>
                </p>
            </form>
        )
    }
}