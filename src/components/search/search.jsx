import React, {Component} from "react";
import './search.css'

export default class Search extends Component {
    state = {
        search: ''
    }

    onSearch = (event) => {
        // получаем данные из импута
        const {value} = event.target;

        this.setState({
            search: value
        })
    }

    onPushEnter = (event) => {
        // получить код нажатой клавиши
        const {code} = event;
        const buttonClick = event.target.nodeName;

        const {toSearch} = this.props;
        const search = this.state.search;

        if (code === 'Enter' || buttonClick === 'BUTTON') toSearch(search);
    }

    render() {
        const {search} = this.state;

        return(
            <div className="row movie__search">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder='search'
                        type="search"
                        value={search}
                        onChange={this.onSearch}
                        onKeyDown={this.onPushEnter}
                    />

                    <button
                        className='btn search__btn'
                        onClick={this.onPushEnter}
                    >Search</button>
                </div>
            </div>
        )
    }
}