var API_URL = require('../config/config').API_URL;

var API_KEY = require('../config/config').API_KEY;

const axios = require('axios');

class moviesController {

    constructor(options) {
        this.option = options
    }

    async getMovieFilter(id) {
        const data = await axios.get(`${API_URL}${id}?api_key=${API_KEY}&language=en-US`);
    
        return data;
    }

    async getMovieTranslationsFilter(id) {
        const data = await axios.get(`${API_URL}${id}/translations?api_key=${API_KEY}`);
    
        return data;
    }

    saveMovieDetails(id = 0, petition = 'GET', title = 'Not found', languaje = 'en', genero = [], popularity = 0) {
        const url = 'http://localhost:4000/movies/details';

        const info = {id, petition, title, languaje, genero, popularity};

        this.saveInfo(url, info);
    }

    saveTranslationsMovie(id = 0, petition = 'GET', name = []) {
        let nameFilter = [];

        name.map(it => nameFilter.push(it.english_name));

        const info = {id, petition, nameFilter};

        const url = 'http://localhost:4000/movies/tranlations';

        this.saveInfo(url, info);
    }

    async saveInfo(url, info) {
        await axios.post(url, info)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = new moviesController();