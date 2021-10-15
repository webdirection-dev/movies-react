import React from "react";
import './layout.css';
import Search from "../components/search";

import MoviesList from "../components/moviesList";

const Main = () => {
    return(
        <main className='container content'>
            <Search />
            <MoviesList />
        </main>
    )
};

export default Main;



// import React, {Component} from "react";
// import Search from "../components/search";
// import Radio from "../components/radio";
// import MoviesList from "../components/moviesList";
// import Preloader from "../components/preloader/preloader";
// import './layout.css'
//
// export default class Main extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             moviesList: null,
//             search: null
//         }
//
//         this.getData = this.getData.bind(this);
//         this.toSearch = this.toSearch.bind(this);
//     }
//
//     componentDidMount() {
//         this.getData('matrix');
//     }
//
//     async getData(name, type='') {
//         let url = null;
//         if (type === '' || type === 'all') url = `http://www.omdbapi.com/?apikey=9130863b&s=matrix`;
//         url = `http://www.omdbapi.com/?apikey=9130863b&s=${name}&type=${type}`;
//
//         console.log(url)
//
//         await fetch(url)
//             .then(response => response.json())
//             .then(response => {this.setState({moviesList: response.Search})})
//             .catch(error => console.error(error));
//     }
//
//     async toSearch(name) {
//         await this.getData(name);
//
//         await this.setState({
//             search: name
//         })
//     }
//
//     render() {
//         const {moviesList, search} = this.state;
//
//         return(
//             <>
//                 <main className='container content'>
//                     <div className="main__preloader">
//                         {!moviesList ? <Preloader/> : null}
//                     </div>
//
//                     <Search
//                         toSearch={this.toSearch}
//                         getData={this.getData}
//                     />
//
//                     <Radio getData={this.getData} search={search}/>
//
//                     {
//                         !moviesList ? null : <MoviesList moviesList={moviesList}/>
//                     }
//                 </main>
//             </>
//         )
//     }
// };