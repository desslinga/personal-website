
import { Nanum_Myeongjo } from 'next/font/google'
import Image from 'next/image'

const nanum = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin']
})

const galleryItems = [{
  name: 'uofthacksfive1'
}, {
  name: 'gotransit1'
}, {
  name: 'flora1'
}, {
  name: 'uofthacksfive2'
}, {
  name: 'flora2'
}, {
  name: 'gotransit2'
}, {
  name: 'gotransit3'
}, {
  name: 'gotransit4'
}, {
  name: 'woman1'
}, {
  name: 'amacss1'
}, {
  name: 'uofthacksfive3'
}, {
  name: 'gotransit5'
}, {
  name: 'amacss2'
}, {
  name: 'amacss3'
}, {
  name: 'woman2'
}, {
  name: 'flora3'
}, {
  name: 'amacss4'
}, {
  name: 'amacss5'
}]

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
          </div>
          {galleryItems.map(item => {
            return (
              <div className={`halfComponent galleryImage ${item.name}`}>
              </div>
            )
          })}
          <div className={`fullWidthComponent`}>
            <div className={'textContainer'}>
              <span className={'body'}>
                Thanks for making it to the end. I have a few more art pieces
                that I'll be posting here soon. When I have time I'll also add
                some descriptions for each piece, including my process!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

