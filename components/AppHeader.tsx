import Head from 'next/head'

export function AppHeader() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta
        id="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Nueva ley de deporte adaptado inclusivo y paralímpico. Para que el deporte sea un derecho que nos incluya a todos. "
      />

      <title>La Mayor Minoría</title>
    </Head>
  )
}
