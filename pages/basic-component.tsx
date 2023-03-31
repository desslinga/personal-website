
import Image from 'next/image'
import splashImage from '../assets/sample_image.png'

export default function BasicComponent() {
  return (
      <div className='big-font'>
        Howdy! Welcome to my personal website!
        <Image className='main-picture' src={splashImage} />
      </div>
  )
}
