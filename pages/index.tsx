import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head></Head>
      <main>
        <div className="w-full h-screen flex justify-center items-center bg-black">
          <div className="text-center mt-8">
            <h1 className="text-white">Sitio en construcción</h1>
            <h2 className="text-white">
              Mientras tanto, enterate de todo en nuestras redes sociales
            </h2>

            <div className="w-full text-center mt-8">
              <a href="https://www.instagram.com/">
                <img
                  className="inline-block w-12"
                  src="/instagram.svg"
                  alt=""
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  className="inline-block w-12"
                  style={{ marginLeft: '1rem' }}
                  src="/facebook.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
