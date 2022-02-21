import { Grid } from 'theme-ui'

const Row = ({ columns = 6, children, sx, ...props }) => {
	return (
		<Grid
			columns={columns}
			sx={{ columnGap: [5, 7, 8, 9], rowGap: [0, 0, 0, 0], ...sx }}
			{...props}
		>
			{children}
		</Grid>
	)
}

export default Row
