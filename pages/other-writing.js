import { Box, Grid, Flex, Link, Container } from 'theme-ui'
import { Row, Column, Layout } from '../components'
import Entry from '../components/entry'

const contents = [
  {
    title: 'Death Drives',
    source: 'New York Review of Books',
    summary:
      'Review essay about US pedestrian fatalities and car/street culture during the pandemic.',
    url: '',
  },
  {
    title: 'The Bloodhound',
    source: 'New York Review of Books',
    summary:
      'Review essay about US pedestrian fatalities and car/street culture during the pandemic.',
    url: '',
  },
  {
    title: 'This, Too, Was History',
    source: 'The Point',
    summary:
      'Dispatch from Chicago on police torture, reparations, and high school history class.',
    url: '',
  },
  {
    title: 'Bad ends',
    source: 'New York Times Magazine',
    summary:
      'On George Clooney’s “Midnight Sky” and disaster movies and disaster politics.',
    url: '',
  },
]

const OtherWriting = () => {
  return (
    <Layout route='/other-writing'>
      <Row sx={{ mt: [8, 9, 9, 11] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[5, 5, 6, 6]}
          sx={{ fontSize: [4, 4, 4, 5] }}
        >
          I've written a bunch of cool stuff. My central journalistic themes are
          making fun of Elon Musk and Tesla, getting angry about how hard it is
          to walk on sidewalks, and visiting sites at which terrible things have
          happened and writing about it eloquently.
        </Column>
      </Row>
      <Row sx={{ mt: [8, 8, 8, 9] }}>
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
    </Layout>
  )
}

export default OtherWriting
