import Color from './Color'
import HSL from './HSL'
import Hex from './Hex'

export default class RGB extends Color {  
  
  toHex() {
    let hex = this.value.map(function (v) {
      return v.toString(16)
    }).join('').toUpperCase()
    return new Hex(hex)
  }

  toString() {
    let rgb = super.toString()
    return `rgb(${rgb})`
  }
  
  toDegPercPerc(hsl) {
    hsl[0] = Math.round(hsl[0] * 60)
    if (hsl[0] < 0) {
        hsl[0] += 360
    }
    hsl[1] = Math.round(hsl[1] * 100)
    hsl[2] = Math.round(hsl[2] * 100)
    return hsl
  }
  
  toHsl() {
    let max = 0, min = 0, maxAdd = 0, maxSub = 0,
        h=0, s=0, l=0, hsl

    let rgb = this.value.map((v) => {
        return v / 255
    })
    max = Math.max.apply(null, rgb)
    min = Math.min.apply(null, rgb)
    maxAdd = max + min
    maxSub = max - min
    l = maxAdd / 2

    if (min !== max) {
      if (l < 0.5) {
        s = maxSub / maxAdd
      } else {
        s = maxSub / ( 2 - max - min )
      }

      switch (max) {
        case rgb[0]: //red
          h = (rgb[1] - rgb[2]) / maxSub
          break
        case rgb[1]: //green
          h = (rgb[2] - rgb[0]) / maxSub + 2
          break
        case rgb[2]: // blue
          h = (rgb[0] - rgb[1]) / maxSub + 4
          break
      }
    }

    hsl = this.toDegPercPerc([h, s, l])
    return new HSL(hsl)
  }
  
}
