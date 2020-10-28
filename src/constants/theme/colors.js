const palette = {
  // base seed: #69c
  white: '#ffffff',
  black: '#242628',

  grays: [
    '#f9f9fa',
    '#ebeef0',
    '#dde1e5',
    '#ced4d9',
    '#bdc5cc',
    '#abb4be',
    '#95a1ad',
    '#7f8a96',
    '#646d76',
    '#3a4045',
  ],

  cyans: [
    '#f3fbfb',
    '#d9f2f2',
    '#bde9e9',
    '#9ddede',
    '#79d2d2',
    '#61c2c2',
    '#57adad',
    '#4a9595',
    '#3b7575',
    '#224545',
  ],

  pinks: [
    '#fdf8fa',
    '#f8eaf1',
    '#f3dae6',
    '#edc9db',
    '#e7b6cf',
    '#e0a1c0',
    '#d787af',
    '#cc679a',
    '#a2517a',
    '#5f3048',
  ],
}

export default {
  text: palette.grays[9],
  background: palette.white,
  primary: palette.cyans[5],
  secondary: palette.cyans[6],
  accent: palette.pinks[6],
  highlight: palette.cyans[5],
  muted: palette.grays[0],

  modes: {
    dark: {
      text: palette.grays[0],
      background: palette.black,
      primary: palette.cyans[7],
      secondary: palette.cyans[6],
      accent: palette.pinks[5],
      highlight: palette.cyans[4],
      muted: palette.grays[9],
    },
  },
}
