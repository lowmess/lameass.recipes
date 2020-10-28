import * as React from 'react'
import { useThemeUI, Heading } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

const HighlightHeading: React.FC<ThemeUIProps> = ({ sx, ...props }) => {
  const { colorMode } = useThemeUI()

  return (
    <Heading
      sx={{
        display: 'inline-block',
        position: 'relative',
        paddingRight: 5,
        backgroundImage: `url(/images/heading-highlight-${colorMode}.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0.5em',
        backgroundSize: '85% 75%',

        ...sx,
      }}
      {...props}
    />
  )
}

export default HighlightHeading
