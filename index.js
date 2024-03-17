const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Triangle, Square } = require('./lib/shapes')

async function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (value) => {
        return value.length <= 3 ? true : 'Please enter up to three characters.'
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ])
}

async function main() {
  try {
    const { text, textColor, shape, shapeColor } = await promptUser()

    let filename = 'logo.svg'
    let count = 1
    while (fs.existsSync(`./examples/${filename}`)) {
      filename = `logo${count}.svg`
      count++
    }

    let svgCode

    switch (shape.toLowerCase()) {
      case 'circle':
        svgCode = Circle.generateSVG(shapeColor, textColor, text)
        break
      case 'triangle':
        svgCode = Triangle.generateSVG(shapeColor, textColor, text)
        break
      case 'square':
        svgCode = Square.generateSVG(shapeColor, textColor, text)
        break
      default:
        console.log('Invalid shape!')
        return
    }

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">${svgCode}</svg>`
    fs.writeFileSync(`./examples/${filename}`, svgContent)
    console.log(`Generated ${filename}`)
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

main()
