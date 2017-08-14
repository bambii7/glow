import Color from './Color'
import RGB from './RGB'

const hexRegex = /[A-F0-9]{6}|[A-F0-9]{3}/i

export default class Hex extends Color {
  
  static expandShortHex(shortHex) {
    return shortHex.split('').map((v) => {return v+v}).join('')
  }
  
  parseString(str) {
    let hex = hexRegex.exec(str)[0]
    hex = hex.length === 3 ? Hex.expandShortHex(hex) : hex
    return hex
  }
  
  isValid(str) {
    return hexRegex.test(str)
  }
  
  toRgb() {
    let hex = this.value.match(/.{1,2}/g)
    let rgb = hex.map((v) => {
        return parseInt(v, 16)
    })
    return new RGB(rgb)
  }
  
  toHsl() {
    return this.toRgb().toHsl()
  }
  
  toString() {
    return `#${this.value}`
  }
  
}
