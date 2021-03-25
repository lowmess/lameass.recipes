import * as React from 'react'
import { Text } from 'theme-ui'
import { TextProps } from '@theme-ui/components'

const Highlight: React.FC<TextProps> = ({ sx, ...props }) => (
	<Text
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
				backgroundImage: `url(/images/highlight-swash.png)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100% 100%',
			},

			...sx,
		}}
		{...props}
	/>
)

export default Highlight
