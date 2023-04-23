
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
          <div className={`firstAboutText moreHalfComponent ${nanum.className}`}>
            <div className={'textContainer'}>
              <span className={'header'}>
                from MNL to YYZ.
              </span>
              <br/><br/>
              <span className={'body'}>
                Hey there! So, let me tell you a little bit about myself. 
                I'm a Filipino immigrant, just like my family, and we made 
                the move to Canada over a decade ago. We settled in the 
                beautiful neighbourhood of Forest Hill, in Toronto. 
                <br/><br/>
                Growing up, I was always drawn to the arts, particularly 
                drawing! It's something that has stuck with me over the years, 
                even as life has gotten busier. When it came time to choose a 
                career path in high school, I was torn between my love for the 
                arts and my interest in tech. I eventually chose the latter.
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
                My time at the University of Toronto Scarborough will always 
                hold a special place in my heart. I got to meet so many brilliant 
                minds and learn from the best of the best. 
                <br/><br/>
                It was there that I truly fell in love with learning, and I even 
                pushed myself to take on the role of a teaching assistant. Now, 
                for those who know me, you know I'm not the loudest person in the 
                room. But taking on this challenge helped me grow in ways I never 
                thought possible. 
                <br/><br/>
                Thank you UTSC!
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
                After graduating in the Spring of 2020, I was able to land an 
                internship with Amazon for the summer. I was thrilled to be a 
                part of the team that builds one of the largest warehouse 
                management systems in the world! 
              <br/><br/>
                I work at scale. Returning to Amazon full-time in early 2021, I 
                was grateful to be working alongside such a talented team of 
                developers and engineers. They have taught me so much and have 
                helped me grow into a better software engineer.
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
                If you've made it this far, thank you for reading this! 
                These days, I live in Toronto with my loving husband. We’re 
                avid walkers. It’s a great way to stay active and explore 
                the city. 
                <br/><br/>
                Lately, I've been picking up some hobbies like sewing and 
                drawing. I'm really into fashion and interior design, and 
                if you're interested, you can check out my Instagram where 
                I'm trying to post more often. I'm always up for a chat, so 
                feel free to reach out to me on other places on the internet 
                as well.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={'desktop'}></div>
    </>
  )
}

