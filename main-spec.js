'use strict'
var expect = require('chai').expect

describe('main', function(){
    it('should exist', function(){
        var main = require('./main')
        expect(main).to.not.be.undefined
    })
})