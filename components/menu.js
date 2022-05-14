import { useState } from 'react'
import Link from 'next/link'
import { Box, Container, Link as ThemedLink, IconButton } from 'theme-ui'
import { Row, Column } from '../components'
import { alpha } from '@theme-ui/color'
import Home from './home'

const sx = {
  menu: {
    mb: [6, 6, 6, 10],
    fontFamily: 'mono',
    fontSize: [5, 6, 7, 8],
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
      <Box
        sx={{
          position: 'fixed',
          top: ['12px', 20, 20, 32],
          right: ['10px', 20, 28, 32],
          zIndex: 1002,
        }}
      >
        <IconButton
          aria-label='Menu'
          sx={{
            width: [62, 52, 52, 72],
            height: [62, 52, 52, 72],
            cursor: 'pointer',
            p: ['14px', 1, 1, 1],
            m: ['-10px', 0, 0, 0],
          }}
          onClick={() => setExpanded((prev) => !prev)}
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
          position: 'fixed',
          left: 0,
          top: 0,
          bg: alpha('background', 0.75),
          width: '100%',
          height: '100%',
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? 'all' : 'none',
          zIndex: 1001,
          transition: 'opacity 0.3s',
          backdropFilter: 'blur(12px) opacity(1)',
        }}
      >
        <Home route={route} setExpanded={setExpanded} />
        <Container>
          <Row>
            <Column start={[2, 2, 3, 3]} width={[5, 6, 8, 8]}>
              <Box sx={{ mt: [8, 8, 9, 11] }}>
                <Link href='/about' passHref>
                  <ThemedLink sx={{ textDecoration: 'none' }}>
                    <Box
                      sx={sx.menu}
                      onClick={onClick(route, '/about', setExpanded)}
                    >
                      About
                    </Box>
                  </ThemedLink>
                </Link>
                <Link href='/novel' passHref>
                  <ThemedLink sx={{ textDecoration: 'none' }}>
                    <Box
                      sx={sx.menu}
                      onClick={onClick(route, '/novel', setExpanded)}
                    >
                      Novel
                    </Box>
                  </ThemedLink>
                </Link>
                <Link href='/press-and-events' passHref>
                  <ThemedLink sx={{ textDecoration: 'none' }}>
                    <Box
                      sx={sx.menu}
                      onClick={onClick(route, '/press-and-events', setExpanded)}
                    >
                      Press & Events
                    </Box>
                  </ThemedLink>
                </Link>
                <Link href='/other-writing' passHref>
                  <ThemedLink sx={{ textDecoration: 'none' }}>
                    <Box
                      sx={sx.menu}
                      onClick={onClick(route, '/other-writing', setExpanded)}
                    >
                      Other Writing
                    </Box>
                  </ThemedLink>
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
