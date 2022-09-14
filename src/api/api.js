import axios from "axios";

//Chat endpoints
export const jokeAPI = {
    //Chuck's jokes
    getChucksJoke() {
        return axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => response)
    },
};


