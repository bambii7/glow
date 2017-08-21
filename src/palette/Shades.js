import Palette from './Palette'

export default class Shades extends Palette {
  toPalette() {
    let diff = 0.10, palette = [], i = 0
    
    palette.push(this.value.toString())
    
    this.value.saturation -= (this.value.saturation * diff)
    this.value.lightness -= (this.value.lightness * diff)
    palette.push(this.value.toString())
    
    this.value.saturation -= (this.value.saturation * diff)
    this.value.lightness -= (this.value.lightness * diff)
    palette.push(this.value.toString())
    
    this.value.saturation += (this.value.saturation * (diff * 3))
    this.value.lightness += (this.value.lightness * (diff * 3))
    palette.push(this.value.toString())
    
    this.value.saturation += (this.value.saturation * diff)
    this.value.lightness += (this.value.lightness * diff)
    palette.push(this.value.toString())
    
    return palette
  }
}