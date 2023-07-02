
import { Nanum_Myeongjo } from 'next/font/google'

const nanum = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin']
})

export default function WorkPageComponent() {
  return (
    <>
      <div className={'pageComponentContainer'}>
        <div className={'pageContainer'}>
          <div className={`fullWidthComponent`}>
            <div className={'textContainer'}>
              <span className={'body'}>
                Here you'll find a relatively inconsistent collection
                of my creative work. I don't usually create my artwork
                for money, but I've done some of them during an internship.
                <br/><br/>
                That said, I'm looking to work on some design projects.
                Send me a message and I'll see what I can do. At the moment
                though I have a preference for not-for-profit projects!
                <br/><br/>
                P.S. Yes, every art-piece featured on this website 
                was drawn by me.
              </span>
            </div>
            <div className={'textContainer'}>
              <span className={'header'}>
                under construction...
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

