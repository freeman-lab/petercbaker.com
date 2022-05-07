import { Box, Grid, Image, Flex, Link, Divider, Container } from 'theme-ui'
import { Row, Column, Layout } from '../components'
import { useWindowScroll } from 'react-use'

const contents = [
	{
		source: 'Charles Baxter',
		review:
			'The effects of secrets, both personal and political, are on full display in Peter C. Baker’s brilliant novel about America’s recent history. With great subtlety, this novel quietly shows us what it’s like to perform actions that cannot be acknowledged and what the psychic price is for such secrecy. With its fascinating cast of characters, this book is wonderfully readable, and I found its central conflicts to be completely relevant to our time, and unforgettable.',
	},
	{
		source: 'Caleb Crain',
		review:
			'Planes is an insightful book about the slow, zigzag work of healing that nonetheless moves at the speed of a thriller.',
	},
	{
		source: 'Sandi Tan',
		review:
			'Peter C. Baker is that rare confident novelist with the most delicate touch. With his twin dramas unfolding on separate planes in Rome and in North Carolina, he shows us that the invisible network connecting everyone can be just as much impersonal actions taken by Washington as intimate domestic secrets that go unshared. Baker has the eye of a seasoned journalist and the ear of a poet.',
	},
	{
		source: 'Rebecca Lee',
		review:
			'This novel stunned me with its gravity and its wisdom, its sense of life’s turbulence and mystery. Baker is an absolutely brilliant writer — in a league with Ferrante and DeLillo — with a deep understanding of the interwoven, intercon- nected web that holds the entire world in its grasp. He also has a novelist’s eye for the moment at hand, how it spreads and fills with love and stops time . . . In Baker’s hands, an endlessly interesting, somewhat treacherous truth emerges; we are implicated in each other’s lives, and all drink from the same rich and complex well.',
	},
]

const Review = ({ data }) => {
	return (
		<Box sx={{ mb: [6, 6, 6, 7] }}>
			<Box sx={{ fontSize: [10], mb: [-7], color: 'teal' }}>“</Box>
			<Box sx={{ fontSize: [3, 3, 3, 4] }}>{data.review}</Box>
			<Box
				sx={{
					mt: [3],
					fontSize: [3, 3, 3, 4],
					fontStyle: 'italic',
				}}
			>
				— {data.source}
			</Box>
		</Box>
	)
}

const Novel = () => {
	const { x, y } = useWindowScroll()

	return (
		<Layout route='/novel'>
			<Row sx={{ mt: [8, 9, 9, 11] }}>
				<Column start={[1, 1, 2, 2]} width={[5, 6, 6, 6]}>
					<Box
						sx={{
							mb: [5],
							mt: [0, -2, -2, -2],
							fontSize: [6, 6, 6, 7],
							fontWeight: 800,
							letterSpacing: '0.01em',
						}}
					>
						Planes
					</Box>
					<Box sx={{ fontSize: [4, 4, 4, 5], mb: [4] }}>
						In Rome, Amira waits anxiously for news of her husband, stuck in a
						shadowy Moroccan prison. In small-town North Carolina, Mel learns of
						a startling connection between a local airline and the CIA’s
						post-9/11 rendition operations. As the two women’s lives unfold,
						they begin to resonate like the two sides of a tuning fork, together
						creating a story of marriage, friendship, and secrecy — of global
						crimes and their very local effects.{' '}
						<Link href='/'>Pre-order now</Link>.
					</Box>
				</Column>
			</Row>
			<Row>
				<Column
					start={[1, 1, 2, 2]}
					width={[6, 6, 6, 6]}
					sx={{
						mt: [8, 8, 8, 9],
						fontSize: [5, 5, 5, 6],
						fontWeight: 800,
						letterSpacing: '0.01em',
					}}
				>
					What others are saying
				</Column>
			</Row>
			<Row sx={{ mt: [4, 4, 4, 6] }}>
				<Column start={[1, 1, 2, 2]} width={[6, 3, 4, 4]}>
					{contents
						.filter((d, i) => i % 2 == 0)
						.map((d) => {
							return <Review data={d} />
						})}
				</Column>
				<Column start={[1, 5, 7, 7]} width={[6, 3, 4, 4]}>
					{contents
						.filter((d, i) => i % 2 == 1)
						.map((d) => {
							return <Review data={d} />
						})}
				</Column>
			</Row>
			<Box
				sx={{
					position: 'fixed',
					left: 0,
					top: 0,
					bg: 'background',
					width: '100%',
					height: '100%',
					zIndex: -1,
					opacity: 0.3,
				}}
			/>
			<Image
				sx={{
					objectFit: 'cover',
					objectPosition: 'center center',
					height: 'calc(100vh)',
					opacity: Math.max(0.2, 1 - y / 400),
					position: 'fixed',
					left: 0,
					top: 0,
					width: '100%',
					zIndex: -2,
				}}
				src='/novel.png'
			/>
		</Layout>
	)
}

export default Novel
