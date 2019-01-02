import ColorThemeProvider from "./colors/colorThemeProvider";

function Theme(colorTheme = "orangeTheme") {
  Object.assign(this, new ColorThemeProvider(colorTheme));
  this.spacing = {
    one: 4,
    two: 4,
    three: 8,
    four: 12,
    five: 16,
    six: 24,
    seven: 32,
    eight: 48,
    nine: 64,
    ten: 96,
    eleven: 128,
    twelve: 192,
    thirteen: 256,
    fourteen: 384,
    fifteen: 512,
    sixteen: 640,
    seventeen: 768
  };
  this.shadow = {
    one: `0 1px 3px hsla(${this.neutral.eight}, .12), 0 1px 2px hsla(${
      this.neutral.eight
    }, .24)`,
    two: `0 3px 6px hsla(${this.neutral.eight}, .15), 0 2px 4px hsla(${
      this.neutral.eight
    }, .12)`,
    three: `0 10px 20px hsla(${this.neutral.eight}, .15), 0 3px 6px hsla(${
      this.neutral.eight
    }, .10)`,
    four: `0 15px 25px hsla(${this.neutral.eight}, .15), 0 5px 10px hsla(${
      this.neutral.eight
    }, .05)`,
    five: `0 20px 40px hsla(${this.neutral.eight}, .2)`
  };
  this.weight = {
    normal: 500,
    heavy: 700,
    thin: 300
  };
  this.radius = {
    normal: 8,
    rounded: 20
  };
  this.maxWidth = 1100;
}

export default Theme;
