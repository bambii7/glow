# glow
JS color library. For parseing strings to colors and manipulating their value.

HSL is the main color space used here. The other color spaces are provided to work with CSS. HSL is the simplest space to work in when generating palettes.

Supports HSL, RGB & Hex. As its intended for web use.

## Converting between color spaces

```
  let hsl = new HSL('hsl(0,0,92)')
  hsl.toHex().toString() // #EBEBEB
  hsl.toRGB().toString() // rgb(235,235,235)
  
```

### TODO
* Documentation of use
* Get complementary colour, split, double, linear

### Licence 
This project is licensed under the terms of the MIT license.