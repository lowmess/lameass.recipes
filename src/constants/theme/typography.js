const fonts = {
  heading: 'Staat, baskerville, didone, georgia, serif',
  'system-ui':
    'system-ui, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
}

const fontSizes = [
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2.25rem',
  '3rem',
  '5rem',
  '6rem',
]

fontSizes.base = fontSizes[1]

const fontWeights = {
  thin: 100,
  'extra-light': 200,
  light: 300,
  normal: '400',
  medium: 500,
  'semi-bold': 600,
  bold: '700',
  'extra-bold': 800,
  black: 900,

  heading: 700,
}

const lineHeights = {
  solid: 1,
  heading: 1.25,
  copy: 1.5,
}

export { fonts, fontSizes, fontWeights, lineHeights }
