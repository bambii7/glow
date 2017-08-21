import Palette from './Palette'

export default class Complementary extends Palette {
  toPalette() {
    let diff = 0.05, palette = [], i = 0
    
    palette.push(this.value.toString())
    
    // step up
    this.value.lightness += (this.value.lightness * diff)
    palette.push(this.value.toString())
    // step down
    this.value.saturation -= (this.value.saturation * diff)
    this.value.lightness -= (this.value.lightness * (diff * 2))
    palette.push(this.value.toString())
    
    // get complementary
    this.value.hue -= 180
    palette.push(this.value.toString())
    
    this.value.saturation += (this.value.saturation * diff)
    this.value.lightness += (this.value.lightness * (diff ))
    
    palette.push(this.value.toString())
    
    return palette
  }
}