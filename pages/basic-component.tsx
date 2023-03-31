
import Image from 'next/image'
import { Gloock } from 'next/font/google'
import splashImage from '../assets/sample_image.png'

const gloock = Gloock({
  weight: '400',
  subsets: ['latin']
})

export default function BasicComponent() {
  return (
      <div className={`upper-div ${gloock.className}`}>
        <div className={'center-header'}>
          Hi! Welcome to my personal website!
        </div>
        <div className={'middle-div'}>
          My name's Fides and I'm an SDE at Amazon. My website is currently under construction.
          <br/>
          Thanks for stopping by! Visit again soon, things will be changing around here...
        </div>
        <Image className='main-picture' src={splashImage} alt={'Splash Image'} />
      </div>
  )
}
