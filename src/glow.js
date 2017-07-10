

export class Glow {
  
  constructor() {}
  
  hslToRgb(hsl){
      var h, s, l,
          r, g, b,
          temp1, temp2;
      // clone array
      hsl = hsl.slice(0)

      hsl = this.degPercPercToHsl(hsl)
      h = hsl[0]
      s = hsl[1]
      l = hsl[2]

      // greyscale
      if (s == 0) {
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
      return [parseInt(r), parseInt(g), parseInt(b)];
  }
  
  hueToRgb(temp1, temp2, hue) {
      var rgbValue = 0;
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
      return rgbValue;
  }
 
  hexToHsl(hex) {
    var rgb = this.hexToRgb(hex)
    return this.rgbToHsl(rgb)
  } 
  
  hslToHex(hsl) {
    var rgb = this.hslToRgb(hsl)
    return this.rgbToHex(rgb)
  }
  
  hslToDegPercPerc(hsl) {
    hsl[0] = Math.round(hsl[0] * 60)
    if (hsl[0] < 0) {
        hsl[0] += 360
    }

    hsl[1] = Math.round(hsl[1] * 100)
    hsl[2] = Math.round(hsl[2] * 100)
    return hsl
  }

  degPercPercToHsl(hsl) {
    hsl[0] /= 360;
    hsl[1] /= 100;
    hsl[2] /= 100;

    return hsl;
  }
  
  rgbToHsl(rgb) {
    var max = 0, min = 0, maxAdd = 0, maxSub = 0,
        h=0, s=0, l=0

    rgb = rgb.map(function (v) {
        return v / 255
    })
    max = Math.max.apply(null, rgb)
    min = Math.min.apply(null, rgb)
    maxAdd = max + min
    maxSub = max - min
    l = maxAdd / 2

    if (min != max) {
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

    return this.hslToDegPercPerc([h, s, l])
  }
  
  rgbToHex(rgb) {
    return rgb.map(function (v) {
      return v.toString(16)
    }).join('').toUpperCase()
  }
  
  hexToRgb(hexValue) {
    let hex = this.stringToHex(hexValue)
    if (hex === null || hexValue === undefined) {
      throw "not a valid hex value"
    }
    hex = hex.match(/.{1,2}/g)
    return hex.map(function (v) {
      return parseInt(v, 16)
    })
  }
  
  expandShortHex(shortHex) {
    return shortHex.split('').map((v) => {return v+v}).join('')
  }
  
  stringToHex(hexString) {
    let hex = /[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}/.exec(hexString)[0]
    hex = hex.length === 3 ? this.expandShortHex(hex) : hex
    return hex
  }
  
}

module.exports.Glow
