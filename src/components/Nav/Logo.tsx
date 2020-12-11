import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Link } from 'theme-ui'
import { VisuallyHidden } from '@reach/visually-hidden'
import type { ThemeUIProps } from '../../types/ThemeUIComponent'

const Logo: React.FC<ThemeUIProps> = ({ sx, ...props }) => (
	<NextLink href="/" passHref>
		<Link
			variant="logo"
			sx={{
				svg: {
					justifySelf: 'flex-end',
					position: 'relative',
					top: '0.625rem',
					left: [4, null, null, 0],
					height: '2rem',
					transform: 'scale(1.75)',
				},

				...sx,
			}}
			{...props}
		>
			<VisuallyHidden>Go to homepage</VisuallyHidden>
			<svg
				viewBox="0 0 500 150"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				fillRule="nonzero"
				clipRule="evenodd"
				strokeLinejoin="round"
				strokeMiterlimit="2"
			>
				<path d="M260.385 70.427h55.195v-3.364c0-15.901-11.926-33.178-35.319-33.178-28.897 0-40.211 19.723-40.211 39.6 0 22.017 17.583 38.683 38.835 38.683 12.691 0 23.852-6.422 30.885-16.207l-2.446-1.224c-4.74 5.81-10.856 9.327-18.5 9.327-15.749 0-28.439-14.219-28.439-33.331v-.306zm-140.032 29.968h-9.633l-.152-43.27c0-18.347-16.972-23.24-32.72-23.24-30.732 0-31.955 20.335-24.158 25.534l14.525-7.798C57.054 36.025 90.232 25.17 90.232 53.15v6.727L55.831 72.568c-9.174 3.516-13.455 10.549-13.455 19.876 0 11.467 8.562 19.724 19.265 19.724 5.198 0 6.116-.306 28.897-12.079l9.633 10.855 20.182-8.868v-1.681zm122.77 8.868l-9.938-5.199V62.629c0-22.017-8.409-28.744-18.042-28.744-10.091 0-20.182 4.893-26.757 11.314-3.057-7.645-8.562-11.314-15.595-11.314-6.422 0-16.36 3.822-23.699 11.161v-9.938h-30.273v1.682l9.938 5.351v61.923l-9.938 5.199v1.681h40.211v-1.681l-9.938-5.352V49.327c1.682-1.987 7.186-8.256 12.232-8.256 4.893 0 9.479 4.587 9.479 21.558v41.435l-9.938 5.199v1.681h40.212v-1.681l-9.938-5.199V62.629c0-5.657-.612-10.244-1.682-14.219 4.128-4.587 8.256-6.574 13.302-6.574 5.351 0 10.091 4.586 10.091 20.793v41.435l-9.938 5.199v1.681h40.211v-1.681zM33.79 103.664V0L0 17.889v1.835h13.455v83.94l-9.938 5.351v1.682h40.211v-1.682l-9.938-5.351zm39.93.094c-8.257 0-14.984-7.186-14.984-16.207 0-7.492 3.669-13.607 10.55-16.665l20.946-7.798v34.249l-11.467 5.504c-1.529.612-3.363.917-5.045.917zM280.261 36.79c12.079 0 14.984 10.703 14.984 30.273h-34.707c.917-22.475 7.339-30.273 19.723-30.273z" />
				<path d="M375.783 137.669h-9.632l-.153-43.27c0-18.347-16.971-23.24-32.72-23.24-30.732 0-31.955 20.335-24.157 25.534l14.525-7.798c-11.162-15.595 22.017-26.451 22.017 1.529v6.727l-34.402 12.691c-9.173 3.516-13.454 10.549-13.454 19.876 0 11.467 8.562 19.724 19.264 19.724 5.199 0 6.116-.306 28.898-12.079l9.632 10.855 20.182-8.868v-1.681zm35.341-66.51c-20.029 0-29.05 7.492-29.05 20.335 0 22.476 36.695 21.253 36.695 40.365 0 6.268-3.822 14.678-13.913 14.678-8.715 0-16.36-11.162-19.112-26.604l-5.352 2.14-.153 18.501c5.199 5.504 15.749 8.868 24.617 8.868 22.475 0 32.719-9.633 32.719-23.546 0-22.935-36.695-23.699-36.695-39.447 0-7.798 2.905-12.385 10.091-12.385 7.339 0 14.067 7.033 18.042 19.112l4.587-2.293V74.676c-5.504-2.141-13.914-3.517-22.476-3.517zm62.425 0c-20.029 0-29.05 7.492-29.05 20.335 0 22.476 36.695 21.253 36.695 40.365 0 6.268-3.823 14.678-13.914 14.678-8.715 0-16.36-11.162-19.112-26.604l-5.351 2.14-.153 18.501c5.199 5.504 15.748 8.868 24.616 8.868 22.476 0 32.72-9.633 32.72-23.546 0-22.935-36.695-23.699-36.695-39.447 0-7.798 2.905-12.385 10.091-12.385 7.339 0 14.067 7.033 18.042 19.112l4.587-2.293V74.676c-5.505-2.141-13.914-3.517-22.476-3.517zM329.15 141.032c-8.256 0-14.984-7.186-14.984-16.207 0-7.492 3.67-13.607 10.55-16.665l20.947-7.798v34.249l-11.467 5.504c-1.529.612-3.364.917-5.046.917z" />
			</svg>
		</Link>
	</NextLink>
)

export default Logo
