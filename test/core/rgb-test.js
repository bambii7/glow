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
  
  it('should throw an error if invalid rgb', () => {
    let fn = () => { new RGB('ZZZ') }
    expect(fn).to.throw()
    fn = () => { new RGB('#EBEBEB') }
    expect(fn).to.throw()
  })  
  
  it('should validate strings as rgb', () => {
    expect(HSL.isValid('rgb(255,0,100)')).to.equal(true)
  })
  
})