import { Box, Grid, Flex, Container } from 'theme-ui'
import { Row, Column, Layout } from '../components'

const About = () => {
	return (
		<Layout route='/other-writing'>
			<Row sx={{ mt: [8] }}>
				<Column start={[1, 1, 1, 1]} width={[5, 4, 4, 4]} sx={{ fontSize: [4, 5, 5, 7] }}>
					I've written a bunch of cool stuff.
				</Column>
			</Row>
			<Row sx={{ mt: [8] }}>
				<Column start={1} width={4} sx={{ fontSize: [4, 5, 5, 7] }}>
					<Box>Death Drives</Box>
					<Box>
						Review essay about US pedestrian fatalities and car/street culture
						during the pandemic.
					</Box>
					<Box>
						<i>New York Review of Books</i>→
					</Box>
				</Column>
			</Row>
		</Layout>
	)
}

export default About
