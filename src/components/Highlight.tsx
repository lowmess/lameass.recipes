import * as React from 'react'
import { useThemeUI, Text } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

const Highlight: React.FC<ThemeUIProps> = ({ sx, ...props }) => {
	const { colorMode } = useThemeUI()

	return (
		<Text
			as="span"
			sx={{
				display: 'inline-block',
				position: 'relative',

				'&::before': {
					content: '""',
					display: 'block',
					position: 'absolute',
					top: 1,
					right: -4,
					bottom: 0,
					left: 2,
					zIndex: -1,
					width: (theme) => `calc(100% + ${theme.space[4]})`,
					height: (theme) => `calc(100% - ${theme.space[2]})`,
					backgroundImage: `url(/images/highlight-swash-${colorMode}.png)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%',
				},

				...sx,
			}}
			{...props}
		/>
	)
}

export default Highlight
