"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const RGB       = require('../../build/glow').RGB
const Hex       = require('../../build/glow').Hex
const HSL       = require('../../build/glow').HSL

describe('RGB', () => {
  
  it('should convert to hex', () => {
    let rgb = new RGB([235, 235, 235])
    let hex = rgb.toHex()
    expect(hex).to.be.instanceof(Hex)
    expect(hex.toString()).to.equal('#EBEBEB')
  })  
  
  it('should convert to hsl', () => {
    let rgb = new RGB([235, 235, 235])
    let hsl = rgb.toHsl()
    expect(hsl).to.be.instanceof(HSL)
    expect(hsl.toString()).to.equal('hsl(0,0,92)')
  })
  
})