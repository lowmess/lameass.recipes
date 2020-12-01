import * as React from 'react'
import { useColorMode, Button } from 'theme-ui'
import { Sun, Moon } from 'phosphor-react'
import { VisuallyHidden } from '@reach/visually-hidden'

const ColorModeToggle: React.FC = () => {
	const [colorMode, setColorMode] = useColorMode()

	return (
		<Button
			variant="color-mode-toggle"
			onClick={() => {
				setColorMode(colorMode === 'default' ? 'dark' : 'default')
			}}
		>
			<VisuallyHidden>Toggle color mode</VisuallyHidden>
			{colorMode === 'default' ? <Sun weight="bold" /> : <Moon weight="bold" />}
		</Button>
	)
}

export default ColorModeToggle
