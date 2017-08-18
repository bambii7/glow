import Palette from './Palette'

export default class Analogous extends Palette {
  toPalette() {
    let diff = 0.05, palette = [], i = 0
    this.value.hue -= (this.value.hue * (diff * 2))
    for(i; i < 5; i++) {
      this.value.hue -= (this.value.hue * diff)
      palette.push(this.value.toString())
    }
    return palette
  }
}