const API_KEY = process.env.REACT_APP_API_KEY;

export default class MoviesService {
    _apiBase = `https://www.omdbapi.com/?apikey=${API_KEY}`;

    async getResource(urlName, urlType) {
        const response = await fetch(`${this._apiBase}&s=${urlName}&type=${urlType}`);

        if (!response.ok){
            throw new Error(`Could not fetch ${urlName}, received ${response.status}`);
        }

        return await response.json();
    }

    async getMoviesList(movieTitle, type) {
        return await this.getResource(movieTitle, type)
    }

    async getMovieDetails(movieId) {
        return await this.getResource(`i=${movieId}&plot=full`)
    }
}