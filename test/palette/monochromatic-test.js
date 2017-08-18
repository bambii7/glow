"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Monochromatic    = require('../../build/glow').Monochromatic
const HSL        = require('../../build/glow').HSL

describe('Monochromatic', () => {

  it('should generate a monochromatic color palette', () => {
    let hsl = new HSL('hsl(236,100,73)')
    let monochromatic = new Monochromatic(hsl)
    expect(monochromatic.toPalette()).to.deep.equal(["hsl(236,95,69)", "hsl(236,90,66)", "hsl(236,86,63)", "hsl(236,82,60)", "hsl(236,78,57)"])
  })

})