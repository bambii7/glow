//var Color = require('./Color')
import Color from './Color'

export default class Hex extends Color {
  
  constructor(str) {
    super()
    if (str === null || str === undefined) {
      throw "not a valid hex value"
    }
    this.value = this.stringToHex(str)
  }
  
  expandShortHex(shortHex) {
    return shortHex.split('').map((v) => {return v+v}).join('')
  }
  
  stringToHex(str) {
    let hex = /[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}/.exec(str)[0]
    hex = hex.length === 3 ? this.expandShortHex(hex) : hex
    return hex
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
    return "Hex Color"
  }
  
}
