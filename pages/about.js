import { Box, Grid, Flex, Container } from 'theme-ui'
import { Column, Row, Layout } from '../components'

const About = () => {
	return (
		<Layout route='/about'>
			<Row sx={{ mt: [8, 8, 8, 10] }}>
				<Column
					start={[1, 1, 1, 1]}
					width={[5, 4, 3, 3]}
					sx={{ fontSize: [4, 5, 5, 7] }}
				>
					Peter’s essays, criticism, reportage, and fiction have been published
					in <i>The New Yorker</i>, <i>The New York Review of Books</i>,{' '}
					<i>The Guardian</i>, <i>The New York Times Magazine</i>,{' '}
					<i>The Nation</i>, <i>The Times Literary Supplement</i>, and{' '}
					<i>Granta</i>. He lives in Evanston, Illinois.
				</Column>
			</Row>
			<Row sx={{ mt: [8] }}>
				<Column
					start={[1, 1, 1, 1]}
					width={[5, 4, 4, 4]}
					sx={{ fontSize: [4, 5, 5, 7] }}
				>
					<Box>
						<i>Twitter</i>: @apcbaker
					</Box>
					<Box>
						<i>Newsletter</i>: petercbaker.substack.com
					</Box>
					<Box>
						<i>Agent</i>: agent@agency.com
					</Box>
				</Column>
			</Row>
		</Layout>
	)
}

export default About
