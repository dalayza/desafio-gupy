var API_URL = require('../config/config').API_URL;

var API_KEY = require('../config/config').API_KEY;

const axios = require('axios');

class moviesController {

    constructor(options) {
        this.option = options
    }

    async getMovieFilter(id) {
        const data = await axios.get(`${API_URL}${id}?api_key=${API_KEY}`);
    
        return data;
    }
}

module.exports = new moviesController();