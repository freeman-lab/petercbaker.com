import { Container } from 'theme-ui'
import Menu from './menu'
import Guide from './guide'
import FadeIn from './fade-in'

const Layout = ({ children, margin = true, route }) => {
  return (
    <>
      <Guide />
      <Menu route={route} />
      <FadeIn>
        <Container sx={{ mb: margin ? [7, 8, 8, 9] : [0] }}>
          {children}
        </Container>
      </FadeIn>
    </>
  )
}

export default Layout
