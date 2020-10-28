import * as React from 'react'
import { useColorMode, Button } from 'theme-ui'
import { Sun, Moon } from 'phosphor-react'

const ColorModeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Button
      variant="color-mode-toggle"
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
    >
      {colorMode === 'default' ? <Sun /> : <Moon />}
    </Button>
  )
}

export default ColorModeToggle
