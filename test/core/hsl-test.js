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
  
  it('should throw an error if invalid hsl', () => {
    let fn = () => { new HSL('ZZZ') }
    expect(fn).to.throw()
    fn = () => { new HSL('#EBEBEB') }
    expect(fn).to.throw()
  })  
  
  it('should validate strings as hsl', () => {
    let hsl = new HSL('hsl(0,0,92)')
    expect(hsl.isValid('hsl(0,0,92)')).to.equal(true)
  })
    
  it('should be able to return an Array representation', () => {
    let hsl = new HSL([236, 100, 73])
    expect(hsl.toArray()).to.deep.equal([236, 100, 73])
  })   
  
  it('should be able to parse string representation', () => {
    let hsl = new HSL('hsl(236,100,73)')
    expect(hsl.toArray()).to.deep.equal([236, 100, 73])
  })  
  
  it('should be able to adjust the hue value', () => {
    let hsl = new HSL('hsl(236,100,73)')
    hsl.hue = -180
    expect(hsl.toArray()).to.deep.equal([56, 100, 73])
  })
  it('should be able to adjust the hue value with an operator', () => {
    let hsl = new HSL('hsl(236,100,73)')
    hsl.hue -= 180
    expect(hsl.toArray()).to.deep.equal([56, 100, 73])
  })
  
})