import { Nanum_Myeongjo } from 'next/font/google'

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