"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
const HSL       = require('../../build/glow').HSL
const Hex       = require('../../build/glow').Hex

describe('HSL', () => {

  it('should convert to rbg', () => {
    let hsl = new HSL([0, 0, 92])
    let rgb = hsl.toRgb()
    expect(hsl).to.be.instanceof(HSL)
    expect(rgb.toString()).to.equal('rgb(235,235,235)')
    expect(rgb.toArray()).to.deep.equal([235, 235, 235])
  })
  
  it('should convert to hex', () => {
    let hsl = new HSL([0, 0, 92])
    let hex = hsl.toHex()
    expect(hex).to.be.instanceof(Hex)
    expect(hex.toString()).to.equal('#EBEBEB')
  })
  
})