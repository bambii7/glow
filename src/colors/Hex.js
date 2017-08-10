//var Color = require('./Color')
import Color from './Color'

var hexRegex = /[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}/

export default class Hex extends Color {
  
  constructor(str = '') {
    super()
    if (!Hex.isValid(str)) {
      throw "not a valid hex value"
    }
    this.value = this._stringToHex(str)
  }
  
  _expandShortHex(shortHex) {
    return shortHex.split('').map((v) => {return v+v}).join('')
  }
  
  _stringToHex(str) {
    let hex = hexRegex.exec(str)[0]
    hex = hex.length === 3 ? this._expandShortHex(hex) : hex
    return hex
  }
  
  static isValid(str) {
    return hexRegex.test(str)
  }
  
  toRgb() {
    let hex = this.value.match(/.{1,2}/g)
    return hex.map(function (v) {
        return parseInt(v, 16)
    })
  }
  
  toHsl() {
    
  }
  
  toString() {
    return this.value
  }
  
}
