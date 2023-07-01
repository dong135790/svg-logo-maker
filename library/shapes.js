class Shapes {
    constructor(characters, textColor, shape, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor
        return shapeColor
    };
    
    // Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
        // return '<polygon points="150, 18 244, 182 56, 182" fill='+ this.shapeColor +' />'
    }
    // function generateSVG(data) {
    //     return ` ${data.characters}
        
    //     `
    // } 
    // module.exports = generateSVG;
}

module.exports = Shapes;