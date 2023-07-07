
import { Nanum_Myeongjo } from 'next/font/google'

const nanum = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin']
})

export default function AboutPageComponent() {
  return (
    <>
      <div className={'pageComponentContainer'}>
        <div className={'pageContainer'}>
          <div className={`fullWidthComponent`}>
            <div className={'textContainer'}>
              <span className={'body'}>
                Hello! I’m Fides and this is my home on the internet. 
                Thanks for dropping by! I’ve put together a little narrative 
                about myself, if you’d like to read on below.
              </span>
            </div>
          </div>
          <div className={`firstAboutText moreHalfComponent ${nanum.className}`}>
            <div className={'textContainer'}>
              <span className={'header'}>
                from MNL to YYZ.
              </span>
              <br/><br/>
              <span className={'body'}>
                A little background — I’m from the Philippines, and I came with 
                my family to Toronto, Canada when I was 9. Since then I’ve stayed 
                in Toronto my whole life. Growing up, I wanted to be an artist. 
                But as I’ve gotten busier, I haven’t had as much time to draw and 
                I’m more of an art appreciator now. 
                <br/><br/>
                That said, I do have some of my artwork on this website if you're
                interested. Check it out <a href='/work'>here</a>.
              </span>
            </div>
          </div>
          <div className={'globe'}></div>
          <div className={'uniDegree'}></div>
          <div className={`secondAboutText halfComponent ${nanum.className}`}>
            <div className={'textContainer'}>
              <span className={'header'}>
                A pricey piece of paper.
              </span>
              <br/><br/>
              <span className={'body'}>
                For me, I look more fondly upon my memories as time goes on. That’s 
                how I feel about my time at UTSC. I remember going into my first 
                CSCA08 class, thinking, I barely made it here — I don’t know 
                how I’ll make it into the program!
                <br/><br/>
                One of my favourite things I did at UTSC was getting to teach as a 
                TA, and getting to know what other people were up to — the internships 
                people had, the courses they were taking. 
                <br/><br/>
                If I were to have a do-over, I would say yes to more things. Like 
                going to hackathons, networking events, and what not. 
              </span>
            </div>
          </div>
          <div className={`thirdAboutText halfComponent ${nanum.className}`}>
            <div className={'textContainer'}>
              <span className={'header'}>
                I'm a software engineer.
              </span>
              <br/><br/>
              <span className={'body'}>
                Career-wise, I’m a software engineer. It’s what I do for a living 
                and my relationship with it is complex, but common — there’s a push 
                and pull between wanting to love what I do and keeping work at 
                arm’s length. This is something I’m working on! 
              <br/><br/>
                The company that I work for is Amazon, and I’m part of a cool team 
                that builds one of the largest warehouse management systems in the 
                world. The problem we solve is mostly around moving inventory from 
                Amazon’s warehouses to your home!
              </span>
            </div>
          </div>
          <div className={'amazonBox'}></div>
          <div className={'fourthAboutText fullWidthComponent'}>
            <div className={'textContainer'}>
              <span className={'header'}>
                Life is peachy.
              </span>
              <br/><br/>
              <span className={'body'}>
                My personal life is a lot more quiet. I love going on walks 
                (taking the long way), exploring new cities, thinking about 
                clothes that I wanna make, furniture that I wanna buy. All that 
                stuff. I also consume about 3 iced matcha lattes daily.
                <br/><br/>
                Lately, I’ve also been trying to make more content. 
                I’ve been taking more photos and videos but putting them 
                together is another story. Check out my instagram though! I 
                will be posting more regularly :)
                <br/><br/>
                Find me on other places on the internet!
                <br/><br/>
                <a href='https://twitter.com/fidesathome'>@twitter</a>
                <br/>
                <a href='https://www.instagram.com/fides.linga/'>@instagram</a>
                <br/>
                <a href='https://www.linkedin.com/in/fides-linga-a58430109/'>@linkedin</a>
                <br/><br/>
                My <a href='../files/FidesLinga_Resume.pdf'>resume</a> too ;)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={'desktop'}></div>
    </>
  )
}

