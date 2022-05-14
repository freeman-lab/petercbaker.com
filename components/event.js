import { Box, Link } from 'theme-ui'

const Event = ({ data }) => {
  return (
    <Box sx={{ mb: [6, 7, 7, 9] }}>
      <Link
        href={data.url}
        sx={{
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover > #box > #arrow': {
              transform: 'rotate(45deg) translate(3px,-3px)',
            },
          },
          textDecoration: 'none',
        }}
      >
        <Box sx={{ fontSize: [4, 4, 4, 5] }}>{data.location}</Box>
        <Box
          sx={{ fontSize: [4, 4, 4, 5], lineHeight: '1.1em', mt: [1] }}
          id='box'
        >
          <i>{data.time}</i>
          <Box
            as='span'
            id='arrow'
            sx={{
              ml: [2],
              transition: 'transform 0.15s',
              display: 'inline-block',
            }}
          >
            ↗
          </Box>
        </Box>

        <Box
          sx={{
            fontSize: [3, 3, 3, 4],
            mt: [2, 2, 2, 3],
          }}
        >
          {data.summary}
        </Box>
      </Link>
    </Box>
  )
}

export default Event
