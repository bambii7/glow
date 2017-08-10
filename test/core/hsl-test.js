"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const HSL       = require('../../build/glow').HSL
const RGB       = require('../../build/glow').RGB
const Hex       = require('../../build/glow').Hex

describe('HSL', () => {

  it('should convert to rbg', () => {
    let hsl = new HSL([0, 0, 92])
    let rgb = hsl.toRgb()
    expect(rgb).to.be.instanceof(RGB)
    expect(rgb.toString()).to.equal('rgb(235,235,235)')
    expect(rgb.toArray()).to.deep.equal([235, 235, 235])
  })
  
  it('should convert to hex', () => {
    let hsl = new HSL([0, 0, 92])
    let hex = hsl.toHex()
    expect(hex).to.be.instanceof(Hex)
    expect(hex.toString()).to.equal('#EBEBEB')
  })
  
  it('should validate strings as hsl', () => {
    expect(HSL.isValid('hsl(0,0,92)')).to.equal(true)
  })
  
})