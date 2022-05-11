import { Box, Image, Grid, Link, Flex, Container } from 'theme-ui'
import { Column, Row, Layout } from '../components'

const About = () => {
  return (
    <Layout route='/about'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[5, 6, 6, 5]}
          sx={{ fontSize: [4, 4, 4, 5] }}
        >
          <Link href='/novel'>Planes</Link> is my first novel. My essays,
          criticism, and journalism have been published by <i>The Guardian</i>,{' '}
          <i>The New York Review of Books</i>, <i>The New Yorker</i>,{' '}
          <i>The New York Times Magazine</i>, and elsewhere. I live in Evanston,
          Illinois.
        </Column>
      </Row>
      <Row sx={{ mt: [8] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 6, 6]}
          sx={{ fontSize: [4, 4, 4, 5] }}
        >
          <Box>
            <i>Twitter</i>:{' '}
            <Link href='https://twitter.com/apcbapcb'>@apcbapcb</Link>
          </Box>
          <Box>
            <i>Newsletter</i>:{' '}
            <Link href='https://petercbaker.substack.com/'>@substack</Link>
          </Box>
          <Box>
            <i>Agent</i>: <Link href='cclemans@janklow.com'>Chris Clemans</Link>
          </Box>
          <Box>
            <i>Publisher</i>:{' '}
            <Link href='snisbet@penguinrandomhouse.com'>Sarah Nisbet</Link>
          </Box>
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
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: -2,
        }}
        src='/about.png'
      />
    </Layout>
  )
}

export default About
