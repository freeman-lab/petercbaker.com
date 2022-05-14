import Head from 'next/head'

const Meta = () => {
  const titleProp = 'Peter C. Baker'
  const descriptionProp = ''
  const cardProp = ''

  return (
    <Head>
      <title>{titleProp}</title>
      <meta name='description' content={descriptionProp} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link
        rel='preload'
        href='https://fonts.freeman.land/arizona-flare/ABCArizonaFlare-Light.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.freeman.land/arizona-flare/ABCArizonaFlare-LightItalic.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.freeman.land/garton/garton-regular-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <meta name='theme-color' content='#000000' />
      <link rel='alternate icon' type='image/png' href='/favicon.png' />
      <link rel='mask-icon' href='/favicon.svg' color='#F4F4F4' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <meta property='og:title' content={titleProp} />
      <meta property='og:description' content={descriptionProp} />
      <meta property='og:image' content={cardProp} />
      <meta property='og:url' content='https://petercbaker.com' />
      <meta name='twitter:title' content={titleProp} />
      <meta name='twitter:description' content={descriptionProp} />
      <meta name='twitter:image' content={cardProp} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}

export default Meta
