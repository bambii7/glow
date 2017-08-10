require("babel-register");

//var Hex = require('./colors/Hex.js')
import Hex from './colors/Hex'
import RGB from './colors/RGB'
import HSL from './colors/HSL'

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