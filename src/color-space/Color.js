const regex = /(\d+),(\d+),(\d+)/

export default class Color {
  
  constructor(str = '') {
    this.value = Color.isValid(str) ? Color.parseString(str) : null
  }
  
  static parseString(str) {
    let res = regex.exec(str)
    this.value = res.shift().slice(0)
  }
  
  static isValid(str) {
    return regex.test(str)
  }
  
  toString() {
    return "Color"
  }
  
  toArray() {
    return this.value
  }
  
}
