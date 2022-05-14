import { Box, Image, Flex, Container } from 'theme-ui'
import { Layout } from '../components'

const Index = () => {
  return (
    <Layout title='Peter C. Baker' route='/' margin={false}>
      <Flex
        sx={{
          width: [
            'calc(100% + 6px)',
            'calc(100% + 12px)',
            'calc(100% + 24px)',
            'calc(100% + 24px)',
          ],
          height: ['75vh', '80vh', '95vh', '95vh'],
          alignItems: 'flex-end',
          ml: ['-6px', '-12px', '-20px', '-24px'],
        }}
      >
        <Box
          as='svg'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 100'
          sx={{ width: '100%', height: 'auto' }}
        >
          <Box
            as='text'
            dominantBaseline='middle'
            x={0}
            y={50}
            sx={{
              fill: 'primary',
              fontSize: '82px',
            }}
          >
            Peter C. Baker
          </Box>
        </Box>
      </Flex>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          bg: 'background',
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0,
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
          transform: 'rotate(180deg)',
        }}
        src='/intro.gif'
      />
    </Layout>
  )
}

export default Index
