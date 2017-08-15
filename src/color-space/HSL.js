import Color from './Color'
import RGB from './RGB'

export default class HSL extends Color {
  
  toHex() {
    return this.toRgb().toHex()
  }
  
  toString() {
    let hsl = super.toString()
    return `hsl(${hsl})`
  }
  
  get hue() {
    return this.value[0]
  }
  
  set hue (val) {
    let v = this.value[0]
    this.value[0] = Math.abs((v + val) % 360)
  }
  
  toRgb() {
      let h, s, l,
          r, g, b,
          temp1, temp2, hsl, rgb
      
      // clone array
      hsl = this.value.slice(0)
      hsl = this.degPercPercToHsl(hsl)
      h = hsl[0]
      s = hsl[1]
      l = hsl[2]

      // greyscale
      if (s === 0) {
        r = Math.round(l * 255)
        g = Math.round(l * 255)
        b = Math.round(l * 255)
      } else {
        temp2 = (l < 0.5) ? l * (1 + s) : (l + s) - (s * l)
        temp1 = 2 * l - temp2

        r = Math.round(255 * this.hueToRgb(temp1, temp2, h + ( 1 / 3 )))
        g = Math.round(255 * this.hueToRgb(temp1, temp2, h))
        b = Math.round(255 * this.hueToRgb(temp1, temp2, h - 0.3333))
      }
      rgb = new RGB([parseInt(r, 10), parseInt(g, 10), parseInt(b, 10)])
      return rgb
  }
  
  hueToRgb(temp1, temp2, hue) {
      var rgbValue = 0
      if (hue < 0) {
          hue += 1
      }
      if (hue > 1) {
          hue -= 1
      }

      if (6 * hue < 1 ) { // red
        rgbValue = temp1 + (temp2 - temp1) * 6 * hue
      } else if (2 * hue < 1 ) { // green
        rgbValue = temp2
      } else if (3 * hue < 2 ) { // blue
        rgbValue = temp1 + (temp2 - temp1) * (0.6666 - hue) * 6
      }
      return rgbValue
  }
  
  degPercPercToHsl(hsl) {
    hsl[0] /= 360
    hsl[1] /= 100
    hsl[2] /= 100
    return hsl
  }
  
}

