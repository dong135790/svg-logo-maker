const Triangle = require('./triangle')
const Square = require('./square')
const Circle = require('./circle')

describe('Triangle', () => {
    it('Should output a blue triangle', () => {
        // A test is created
        const shape = new Triangle();
        shape.setColor("blue");
        const b = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        // // Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
        expect(shape.render(b)).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');  
    })
})

describe('Circle', () => {
    it('Should output a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        const b = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        // // Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
        expect(shape.render(b)).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');  
    })
})

describe('Square', () => {
    it('Should output a blue square', () => {
        const shape = new Square();
        shape.setColor("blue");
        const b = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        // // Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
        expect(shape.render(b)).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');  
    })
})
