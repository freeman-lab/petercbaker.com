import { Box, Grid, Flex, Link, Container } from 'theme-ui'
import { Row, Column, Layout } from '../components'

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

const Entry = ({ data }) => {
  return (
    <Box sx={{ mb: [6, 7, 8, 10] }}>
      <Link
        href={data.url}
        sx={{
          '&:hover > #box > #arrow': {
            transform: 'rotate(45deg) translate(3px,-3px)',
          },
        }}
      >
        <Box sx={{ fontSize: [4, 4, 4, 5], letterSpacing: '0.07em' }}>
          {data.title}
        </Box>
        <Box sx={{ fontSize: [4, 4, 4, 5] }} id='box'>
          <i>{data.source}</i>
          <Box
            as='span'
            id='arrow'
            sx={{
              ml: [2],
              transition: 'transform 0.15s',
              display: 'inline-block',
            }}
          >
            ↗
          </Box>
        </Box>
        <Box sx={{ fontSize: [3, 3, 3, 4], mt: [2, 2, 2, 3] }}>
          {data.summary}
        </Box>
      </Link>
    </Box>
  )
}

const About = () => {
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
      <Row sx={{ mt: [8, 9, 9, 10] }}>
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

export default About
