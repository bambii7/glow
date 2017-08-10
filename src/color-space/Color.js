const regex = /(\d+),(\d+),(\d+)/

export default class Color {
  
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
  
}
