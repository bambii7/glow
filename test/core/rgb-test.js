"use strict"
const describe   = require('mocha').describe;
const it         = require('mocha').it
const expect     = require('chai').expect
const RGB       = require('../../build/glow').RGB

describe('RGB', () => {
  
  it('should convert to hex', () => {
    let rgb = new RGB([235, 235, 235])
    expect(rgb.toHex().toString()).to.equal('#EBEBEB')
  })  
  
  it('should convert to hsl', () => {
    let rgb = new RGB([235, 235, 235])
    expect(rgb.toHsl().toString()).to.equal('hsl(0,0,92)')
  })
  
})