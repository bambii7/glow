"use strict"
const describe   = require('mocha').describe
const it         = require('mocha').it
const expect     = require('chai').expect
const Complementary    = require('../../build/glow').Complementary
const HSL        = require('../../build/glow').HSL

describe('Complementary', () => {

  it('should generate complementary color palette', () => {
    let complementary = new Complementary(new HSL('hsl(353,100,73)')).toPalette()
    expect(complementary).to.deep.equal(["hsl(353,100,73)", "hsl(353,100,77)", "hsl(353,95,69)", "hsl(173,95,69)", "hsl(173,100,72)"])
  })

})
