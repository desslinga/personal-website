
import Image from 'next/image'
import { Gloock, Nanum_Myeongjo } from 'next/font/google'
import Link from "next/link"

const gloock = Gloock({
  weight: '400',
  subsets: ['latin']
})

const nanum = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin']
})

export default function AboutPageComponent() {
  return (
    <div className={'pageComponentContainer'}>
      <div className={'pageContainer'}>
        <div className={`description ${nanum.className} width100`}>
          <div className={'textContainer'}>
            <span className={'header'}>
              we don't have that page!
            </span>
            <br/><br/>
            <span className={'body'}>
              go back <Link href='/home'>home</Link>.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

