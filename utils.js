const isNil = require('lodash/isNil');
const { 
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT,
    DEFAULT_COLOR,
    DEFAULT_SIZE,
    DEFAULT_GREETING,
    DEFAULT_WHO,
} = require('./constant');

const populateDefaults = ({
greeting,
who,
width,
height,
color,
size,}) => ({

    who : isNil(who) ? DEFAULT_WHO : who,
    greeting : isNil(greeting) ? DEFAULT_GREETING : greeting,
    width : isNil(width) ? DEFAULT_WIDTH : width,
    height : isNil(height) ? DEFAULT_HEIGHT : height,
    color : isNil(color) ? DEFAULT_COLOR : color,
    size : isNil(size) ? DEFAULT_SIZE : size,

});

module.exports = {
    populateDefaults,
}