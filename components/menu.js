import { useState } from 'react'
import Link from 'next/link'
import { Box, Container, IconButton } from 'theme-ui'
import { Row, Column } from '../components'

const sx = {
	menu: {
		mb: [7],
		fontFamily: 'mono',
		fontSize: [5, 5, 7, 7],
		cursor: 'pointer',
	},
}

const onClick = (route, target, set) => {
	return () => {
		if (route === target) set(false)
	}
}

const Menu = ({ route }) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<>
			<Box sx={{ position: 'fixed', top: ['10px', 20, 20, 20], right: ['10px', 20, 20, 20], zIndex: 1002 }}>
				<IconButton sx={{ width: [48, 64, 64, 64], height: [48, 64, 64, 64], cursor: 'pointer' }}>
					<Box
						as='svg'
						width='63'
						height='63'
						viewBox='0 0 63 63'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						sx={{ fill: 'background', stroke: 'primary', strokeWidth: [2.5, 3, 3, 3] }}
						onClick={() => setExpanded((prev) => !prev)}
					>
						<circle cx='31.5' cy='31.5' r='30.5' />
						{!expanded && (
							<>
								<line x1='16' y1='21' x2='47' y2='21' />
								<line x1='46' y1='22' x2='46' y2='16' />
								<line x1='16' y1='33' x2='46' y2='33' />
								<line x1='46' y1='34' x2='46' y2='28' />
								<line x1='16' y1='45' x2='47' y2='45' />
								<line x1='46' y1='46' x2='46' y2='40' />
							</>
						)}
						{expanded && (
							<>
								<line x1='16' y1='46' x2='47' y2='17' />
								<line x1='16' y1='17' x2='47' y2='46' />
							</>
						)}
					</Box>
				</IconButton>
			</Box>
			<Box
				sx={{
					bg: 'background',
					position: 'fixed',
					left: 0,
					top: 0,
					width: '100%',
					height: '100%',
					opacity: expanded ? 1 : 0,
					pointerEvents: expanded ? 'all' : 'none',
					zIndex: 1001,
					transition: 'opacity 0.3s',
				}}
			>
				<Container>
					<Row>
						<Column start={2} width={4}>
							<Box sx={{ mt: [8, 8, 9, 10] }}>
								<Link href='/'>
									<Box sx={sx.menu} onClick={onClick(route, '/', setExpanded)}>
										Home
									</Box>
								</Link>
								<Link href='/about'>
									<Box
										sx={sx.menu}
										onClick={onClick(route, '/about', setExpanded)}
									>
										About
									</Box>
								</Link>
								<Link href='/novel'>
									<Box
										sx={sx.menu}
										onClick={onClick(route, '/novel', setExpanded)}
									>
										Novel
									</Box>
								</Link>
								<Link href='/other-writing'>
									<Box
										sx={sx.menu}
										onClick={onClick(route, '/other-writing', setExpanded)}
									>
										Other writing
									</Box>
								</Link>
							</Box>
						</Column>
					</Row>
				</Container>
			</Box>
		</>
	)
}

export default Menu
