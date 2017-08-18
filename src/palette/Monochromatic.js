import Palette from './Palette'

export default class Monochromatic extends Palette {
  toPalette() {
    let diff = 0.05, palette = [], i = 0
    for(i; i < 5; i++) {
      this.value.saturation -= (this.value.saturation * diff)
      this.value.lightness -= (this.value.lightness * diff)
      palette.push(this.value.toString())
    }
    return palette
  }
}