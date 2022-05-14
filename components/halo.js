import { Box } from 'theme-ui'

const Halo = () => {
  return (
    <Box
      sx={{
        zIndex: -1,
        width: '100%',
        height: '100%',
        bg: 'background',
        position: 'absolute',
        opacity: 0.2,
        boxShadow: ({ colors }) => `0 0 10px 10px ${colors.background}`,
      }}
    />
  )
}

export default Halo
