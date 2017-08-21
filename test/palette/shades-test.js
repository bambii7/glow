"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Shades    = require('../../build/glow').Shades
const HSL        = require('../../build/glow').HSL

describe('Shades', () => {

  it('should generate shades of color palette', () => {
    let palette = new Shades(new HSL('hsl(353,100,73)')).toPalette()
    expect(palette).to.deep.equal(["hsl(353,100,73)", "hsl(353,90,66)", "hsl(353,81,59)", "hsl(353,100,77)", "hsl(353,100,85)"])
  })

})
