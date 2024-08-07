const { expect } = require('chai');
const { Writable } = require('stream');
const { Console } = require('console');

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

// Capture the console output
const output = [];
const captureStream = new Writable({
    write(chunk, encoding, callback) {
        output.push(chunk.toString());
        callback();
    }
});
const customConsole = new Console({ stdout: captureStream });

const originalConsoleLog = console.log;
console.log = customConsole.log.bind(customConsole);

const result = print_color_map();
console.log = originalConsoleLog;
expect(result).to.equal(25);

const expectedOutput = `0 | White | Blue`;

expect(output.join('').trim()).to.equal(expectedOutput);

console.log('All is well (maybe!)');

