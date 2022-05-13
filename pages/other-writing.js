import { Box, Grid, Image, Flex, Link, Container } from 'theme-ui'
import { Row, Column, Layout } from '../components'
import Entry from '../components/entry'
import Halo from '../components/halo'

const contents = [
  {
    title: 'Death Drives',
    source: 'New York Review of Books',
    summary:
      'Review essay about US pedestrian fatalities and car/street culture during the pandemic.',
    url: 'https://www.nybooks.com/articles/2021/07/22/death-drives-pedestrian-fatalities/',
  },
  {
    title: 'The Bloodhound',
    source: 'New York Review of Books',
    summary:
      'Review essay about US pedestrian fatalities and car/street culture during the pandemic.',
    url: 'https://www.nybooks.com/articles/2021/03/11/nicholson-baker-bloodhound/',
  },
  {
    title: 'A Legacy of Torture in Chicago',
    source: 'New York Review of Books',
    summary: 'Review-essay on Laurence Ralph’s “The Torture Letters.”',
    url: 'https://www.nybooks.com/articles/2020/07/02/legacy-police-torture-chicago/'
  },
  {
    title: 'This, Too, Was History',
    source: 'The Point',
    summary:
      'Dispatch from Chicago on police torture, reparations, and high school history class.',
    url: '/',
  },
  {
    title: 'Collision Course',
    source: 'The Guardian',
    summary:
      'Essay on Silicon Valley and the pedestrian death crisis.',
    url: 'https://www.theguardian.com/technology/2019/oct/03/collision-course-pedestrian-deaths-rising-driverless-cars',
  },
  {
    title: 'We The People',
    source: 'The Guardian',
    summary:
      'Essay on what we talk about when we talk about “populism.”',
    url: 'https://www.theguardian.com/news/2019/jan/10/we-the-people-the-battle-to-define-populism',
  },
]

const OtherWriting = () => {
  return (
    <Layout route='/other-writing'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[5, 5, 5, 5]}
          sx={{ fontSize: [4, 4, 4, 5] }}
        >
          You can find my freelance writing about torture, the horrors of car
          culture, books, music, and many other topics on my author pages at{' '}
          <Link href='https://www.theguardian.com/profile/peter-c-baker'>
            <i>The Guardian</i>
          </Link>
          ,{' '}
          <Link href='https://www.nybooks.com/contributors/peter-c-baker/'>
            <i>The New Review of Books</i>
          </Link>
          , and the{' '}
          <Link href='https://www.newyorker.com/contributors/peter-c-baker'>
            <i>New Yorker</i>
          </Link>
          . I also write frequently for <i>The New York Times</i> magazine.
          Below, I’ve linked to some recent favorites.
        </Column>
      </Row>
      <Row sx={{ mt: [6, 7, 7, 9] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 3, 4, 4]}
          sx={{ mt: [3, 3, 6, 6] }}
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
