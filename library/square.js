const Shapes = require('./shapes')

class Square extends Shapes {
    constructor(characters, textColor, shape, shapeColor) {
        super(characters, textColor, shape, shapeColor);
    }
}

module.exports = Square;