const Shapes = require('./shapes')

class Triangle extends Shapes {
    constructor(characters, textColor, shape, shapeColor) {
        super(characters, textColor, shape, shapeColor);
    }
}

module.exports = Triangle;