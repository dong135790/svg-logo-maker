const Shapes = require('./shapes')

class Circle extends Shapes {
    constructor(characters, textColor, shape, shapeColor) {
        super(characters, textColor, shape, shapeColor);
    }

    setColor(color) {
        return color
    }
    
    // Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render(renderShape) {
        return renderShape
    }
}

module.exports = Circle;

