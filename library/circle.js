const Shapes = require('./shapes')

class Circle extends Shapes {
    constructor(characters, textColor, shape, shapeColor) {
        super(characters, textColor, shape, shapeColor);
    }
}

module.exports = Circle;

