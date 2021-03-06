import { Box, Image, Grid, Link, Flex, Container } from 'theme-ui'
import { Column, Row, Layout } from '../components'
import Entry from '../components/entry'
import Event from '../components/event'
import { default as events } from '../data/events'
import { default as reviews } from '../data/reviews'

const PressAndEvents = () => {
  return (
    <Layout title='Peter C. Baker – Press & Events' route='/press-and-events'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 3, 2, 2]}
          sx={{
            mt: ['-13px', -2, -2, -2],
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          Reviews
        </Column>
        <Column
          start={[1, 4, 5, 5]}
          width={[6, 4, 6, 6]}
          sx={{
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          <Row
            columns={[1, 1, 2, 2]}
            sx={{ mt: ['12px', '12px', '12px', '18px'] }}
          >
            <Column start={1} width={1}>
              {reviews
                .filter((d, i) => i % 2 == 0)
                .map((d, i) => (
                  <Entry key={i} data={d} />
                ))}
            </Column>
            <Column start={[1, 1, 2, 2]} width={1}>
              {reviews
                .filter((d, i) => i % 2 == 1)
                .map((d, i) => (
                  <Entry key={i} data={d} />
                ))}
            </Column>
          </Row>
        </Column>
      </Row>
      <Row sx={{ mt: [6, 7, 7, 9] }}>
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
          start={[1, 4, 5, 5]}
          width={[6, 4, 6, 6]}
          sx={{
            fontSize: [6, 6, 6, 7],
            letterSpacing: '0.01em',
          }}
        >
          <Row
            columns={[1, 1, 2, 2]}
            sx={{ mt: ['12px', '12px', '12px', '18px'] }}
          >
            {events.map((d, i) => (
              <Event key={i} data={d} />
            ))}
          </Row>
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
          opacity: [0.7, 0.6, 0.6, 0.6],
        }}
      />
      <Image
        sx={{
          objectFit: 'cover',
          objectPosition: [
            '30% center',
            'center center',
            'center center',
            'center center',
          ],
          height: 'calc(100vh)',
          opacity: 1,
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          zIndex: -2,
        }}
        src='/press-and-events.jpg'
      />
    </Layout>
  )
}

export default PressAndEvents
