const {expect} = require('chai');
const { execSync } = require('child_process');

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let output = '';
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            output += `${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}\n`;
        }
    }
    console.log(output.trim());
    return majorColors.length * minorColors.length;
}

const result = print_color_map();
expect(result).equals(25);

const expectedOutput = `0 | White | Blue`;

expect(execSync('node misaligned.js').toString().trim()).equals(expectedOutput);

console.log('All is well (maybe!)');
