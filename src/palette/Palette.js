import HSL from '../color-space/HSL'
import Color from '../color-space/Color'

export default class Palette {
  constructor(hsl) {
    if (!(hsl instanceof Color)) { throw "parameter must be an istance of `Color`"}
    hsl = hsl instanceof HSL ? hsl : hsl.toHsl()
    this.value = hsl
  }
  
  log() {
    let palette = this.toPalette()
    palette.forEach((color) => {
      let hex = new HSL(color).toHex()
      console.log('%c Glow!', `background: ${hex}; color: #FFF`);  
    })
  }
}
