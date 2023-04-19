
import Image from 'next/image'
import { Gloock, Nanum_Myeongjo } from 'next/font/google'

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
        <div className={`description ${nanum.className}`}>
          <div className={'textContainer'}>
            <span className={'header'}>
              page under construction...
            </span>
            <br/><br/>
            <span className={'body'}>
              check back soon! :)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

