require("babel-register");

import Hex from './color-space/Hex'
import RGB from './color-space/RGB'
import HSL from './color-space/HSL'

import Palette from './palette/Palette'
import Monochromatic from './palette/Monochromatic'
import Analogous from './palette/Analogous'
import Complementary from './palette/Complementary'
import Compound from './palette/Compound'
import Triad from './palette/Triad'

class Glow {
 
  hexToHsl(hex) {
    var rgb = this.hexToRgb(hex)
    return this.rgbToHsl(rgb)
  }
  
  hslToHex(hsl) {
    var rgb = this.hslToRgb(hsl)
    return this.rgbToHex(rgb)
  }
  
}

export { Glow, Hex, RGB, HSL, Palette, Monochromatic, Analogous, Complementary, Compound, Triad }