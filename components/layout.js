import { Container } from 'theme-ui'
import Menu from './menu'
import Guide from './guide'

const Layout = ({ children, margin = true, route }) => {
	return (
		<>
			<Guide />
			<Menu route={route} />
			<Container sx={{mb: margin ? [7, 8, 9, 10] : [0]}}>{children}</Container>
		</>
	)
}

export default Layout
