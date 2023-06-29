class Shapes {
    constructor(characters, textColor, shape, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    setColor(color) {
        return color
    }
    
    // Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render(renderShape) {
        return renderShape
    }
    // function generateSVG(data) {
    //     return ` ${data.characters}
        
    //     `
    // } 
    // module.exports = generateSVG;
}

module.exports = Shapes;