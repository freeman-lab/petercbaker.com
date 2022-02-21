import { Box, Flex, Container } from 'theme-ui'
import { Layout } from '../components'

const Index = () => {
	return (
		<Layout route='/' margin={false}>
			<Flex
				sx={{
					width: ['calc(100% + 6px)', 'calc(100% + 12px)', 'calc(100% + 24px)', 'calc(100% + 24px)'],
					height: ['75vh', '80vh', '95vh', '95vh'],
					alignItems: 'end',
					ml: ['-6px', '-12px', '-20px', '-24px']
				}}
			>
				<Box
					as='svg'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 500 100'
					sx={{ width: '100%', height: 'auto' }}
				>
					<Box
						as='text'
						dominantBaseline='middle'
						x={0}
						y={50}
						sx={{
							fill: 'primary',
							fontSize: '82px'
						}}
					>
						Peter C. Baker
					</Box>
				</Box>
			</Flex>
		</Layout>
	)
}

export default Index
