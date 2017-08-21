"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Triad    = require('../../build/glow').Triad
const HSL        = require('../../build/glow').HSL

describe('Triad', () => {

  it('should generate triad of colors as palette', () => {
    let palette = new Triad(new HSL('hsl(353,100,73)')).toPalette()
    expect(palette).to.deep.equal(["hsl(353,100,73)", "hsl(233,100,73)", "hsl(113,100,73)", "hsl(7,90,66)", "hsl(113,90,66)"])
  })

})
