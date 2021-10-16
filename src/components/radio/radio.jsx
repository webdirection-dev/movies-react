import React, {Component} from "react";
import './radio.css'

export default class Radio extends Component {
    state = {
        genre: ''
    }

    onChangeRadio = (event) => {
        const {toPutTypeToSearch} = this.props;
        const {name, value} = event.target;
        let valueToState = value;

        this.setState({
            [name]: valueToState
        });

        let type = value;
        if (value === 'all') type = null;

        toPutTypeToSearch(type);
    };

    render() {
        const {genre} = this.state

        return(
            <View
                genre={genre}
                onChangeRadio={this.onChangeRadio}
            />
        )
    }
}

const View = ({genre, onChangeRadio}) => {
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
                        onChange={onChangeRadio}
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
                        onChange={onChangeRadio}
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
                        onChange={onChangeRadio}
                    />
                    <span>Series</span>
                </label>
            </p>
        </form>
    )
}