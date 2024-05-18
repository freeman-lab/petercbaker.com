import { Box, Grid, Image, Flex, Link, Container } from 'theme-ui'
import { Row, Column, Layout } from '../components'
import Entry from '../components/entry'
import Halo from '../components/halo'
import { default as contents } from '../data/other-writing'

const OtherWriting = () => {
  return (
    <Layout title='Peter C. Baker – Other Writing' route='/other-writing'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[5, 5, 5, 5]}
          sx={{ fontSize: [4, 4, 4, 5] }}
        >
          You can find my writing about torture, the horrors of car culture,
          books, music, and other topics on my author pages at{' '}
          <Link href='https://www.theguardian.com/profile/peter-c-baker'>
            <i>The Guardian</i>
          </Link>
          ,{' '}
          <Link href='https://www.nybooks.com/contributors/peter-c-baker/'>
            <i>The New York Review of Books</i>
          </Link>
          , and the{' '}
          <Link href='https://www.newyorker.com/contributors/peter-c-baker'>
            <i>New Yorker</i>
          </Link>
          . I also write frequently for <i>The New York Times Magazine</i>, and run the music newsletter <Link href='https://tracksontracks.substack.com/'>Tracks on Tracks</Link>.<br />
          <br />
          Some recent favorites:
        </Column>
      </Row>
      <Row sx={{ mt: [5, 6, 6, 7] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 3, 4, 4]}
          sx={{ mt: [3, 3, 3, 6] }}
        >
          {contents
            .filter((d, i) => i % 2 == 0)
            .map((d) => (
              <Entry key={d.title} data={d} />
            ))}
        </Column>
        <Column
          start={[1, 5, 7, 7]}
          width={[6, 3, 4, 4]}
          sx={{ mt: [3, 3, 6, 6] }}
        >
          {contents
            .filter((d, i) => i % 2 == 1)
            .map((d) => (
              <Entry key={d.title} data={d} />
            ))}
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
          opacity: 0.7,
        }}
      />
      <Image
        sx={{
          objectFit: 'cover',
          objectPosition: 'center center',
          height: 'calc(100vh)',
          opacity: 1,
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: -2,
        }}
        src='/other-writing.jpg'
      />
    </Layout>
  )
}

export default OtherWriting
