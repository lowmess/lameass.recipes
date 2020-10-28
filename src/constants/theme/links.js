export default {
  nav: {
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
    top: (theme) => `calc(${theme.space[1]} * 0.5)`,
    fontWeight: 'normal',
    color: 'text',

    '&:hover, &:focus': {
      color: 'text',
    },

    svg: {
      marginRight: [0, 2],
      fontSize: 3,
    },
  },

  logo: {
    color: 'text',
    textDecoration: 'none',

    '&:hover': {
      color: 'text',
    },
  },

  ui: {
    color: 'text',
    textDecoration: 'none',

    '&:hover': {
      color: 'accent',
    },
  },

  category: {
    fontSize: 0,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'primary',
    textDecoration: 'none',

    '&:hover': {
      color: 'secondary',
    },
  },

  tag: {
    display: 'inline-block',
    borderRadius: 2,
    paddingY: 1,
    paddingX: 2,
    backgroundColor: 'muted',
    fontSize: 0,
    color: 'muted-text',
    textDecoration: 'none',

    '&:hover': {
      color: 'text',
    },
  },
}
