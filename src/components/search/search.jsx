import React, {Component} from "react";
import './search.css'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.focusRef = React.createRef();
    }

    componentDidMount() {
        // фокус в строке поиска при отрисовке компонента
        this.focusRef.current.focus();
    }

    onSearch = (event) => {
        const {toPutNameToSearch} = this.props;

        // получаем данные из импута
        const {value} = event.target;

        this.setState({
            search: value
        })

        let type = value;
        if (value === '') type = 'all';

        toPutNameToSearch(type)
    }

    onPushEnter = (event) => {
        // получить код нажатой клавиши
        const {code} = event;
        const buttonClick = event.target.nodeName;

        const {toSearch} = this.props;

        if (code === 'Enter' || buttonClick === 'BUTTON') toSearch();
    }

    render() {
        const {search} = this.state;

        return(
            <View
                search={search}
                onSearch={this.onSearch}
                onPushEnter={this.onPushEnter}
                focusRef={this.focusRef}
            />
        )
    }
}

const View = ({search, onSearch, onPushEnter, focusRef}) => {
    return(
        <div className="row movie__search">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder='search'
                    type="search"
                    value={search}
                    onChange={onSearch}
                    onKeyDown={onPushEnter}
                    ref={focusRef}
                />

                <button
                    className='btn search__btn'
                    onClick={onPushEnter}
                >Search</button>
            </div>
        </div>
    )
}