"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Palette    = require('../../build/glow').Palette
const HSL        = require('../../build/glow').HSL
const RGB        = require('../../build/glow').RGB

describe('Palette', () => {

  it('should set a value on constructor parameter', () => {
    let hsl = new HSL('hsl(236,100,73)')
    let palette = new Palette(hsl)
    expect(palette.value.toString()).to.equal('hsl(236,100,73)')
  })
  
  it('should convert RGB to HSL', () => {
    let rgb = new RGB('rgb(255,0,100)')
    let palette = new Palette(rgb)
    expect(palette.value.toString()).to.equal('hsl(336,100,50)')
  })

})