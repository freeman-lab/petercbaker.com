import { Container } from 'theme-ui'
import Menu from './menu'
import Home from './home'
import Guide from './guide'
import Label from './label'
import FadeIn from './fade-in'
import Meta from './meta'

const Layout = ({ children, title, margin = true, route }) => {
  return (
    <>
      <Guide />
      <Meta title={title} />
      <Menu route={route} />
      <FadeIn>
        <Label route={route} />
        <Container sx={{ mb: margin ? [7, 8, 8, 9] : [0] }}>
          {children}
        </Container>
      </FadeIn>
    </>
  )
}

export default Layout
