"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
var Glow       = require('../../build/glow-v1.0.0').Glow

describe('calculator', function () {

  it('should convert RGB to hsl values', function () {
    let glow = new Glow()
    let hsl = glow.hexToRgb('#359ea7')
    expect(hsl).to.deep.equal([53, 158, 167])
  })
  
});
