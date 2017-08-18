"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Analogous    = require('../../build/glow').Analogous
const HSL        = require('../../build/glow').HSL

describe('Analogous', () => {

  it('should set a value on constructor parameter', () => {
    let hsl = new HSL('hsl(236,78,57)')
    let analogous = new Analogous(hsl)
    expect(analogous.toPalette()).to.deep.equal(["hsl(201,78,57)", "hsl(191,78,57)", "hsl(181,78,57)", "hsl(172,78,57)", "hsl(163,78,57)"])
  })

})