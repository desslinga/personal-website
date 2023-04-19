import '@/styles/globals.scss'
import Head from 'next/head'
import { Nanum_Myeongjo } from 'next/font/google'
import { AppProps } from 'next/app'
import { useMediaQuery } from 'react-responsive';
import dynamic from 'next/dynamic'

const nanum = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  const isBreakpoint = useMediaQuery({ query: `(max-width: 700px)` })
  const NavComponent = dynamic(() => import('../components/nav'), { ssr: false })

  return (
    <>
      <Head>
          <title>Fides' Website</title>
          <meta 
              name="description" 
              content="Hello, I'm Fides. Welcome to my personal website! You can check out what I've
              been working on recently :). Feel free to say hi!" 
          />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="manifest" href="/images/site.webmanifest"/>
          <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className={nanum.className}>
        <NavComponent></NavComponent>
        <Component {...pageProps}></Component>
      </div>
    </>
  )
}