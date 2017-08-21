import Palette from './Palette'

export default class Triad extends Palette {
  toPalette() {
    let diff = 0.10, palette = [], i = 0
    
    palette.push(this.value.toString())
    
    this.value.hue -= 120
    palette.push(this.value.toString())
    
    this.value.hue -= 120
    palette.push(this.value.toString())
    
    this.value.hue -= 120
    this.value.saturation -= (this.value.saturation * diff)
    this.value.lightness -= (this.value.lightness * diff)
    palette.push(this.value.toString())
    
    this.value.hue -= 120
    palette.push(this.value.toString())
    
    return palette
  }
}