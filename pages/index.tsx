import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import App from './_app'
import BasicComponent from './basic-component'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fides' Website</title>
        <meta 
            name="description" 
            content="Hello, I'm Fides. Welcome to my personal website! You can check out what I've
            been working on recently :). Feel free to say hi!" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App/>
    </>
  )
}
