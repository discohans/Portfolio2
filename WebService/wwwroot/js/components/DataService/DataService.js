﻿define([], () => {
    const movieApiUrl = "api/title";
    const genreApiUrl = "api/genre";
    const typeApiUrl = "api/type";
    

    let getJson = (url, callback) => {
        fetch(url).then(response => response.json()).then(callback);
    };

    let getMovies = (url, callback) => {
        if (url === undefined) {
            url = movieApiUrl;
        }
        getJson(url, callback);
    };
    
    
    
    let getGenres = (url, callback) => {
        if(url === undefined) {
            url = genreApiUrl;
        }
        getJson(url, callback)
    };

    let getTypeNames = (url, callback) => {
        if(url === undefined) {
            url = typeApiUrl;
        }
        getJson(url, callback)
    };

    

    let getMoviesUrlWithPageSize = size => movieApiUrl + "?pageSize=" + size;


    return {
        getMovies,
        getMovie: getJson,
        getMoviesUrlWithPageSize,
        getGenres,
        getTypeNames
        
    };
});