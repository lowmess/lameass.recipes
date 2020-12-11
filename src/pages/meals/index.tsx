import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Heading } from 'theme-ui'
import Highlight from '../../components/Highlight'
import Stack from '../../components/Stack'
import MealPreview from '../../components/MealPreview'
import { getAllMeals } from '../../../lib/api'
import metadata from '../../constants/metadata.json'
import { Meal } from '../../types/Meal'

interface MealPageProps {
	meals: Meal[]
}

const MealPage: React.FC<MealPageProps> = ({ meals }) => (
	<React.Fragment>
		<Head>
			<title key="title">All meals {metadata.titleSuffix}</title>
			<meta name="description" content={metadata.description} />
		</Head>

		<Heading as="h1" variant="page-name" my={[5, null, 6]}>
			<Highlight>All meals</Highlight>
		</Heading>

		<Stack gap={[4, null, null, 5]} mb={5}>
			{meals.map((meal) => (
				<MealPreview key={meal._id} meal={meal} levels={['h2', 'h3']} />
			))}
		</Stack>
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const meals = await getAllMeals()

	return {
		props: { meals },
	}
}

export default MealPage
