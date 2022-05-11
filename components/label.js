import { Box } from 'theme-ui'

const display = {
	'/press': 'Press & Events',
	'/novel': 'Novel',
	'/other-writing': 'Other Writing',
	'/about': 'About'
}

const Label = ({ route }) => {
	return (
		<Box sx={{
			fontFamily: 'mono',
			fontSize: [5, 5, 5, 6],
			position: 'absolute',
			right: ['10px', 20, 28, 36],
			top: [125, 125, 125, 252],
			writingMode: 'vertical-lr',
			display: ['none', 'initial', 'initial', 'initial']
		}}>
			{display[route]}
		</Box>
	)
}

export default Label