const blend = require('@mapbox/blend');
const { writeFile } = require('fs');
const { join } = require('path');
const isNil = require('lodash/isNil');

const { IMAGE_FORMAT, DEFAULT_IMAGE_NAME } = require('./constant');

const getBlendedImage = (image1, image2, width, height) => {

    if(isNil(image1) || isNil(image2)) return Promise.reject("Provide images to blend");

    if(isNil(width) || isNil(height)) return Promise.reject('Provide image width and height');

    return new Promise((resolve, reject) => {
        blend([{
            buffer: image1,
            x: 0,
            y: 0,
        }, {
            buffer: image2,
            x: width,   // second image will start from the 1st image end
            y: 0,
        }], {
            width: width * 2,   // new image width will be two image width
            height: height,
            format: IMAGE_FORMAT,
        }, (err, data) => {
            if(err) {
                console.error(err);
                return reject('Something went wrong in blending the image');
            } else {
                return resolve(data);
            }
        });
    });
}

const saveImage = (data, imageName) => {

    imageName = isNil(imageName) ? DEFAULT_IMAGE_NAME : imageName;
    const fileOut = join(process.cwd(), `/${imageName}`);

    return new Promise((resolve, reject) => {
        writeFile(fileOut, data, 'binary', (err) => {
            if (err) {
                console.log(err);
                return reject('Something went wrong in saving the file.');
            }
            return resolve('The file was saved!');
        });
    });


}

module.exports = {
    getBlendedImage,
    saveImage,
}