require("babel-register");

//var Hex = require('./colors/Hex.js')
import Hex from './color-space/Hex'
import RGB from './color-space/RGB'
import HSL from './color-space/HSL'

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

export { Glow, Hex, RGB, HSL };