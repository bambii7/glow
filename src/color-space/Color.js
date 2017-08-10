const regex = /(\d+),(\d+),(\d+)/

export default class Color {
  
  constructor(str = '') {
    this.value = Color.isValid(str) ? Color.parseString(str) : null
  }
  
  get value() {
    return this._value
  }
  
  set value(arr) {
//    if (!Array.isArray(arr)) {
//      throw "value must be an array"
//    }
    this._value = arr
  }
  
  static parseString(str) {
    let res = regex.exec(str)
    this.value = res.shift().slice(0)
  }
  
  static isValid(str) {
    return regex.test(str)
  }
  
  toString() {
    return this.value.join(',')
  }
  
  toArray() {
    return this.value
  }
  
}
