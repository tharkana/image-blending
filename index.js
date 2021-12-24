const argv = require('minimist')(process.argv.slice(2));
const { getCatImage } = require('./catService');
const { getBlendedImage, saveImage } = require('./imageService');
const { populateDefaults } = require('./utils');

const {
    greeting,
    who,
    width,
    height,
    color,
    size,
} = populateDefaults(argv);


const startImageBlending = async ({
    greeting,
    who,
    width,
    height,
    color,
    size,
}) => {

    const image1 = await getCatImage({
        text: greeting,
        width,
        height,
        color,
        size,
    });

    const image2 = await getCatImage({
        text: who,
        width,
        height,
        color,
        size,
    });

    const blendedImage = await getBlendedImage(image1, image2, width, height);

    return saveImage(blendedImage);
};

startImageBlending({
    greeting,
    who,
    width,
    height,
    color,
    size,
})
.then((status) => {
    console.log(status);
})
.catch((err) => {
    console.log(err);
})