"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
var Glow       = require('../../build/glow').Glow

var hex_colours = ['#09C', '#EBEBEB', '#640c5a', '#ea5896', '#359ea7', '#FFF', '#000']

describe('hexToRgb', function () {

  it('should convert hex to rgb values', function () {
    let glow = new Glow()
    let rgb = glow.hexToRgb('#359ea7')
    expect(rgb).to.deep.equal([53, 158, 167])
  })
  
  it('should expand 3 digit hex values', function () {
    let glow = new Glow()
    let expanded = glow.stringToHex('#09C')
    expect(expanded).to.deep.equal('0099CC')
  })  
  
  it('should not expand 6 digit hex values', function () {
    let glow = new Glow()
    let expanded = glow.stringToHex('#0099CC')
    expect(expanded).to.deep.equal('0099CC')
  })
  
  it('should throw an error if no hex value given', function () {
    let glow = new Glow()
    var fn = function () {
      glow.hexToRgb('ZZZ')
    }
    expect(fn).to.throw()
  })
  
});

describe('rgbToHsl', function () {

  it('should convert hex to hsl values', function () {
    let glow = new Glow()
    let hex = glow.hexToHsl('#EBEBEB')
    expect(hex).to.deep.equal([0, 0, 92])
//    hex = glow.hexToHsl('#640c5a')
//    expect(hex).to.deep.equal([0, 0, 92])
  })
  
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
