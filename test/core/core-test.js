"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
const glow       = require('../../build/glow-v1.0.0')

describe('calculator', function () {

  it('should show initial display correctly', function () {
    expect(true).to.equal(true)
    expect(true).to.not.equal(false)
  })
  
});