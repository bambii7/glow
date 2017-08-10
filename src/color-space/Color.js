export default class Color {
  static isValid(str) {
    let regex = /(\d+),(\d+),(\d+)/
    return regex.test(str)
  }
  toString() {
    return "Color"
  }
}
