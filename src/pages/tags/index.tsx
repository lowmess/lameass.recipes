import * as React from 'react'
import { GetStaticProps } from 'next'
import { getAllTags, Tag, colors } from '../../api'
import { Container } from '../../components/Container'
import { Heading } from '../../components/Heading'
import { Link } from '../../components/Link'
import { vars } from '../../styles/_global.css'
import * as styles from '../../styles/tags-index.css'
import * as linkStyles from '../../styles/links.css'

export const getStaticProps: GetStaticProps = async (context) => {
	const tags = await getAllTags(context.preview)

	return {
		props: {
			tags,
		},
	}
}

interface TagsIndexProps {
	tags: Array<Tag>
}

const TagsIndex: React.FC<TagsIndexProps> = ({ tags }) => {
	return (
		<Container marginBlockStart={['lg', 'xl']} marginBlockEnd={['xl', 'xxl']}>
			<Heading component="h1" className={styles.text}>
				Recipes tagged:
			</Heading>

			{tags.map((tag, index) => {
				const color = colors[index % colors.length]

				return (
					<span key={tag.id} className={styles.text}>
						{' '}
						<Link
							href={`/tags/${tag.slug}`}
							className={linkStyles.ui}
							style={{ '--theme': vars.color[color] }}
						>
							{tag.title}
						</Link>
					</span>
				)
			})}
		</Container>
	)
}

export default TagsIndex
