import { Box, Image, Grid, Link, Flex, Container } from 'theme-ui'
import { Column, Row, Layout } from '../components'
import Entry from '../components/entry'
import Event from '../components/event'

const events = [
  {
    time: 'June 4 @ 6pm',
    venue: 'Bookends & Beginnings',
    location: 'Evanston, IL',
    summary: 'Reading and Q+A with Diego Báez hosted at Bookends & Beginnings',
  },
  {
    time: 'June 7 @ 6pm',
    location: 'Chicago, IL (virtual)',
    summary: "w/ Phil Klay and The Point magazine hosted at Chicago's Seminary Co-op Bookstore",
  },
]

const reviews = [
  {
    source: 'Kirkus Reviews',
    summary:
      '“Affecting ... A thoughtful look at the small-scale fallout of an international issue.” (Starred Review)',
    url: 'https://www.kirkusreviews.com/book-reviews/peter-c-baker/planes/',
  },
  {
    source: "Publisher's Weekly",
    summary:
      '“Arresting ... Baker masterfully juggles the two concurrent storylines, never losing the urgency of either ... Along the way, the author digs deep into the nuances of love, pain, betrayal, and the promise of deliverance. This moving debut buzzes with relevance.” (Starred Review)',
    url: 'https://www.publishersweekly.com/978-0-593-32027-3',
  },
  {
    source: 'Booklist',
    summary:
      '“Beautifully written ... Assured ... A tale that unfurls like a thriller.”',
  },
]

const PressAndEvents = () => {
  return (
    <Layout route='/press-and-events'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 3, 2, 2]}
          sx={{
            mt: [0, -2, -2, -2],
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          Reviews
        </Column>
        <Column
          start={[1, 5, 5, 5]}
          width={[6, 3, 6, 6]}
          sx={{
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          <Row columns={2} sx={{mt: ['12px']}}>
            <Column start={1} width={1}>
            {reviews.filter((d, i) => i % 2 == 0).map((d) => (
              <Entry key={d.title} data={d} />
            ))}
            </Column>
            <Column start={2} width={1}>
            {reviews.filter((d, i) => i % 2 == 1).map((d) => (
              <Entry key={d.title} data={d} />
            ))}
            </Column>
          </Row>
        </Column>
      </Row>
      <Row sx={{ mt: [7, 8, 8, 10] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 3, 2, 2]}
          sx={{
            mt: [0, -2, -2, -2],
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          Events
        </Column>
        <Column
          start={[1, 5, 5, 5]}
          width={[6, 3, 6, 6]}
          sx={{
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          <Row columns={2} sx={{mt: ['12px']}}>
            {events.map((d) => (
              <Event key={d.title} data={d} />
            ))}
          </Row>
        </Column>
      </Row>
      
    </Layout>
  )
}

export default PressAndEvents
