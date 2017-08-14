const regex = /(\d+),(\d+),(\d+)/

export default class Color {
  
  constructor(str = '') {
    if (!this.isValid(str)) {
      throw "not a valid value"
    }
    this.value = str
  }
  
  get value() {
    return this._value
  }
  
  set value(val) {
    this._value =  Array.isArray(val) ? val : this.parseString(val)
  }
  
  parseString(str) {
    let res = regex.exec(str)
    res.shift()
    return res.map((v) => {return parseInt(v)})
  }
  
  isValid(str) {
    return regex.test(str) || (Array.isArray(str) && str.length === 3)
  }
  
  toString() {
    return this.value.join(',')
  }
  
  toArray() {
    return this.value
  }
  
}
