const assert = require('chai').assert
const sayHello = require('./app').sayHello
const addNumbers = require('./app').addNumbers




const app = require('./app')

sayHelloResult = app.sayHello()
addNumsResult = app.addNumbers(5, 5)

describe('app', function () {

    describe('sayHello()', function () {
        it('app should return hello', function () {
            // let result = sayHello()
            assert.equal(sayHelloResult, 'hello')
        })

        it('sayHello shoud return type string', function () {
            assert.isString(sayHelloResult)
        })

    })

    describe('addNumbers()', function () {
        it('add numbers should add 2 values together', function () {
            let a = 1
            let b = 2
            let result = addNumbers(a, b)
            assert.equal(addNumsResult, 10)
        })
        it('add numbers returns a number', function () {
            let a = 1
            let b = 2
            let result = addNumbers(a, b)
            assert.isNumber(addNumsResult)
        })
    })

})