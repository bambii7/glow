"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
var Glow       = require('../../build/glow').Glow

var hex_colours = ['#09C', '#EBEBEB', '#640c5a', '#ea5896', '#359ea7', '#FFF', '#000']

describe('rgbToHsl', function () {
  
  it('should convert hsl to rbg values', function () {
    let glow = new Glow()
    let rgb = glow.hslToRgb([0, 0, 92])
    expect(rgb).to.deep.equal([235, 235, 235])
  })
  
});

describe('rgbToHex', function () {

  it('should convert rgb to hex values', function () {
    let glow = new Glow()
    let hex = glow.rgbToHex([235, 235, 235])
    expect(hex).to.equal('EBEBEB')
  })
  
});

describe('hslToHex', function () {

  it('should convert hsl to hex', function () {
    let glow = new Glow()
    let hex = glow.hslToHex([0, 0, 92])
    expect(hex).to.equal('EBEBEB')
  })

});
