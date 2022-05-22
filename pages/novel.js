import { default as NextLink } from 'next/link'
import { Box, Grid, Image, Flex, Link, Divider, Container } from 'theme-ui'
import { Row, Column, Layout } from '../components'
import { useWindowScroll } from 'react-use'
import { default as contents } from '../data/blurbs'

const Review = ({ data }) => {
  return (
    <Box sx={{ mb: [6, 6, 6, 7] }}>
      <Box sx={{ fontSize: [10], mb: ['-80px'], ml: ['-5px'], color: 'teal' }}>
        “
      </Box>
      <Box
        sx={{
          textShadow: ({ colors }) =>
            `0px 0px 20px ${colors.background}, 0px 0px 20px ${colors.background}`,
          fontSize: [3, 3, 3, 4],
          position: 'relative',
        }}
      >
        {data.review}”
      </Box>
      <Box
        sx={{
          mt: [3],
          fontSize: [3, 3, 3, 4],
          fontStyle: 'italic',
        }}
      >
        — {data.source}
      </Box>
    </Box>
  )
}

const Novel = () => {
  const { x, y } = useWindowScroll()

  return (
    <Layout title='Peter C. Baker – Novel' route='/novel'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column start={[1, 1, 2, 2]} width={[5, 6, 5, 5]}>
          <Box sx={{ fontSize: [4, 4, 4, 5], mb: [4] }}>
            In Rome, Amira waits for news of her husband, stuck in a shadowy
            Moroccan prison.
            <br />
            <br />
            In small-town North Carolina, Mel learns of a connection between a
            local airline and the CIA’s post-9/11 rendition operations.
            <br />
            <br />
            As the two women’s lives unfold, they begin to resonate like the two
            sides of a tuning fork, creating a story of marriage, friendship,
            and secrecy — of global crimes and their very local effects.
          </Box>
        </Column>
      </Row>
      <Row>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 6, 6]}
          sx={{
            mt: [3, 3, 3, 4],
            fontSize: [5, 5, 5, 6],
            letterSpacing: '0.01em',
          }}
        >
          <Link href='https://www.penguinrandomhouse.com/books/676700/planes-by-peter-c-baker/'>
            Order now
          </Link>
          . Read{' '}
          <NextLink href='/press-and-events' passHref>
            <Link>reviews</Link>
          </NextLink>
          .
        </Column>
      </Row>
      <Row sx={{ mt: [6, 6, 6, 7] }}>
        <Column start={[1, 1, 2, 2]} width={[6, 3, 4, 4]}>
          {contents
            .filter((d, i) => i % 2 == 0)
            .map((d, i) => {
              return <Review key={i} data={d} />
            })}
        </Column>
        <Column start={[1, 5, 7, 7]} width={[6, 3, 4, 4]}>
          {contents
            .filter((d, i) => i % 2 == 1)
            .map((d, i) => {
              return <Review key={i} data={d} />
            })}
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
          opacity: 0.15,
        }}
      />
      <Image
        sx={{
          objectFit: 'cover',
          objectPosition: 'center center',
          height: 'calc(100vh)',
          opacity: 1.0,
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: -2,
        }}
        src='/novel.jpg'
      />
    </Layout>
  )
}

export default Novel
