import HSL from '../color-space/HSL'

export default class Palette {
  constructor(hsl) {
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
