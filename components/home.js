import { Box, Link, IconButton } from 'theme-ui'

const Home = ({ route }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: ['12px', 20, 20, 32],
        left: ['10px', 20, 28, 32],
        zIndex: 1002,
      }}
    >
      {route !== '/' && (
        <Link href='/' sx={{ '&:hover': { opacity: 1 }, border: 'none' }}>
          <IconButton
            sx={{
              width: [62, 52, 52, 72],
              height: [62, 52, 52, 72],
              cursor: 'pointer',
              p: ['14px', 1, 1, 1],
              m: ['-10px', 0, 0, 0],
            }}
          >
            <Box
              as='svg'
              viewBox='0 0 63 63'
              fill='none'
              width='100%'
              xmlns='http://www.w3.org/2000/svg'
              sx={{
                fill: 'background',
                stroke: 'primary',
                strokeWidth: [3, 3, 3, 3],
              }}
            >
              <circle cx='31.5' cy='31.5' r='30.5' />
              <line x1='11.5' y1='31.5' x2='51.5' y2='31.5' />
              <path d='M11.6,31.4c0,0,17-2.5,18.9-17.6' />
              <path d='M11.6,31.6c0,0,17,2.5,18.9,17.6' />
            </Box>
          </IconButton>
        </Link>
      )}
    </Box>
  )
}

export default Home
