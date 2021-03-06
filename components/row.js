import { Grid } from 'theme-ui'

const Row = ({ columns = [6, 8, 12, 12], children, sx, ...props }) => {
  return (
    <Grid
      columns={columns}
      sx={{ columnGap: [6, 7, 7, 8, 9], rowGap: [0, 0, 0, 0], ...sx }}
      {...props}
    >
      {children}
    </Grid>
  )
}

export default Row
