import { Box, Image, Grid, Link, Flex, Container } from 'theme-ui'
import { Column, Row, Layout } from '../components'
import Entry from '../components/entry'

const events = [
  {
    title: 'June 4 @ 6pm',
    source: 'Bookends & Beginnings',
    summary:
      'Conversation with Chicago writer Diego Báez about Planes with a reading and a Q+A.',
  },
  {
    title: 'June 7 @ 6pm',
    source: "Chicago's Seminary Co-op Bookstore",
    summary:
      'Online discussion with Phil Klay about literature and the post-9/11 forever wars.',
  },
]

const reviews = [
  {
    title: 'Starred review',
    source: "Publisher's Weekly",
    summary:
      '“Arresting ... Baker masterfully juggles the two concurrent storylines, never losing the urgency of either ... Along the way, the author digs deep into the nuances of love, pain, betrayal, and the promise of deliverance. This moving debut buzzes with relevance.”',
  },
  {
    title: 'Starred review',
    source: 'Kirkus Reviews',
    summary:
      '“Affecting ... A thoughtful look at the small-scale fallout of an international issue.”',
  },
]

const About = () => {
  return (
    <Layout route='/press'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 3, 4, 4]}
          sx={{
            mt: [0, -2, -2, -2],
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          Events
          <Box sx={{ mt: [3, 3, 7, 8] }}>
            {events.map((d) => (
              <Entry key={d.title} data={d} />
            ))}
          </Box>
        </Column>
        <Column
          start={[1, 5, 7, 7]}
          width={[6, 3, 4, 4]}
          sx={{
            mt: [4, -2, -2, -2],
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          Reviews
          <Box sx={{ mt: [3, 3, 7, 8] }}>
            {reviews.map((d) => (
              <Entry key={d.title} data={d} />
            ))}
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

export default About
