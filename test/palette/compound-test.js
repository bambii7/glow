"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Compound   = require('../../build/glow').Compound
const HSL        = require('../../build/glow').HSL

describe('Compound', () => {

  it('should generate compound color palette', () => {
    let compound = new Compound(new HSL('hsl(353,100,73)')).toPalette()
    expect(compound).to.deep.equal(["hsl(353,100,73)", "hsl(313,100,73)", "hsl(313,90,66)", "hsl(173,99,73)", "hsl(193,89,66)"])
  })

})
