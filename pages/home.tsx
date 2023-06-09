
import { Nanum_Myeongjo } from 'next/font/google'

const nanum = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin']
})

export default function HomePageComponent() {
  return (
    <div className={'pageComponentContainer'}>
      <div className={'pageContainer'}>
        <div className={'portrait'}></div>
        <div className={'breakColumn'}></div>
        <div className={`lessHalfComponent ${nanum.className}`}>
          <div className={'textContainer'}>
            <span className={'header'}>
              Hello my name is Fides!
            </span>
            <br/><br/>
            <span className={'body'}>
              I'm a software engineer building one of the largest 
              warehouse management systems at Amazon. Here you can 
              find out more about me and stuff I've worked on. 
              <br/><br/>
              Thanks for visiting my website.
              I hope you have a wonderful day!
              <br/><br/>
              You might be interested in my <a href='../files/FidesLinga_Resume.pdf'>resume</a>. Check it out!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

