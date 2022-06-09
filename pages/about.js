import { default as NextLink } from 'next/link'
import { Box, Image, Grid, Link, Flex, Container } from 'theme-ui'
import { Column, Row, Layout } from '../components'

const About = () => {
  return (
    <Layout title='Peter C. Baker – About' route='/about'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[5, 6, 5, 5]}
          sx={{ fontSize: [4, 4, 4, 5] }}
        >
          <NextLink href='/novel' passHref>
            <Link>
              <i>Planes</i>
            </Link>
          </NextLink>{' '}
          is my first novel. I started it in graduate school at the University
          of North Carolina-Wilmington, and while finishing it I worked as a
          babysitter, teacher, and{' '}
          <NextLink href='/other-writing' passHref>
            <Link>magazine journalist</Link>
          </NextLink>
          . I live in Evanston, Illinois with my wife and son.
        </Column>
      </Row>
      <Row sx={{ mt: [8] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 6, 6]}
          sx={{ fontSize: [4, 4, 4, 5] }}
        >
          <Box>
            <i>twitter</i>: @
            <Link href='https://twitter.com/apcbapcb'>apcbapcb</Link>
          </Box>
          <Box>
            <i>newsletter</i>: @
            <Link href='https://petercbaker.substack.com/'>substack</Link>
          </Box>
          <Box>
            <i>agent</i>:{' '}
            <Link href='mailto:cclemans@janklow.com'>Chris Clemans</Link>
          </Box>
          <Box>
            <i>film/tv</i>:{' '}
            <Link href='mailto:kassie@anonymouscontent.com'>
              Kassie Evashevski
            </Link>
          </Box>
          <Box>
            <i>publicist</i>:{' '}
            <Link href='mailto:snisbet@penguinrandomhouse.com'>
              Sarah Nisbet
            </Link>
          </Box>
          <Box>
            <i>photographer</i>:{' '}
            <Link href='https://www.jonmichaelphoto.com'>
              Jonathan Castillo
            </Link>
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
          opacity: 0.05,
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
        src='/about.jpg'
      />
    </Layout>
  )
}

export default About
