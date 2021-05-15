import * as React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Heading } from 'theme-ui'
import Highlight from '../../components/Highlight'
import { VStack } from '../../components/Stack'
import MealPreview from '../../components/MealPreview'
import metadata from '../../constants/metadata.json'
import { getAllMeals } from '../../api'
import { Meal } from '../../types/api'

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

		<VStack gap={[4, null, null, 5]} mb={5}>
			{meals.map((meal) => (
				<MealPreview key={meal._id} meal={meal} levels={['h2', 'h3']} />
			))}
		</VStack>
	</React.Fragment>
)

export const getStaticProps: GetStaticProps = async () => {
	const meals = await getAllMeals()

	return {
		props: { meals },
	}
}

export default MealPage
