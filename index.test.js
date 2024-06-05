import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index.js';

test('Return a string with the first letter capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Return a string reversed', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
})

test('Calculator add', () => {
    const calc = calculator();
    expect(calc.add(2, 6)).toBe(8)
})
test('Calculator substract', () => {
    const calc = calculator();
    expect(calc.substract(2, 6)).toBe(-4)
})
test('Calculator divide', () => {
    const calc = calculator();
    expect(calc.divide(6, 2)).toBe(3)
})
test('Calculator multiply', () => {
    const calc = calculator();
    expect(calc.multiply(6, 2)).toBe(12)
    
})
test('caesarCipher', ()=> {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})
test('caesarCipher2', ()=> {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
test('analyzeArray', () => {
    const result = analyzeArray([1,8,3,4,2,6]);
    expect(result).toHaveProperty('average', 4)
    expect(result).toHaveProperty('min', 1)
    expect(result).toHaveProperty('max', 8)
    expect(result).toHaveProperty('length', 6)
})