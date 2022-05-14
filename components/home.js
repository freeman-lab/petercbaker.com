import Link from 'next/link'
import { Box, IconButton } from 'theme-ui'

const Home = ({ route, setExpanded }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: ['12px', 20, 20, 32],
        left: ['10px', 20, 28, 32],
        zIndex: 1002,
      }}
    >
      <Link href='/' sx={{ '&:hover': { opacity: 1 }, border: 'none' }}>
        <a tabIndex={-1} >
        <IconButton
          onClick={() => {if (route === '/') setExpanded(false)}}
          aria-label='home'
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
              strokeWidth: [2.75, 2.75, 2.75, 2.75],
            }}
          >
            <circle cx='31.5' cy='31.5' r='30.5' />
            <path d='M15.7,19.3h9.5c3.5,0,6.3,2.8,6.3,6.3v22.1c0-2.6-2.1-4.7-4.7-4.7H15.7V19.3z' />
            <path d='M47.3,19.3h-9.5c-3.5,0-6.3,2.8-6.3,6.3v22.1c0-2.6,2.1-4.7,4.7-4.7h11.1V19.3z' />{' '}
          </Box>
        </IconButton>
        </a>
      </Link>
    </Box>
  )
}

export default Home
