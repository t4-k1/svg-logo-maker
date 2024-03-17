const { Circle, Triangle, Square } = require('./shapes')

describe('Circle', () => {
  test('generateSVG method generates correct SVG code', () => {
    const color = '#ff0000' //red
    const expectedSVG = `<circle cx="50" cy="50" r="50" fill="${color}" />`

    expect(Circle.generateSVG(color)).toEqual(expectedSVG)
  })
})

describe('Triangle', () => {
  test('generateSVG method generates correct SVG code', () => {
    const color = '#00ff00' //green
    const expectedSVG = `<polygon points="5,95 50,5 95,95" fill="${color}" />`

    expect(Triangle.generateSVG(color)).toEqual(expectedSVG)
  })
})

describe('Square', () => {
  test('generateSVG method generates correct SVG code', () => {
    const color = '#0000ff' //blue
    const expectedSVG = `<rect x="5" y="5" width="90" height="90" fill="${color}" />`

    expect(Square.generateSVG(color)).toEqual(expectedSVG)
  })
})
