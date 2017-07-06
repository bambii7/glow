"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
var Glow       = require('../../build/glow-v1.0.0').Glow

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
    let hsl = glow.hexToHsl('#EBEBEB')
    expect(hsl).to.deep.equal([0, 0, 92])
  })
  
});
