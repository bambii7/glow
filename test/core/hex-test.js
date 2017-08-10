"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
var Hex       = require('../../build/glow').Hex

describe('Hex', function () {

  it('should convert hex to rgb values', function () {
    let hex = new Hex('#359ea7')
    let rgb = hex.toRgb()
    expect(rgb).to.deep.equal([53, 158, 167])
  })
  
//    it('should convert hex to hsl values', function () {
//    let glow = new Glow()
//    let hex = glow.hexToHsl('#EBEBEB')
//    expect(hex).to.deep.equal([0, 0, 92])
////    hex = glow.hexToHsl('#640c5a')
////    expect(hex).to.deep.equal([0, 0, 92])
//  })
  
  it('should expand 3 digit hex values', function () {
    let hex = new Hex('#09C')
    let expanded = hex.toString()
    expect(expanded).to.deep.equal('0099CC')
  })  
  
  it('should not expand 6 digit hex values', function () {
    let hex = new Hex('#0099CC')
    let expanded = hex.toString()
    expect(expanded).to.deep.equal('0099CC')
  })
  
  it('should throw an error if no hex value given', function () {
    var fn = function () {
      let hex = new Hex('ZZZ')
    }
    expect(fn).to.throw()
  })
  
  it('should validate strings as hex', () => {
    expect(Hex.isValid('#0099CC')).to.equal(true)
    expect(Hex.isValid('#000000')).to.equal(true)
    expect(Hex.isValid('#FFFFFF')).to.equal(true)
    expect(Hex.isValid('#ZZZZZZ')).to.equal(false)
    expect(Hex.isValid('#}{@}')).to.equal(false)
  })
  
});