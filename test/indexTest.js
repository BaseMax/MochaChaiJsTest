const app = require('../index');
const assert = require('chai').assert;

const sayHelloResult = app.sayHello();

describe('sayHello()', () => {
    it('sayHello should return hello', () => {
        assert.equal(sayHelloResult, 'Hello, World!');
    });

    it('sayHello should return type string', () => {
        assert.typeOf(sayHelloResult, 'string');
    });
});

describe('addNumbers()', () => {
    it('addNumbers should be above 5', () => {
        const addNumbersResult = app.addNumbers(10, 20);
        assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', () => {
        const addNumbersResult = app.addNumbers(10, 20);
        assert.typeOf(addNumbersResult, 'number');
    });

    it('addNumbers should return type number', () => {
        const addNumbersResult = app.addNumbers(null, null);
        assert.typeOf(addNumbersResult, 'number');
    });
});


describe('concat()', () => {
    it('concat should return type string', () => {
        const concatResult = app.concat('Hello', 'World');
        assert.typeOf(concatResult, 'string');
    }).timeout(1000);

    it('concat should return type string', () => {
        const concatResult = app.concat('Hello', 'World');
        assert.equal(concatResult, 'HelloWorld');
    });
});
