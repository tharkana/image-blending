const fetch = require('node-fetch');
const isNil = require('lodash/isNil');

const { CAT_SERVICE_BASE_URL } = require('./constant');

/**
 * 
 * @param {object} params { text, width, height, color, size }
 * @returns 
 */
const getCatImage = (params) => {
    const url = getURL(params);
    return fetch(url).then(res => res.buffer()).catch((error) => {
        console.error(error);
        return Promise.reject('Something went wrong in downloading the image');
    });
}

const getURL = ({ text, width, height, color, size }) => {
    text = isNil(text) ? " " : text;
    return `${CAT_SERVICE_BASE_URL}/says/${text}?width=${width}&height=${height}&color=${color}&s=${size}`
}

module.exports = {
    getCatImage,
}