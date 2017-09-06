# glow
JS color library. For parseing strings to colors and manipulating their value.

HSL is the main color space used to generate palettes. As it is the simplest space to work with. The other color spaces are provided to work with CSS, converting too and from HSL.

Supports HSL, RGB & Hex. As its intended for web use.

## Converting between color spaces

Colors are initalised with string representation. RGB & HSL will accept an Array.

```
  let hsl = new HSL('hsl(0,0,92)')
  hsl.toHex().toString() // #EBEBEB
  hsl.toRgb().toString() // rgb(235,235,235)
  
```

```
  let rgb = new RGB('rgb(204,61,204)')
  rgb.toHex().toString() // #CC3DCC
  rgb.toHsl().toString() // hsl(300,58,52)
  
```

```
  let hex = new Hex('#72afd6')
  hex.toHsl().toString() // hsl(203,55,64)
  hex.toRgb().toString() // rgb(114,175,214)
  
```

### TODO
* Documentation of use
* Get complementary colour, split, double, linear

### Licence 
This project is licensed under the terms of the MIT license.