"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Hex       = require('../../build/glow').Hex
const HSL       = require('../../build/glow').HSL
const RGB       = require('../../build/glow').RGB

describe('Hex', function () {

  it('should convert to rgb', function () {
    let hex = new Hex('#359ea7')
    let rgb = hex.toRgb()
    expect(rgb).to.be.instanceof(RGB)
    expect(rgb.toString()).to.equal('rgb(53,158,167)')
  })
  
  it('should convert to hsl', () => {
    let hex = new Hex('#EBEBEB')
    let hsl = hex.toHsl()
    expect(hsl).to.be.instanceof(HSL)
    expect(hsl.toString()).to.equal('hsl(0,0,92)')
    expect(hsl.toArray()).to.deep.equal([0, 0, 92])
  })

  it('should expand 3 digit hex', function () {
    let hex = new Hex('#09C')
    let expanded = hex.toString()
    expect(expanded).to.deep.equal('#0099CC')
  })  
  
  it('should not expand 6 digit hex', function () {
    let hex = new Hex('#0099CC')
    let expanded = hex.toString()
    expect(expanded).to.deep.equal('#0099CC')
  })
  
  it('should throw an error if invalid hex', function () {
    var fn = () => { let hex = new Hex('ZZZ') }
    expect(fn).to.throw()
  })
  
  it('should validate strings as hex', () => {
    let hex = new Hex('#0099CC')
    expect(hex.isValid('#0099CC')).to.equal(true)
    expect(hex.isValid('#000000')).to.equal(true)
    expect(hex.isValid('#FFFFFF')).to.equal(true)
    expect(hex.isValid('#ZZZZZZ')).to.equal(false)
    expect(hex.isValid('#}{@}')).to.equal(false)
  })
  
});