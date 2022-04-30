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
          Peter’s essays, criticism, reportage, and fiction have been published
          in <i>The New Yorker</i>, <i>The New York Review of Books</i>,{' '}
          <i>The Guardian</i>, <i>The New York Times Magazine</i>,{' '}
          <i>The Nation</i>, <i>The Times Literary Supplement</i>, and{' '}
          <i>Granta</i>. He lives in Evanston, Illinois.
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
            <i>Newsletter</i>: petercbaker.substack.com
          </Box>
          <Box>
            <i>Agent</i>: agent@agency.com
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
