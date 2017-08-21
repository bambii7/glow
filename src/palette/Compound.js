import Palette from './Palette'

export default class Compound extends Palette {
  toPalette() {
    let diff = 0.10, palette = [], i = 0
    
    palette.push(this.value.toString())
    
    this.value.hue -= 40
    palette.push(this.value.toString())
    
    this.value.saturation -= (this.value.saturation * diff)
    this.value.lightness -= (this.value.lightness * diff)
    palette.push(this.value.toString())
    this.value.saturation += (this.value.saturation * diff)
    this.value.lightness += (this.value.lightness * diff)
    
    this.value.hue -= 140
    palette.push(this.value.toString())
    
    this.value.hue += 20
    this.value.saturation -= (this.value.saturation * diff)
    this.value.lightness -= (this.value.lightness * diff)
    palette.push(this.value.toString())
    
    return palette
  }
}