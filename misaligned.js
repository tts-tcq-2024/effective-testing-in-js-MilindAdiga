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

const expectedOutput = `0 | White | Blue
1 | White | Orange
2 | White | Green
3 | White | Brown
4 | White | Slate
5 | Red | Blue
6 | Red | Orange
7 | Red | Green
8 | Red | Brown
9 | Red | Slate
10 | Black | Blue
11 | Black | Orange
12 | Black | Green
13 | Black | Brown
14 | Black | Slate
15 | Yellow | Blue
16 | Yellow | Orange
17 | Yellow | Green
18 | Yellow | Brown
19 | Yellow | Slate
20 | Violet | Blue
21 | Violet | Orange
22 | Violet | Green
23 | Violet | Brown
24 | Violet | Slate`;

expect(execSync('node misaligned.js').toString().trim()).equals(expectedOutput);

console.log('All is well (maybe!)');
