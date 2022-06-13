import Head from 'next/head'

export function AppHeader() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
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
        content="Sacá lo mejor de vos. Crecé como jugador y como persona con los mejores entrenadores de Salta."
      />
      <link rel="apple-touch-icon" href="logo192.png" />

      <title>La Mayor Minoría</title>
    </Head>
  )
}
