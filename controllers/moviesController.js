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
        console.log(id, petition, title, languaje, genero, popularity);
    }

    saveTranslationsMovieDetails(id = 0, petition = 'GET', name = []) {
        let nameFilter = [];

        name.map(it => nameFilter.push(it.english_name));
    }
}

module.exports = new moviesController();