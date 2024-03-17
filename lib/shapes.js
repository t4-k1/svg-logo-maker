class Circle {
  static generateSVG(shapeColor, textColor, text) {
    return `<circle cx="50" cy="50" r="50" fill="${shapeColor}" />
                 <text x="50" y="50" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>`
  }
}

class Triangle {
  static generateSVG(shapeColor, textColor, text) {
    return `<polygon points="5,95 50,5 95,95" fill="${shapeColor}" />
                 <text x="50" y="50" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>`
  }
}

class Square {
  static generateSVG(shapeColor, textColor, text) {
    return `<rect x="5" y="5" width="90" height="90" fill="${shapeColor}" />
                 <text x="50" y="50" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>`
  }
}

module.exports = { Circle, Triangle, Square }
