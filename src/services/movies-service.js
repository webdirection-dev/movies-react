export default class MoviesService {
    _apiBase = 'http://www.omdbapi.com/?apikey=9130863b&';

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok){
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }

        return await response.json();
    }

    async getMoviesList(movieTitle) {
        return await this.getResource(`s=${movieTitle}`)
    }

    async getMovieDetails(movieId) {
        return await this.getResource(`i=${movieId}&plot=full`)
    }
}