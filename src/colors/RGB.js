import Color from './Color'

export default class RGB extends Color {  
  
  constructor(str = '') {
    super()
    this.value = str
  }
  
  toHex() {
    
  }
  toHsl() {
    
  }
  toString() {
    return 'rgb(' + this.value.join(',') + ')'
  }
  
}
