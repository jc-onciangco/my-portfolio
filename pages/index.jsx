//Dependencies
import {useRef, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {gsap} from 'gsap'
import Ticker from 'react-ticker'
//Layout && Component
import MainLayout from '../layout/MainLayout'
import Navigation from '../component/Navigation'
import SmoothScroll from '../layout/SmoothScroll'
import InnerSection from '../layout/InnerSection'
import Hero from '../component/Home/Hero'
import BriefAbout from '../component/Home/BriefAbout'
import Works from '../component/Home/Works'

//States
import {screenSizeContext} from '../context/ScreenSizeProvider'
import {animationContext} from '../context/AnimationProvider'
import {HeroAnimation, BriefAboutAnimation} from '../animation/homeAnimation'

export default function Home() {
  const router = useRouter()
  const {innerWidth} = screenSizeContext()
  const tickers = [
    {
      id: 0,
      dir: 'toRight'
    },
    {
      id: 1,
      dir: 'toLeft'
    },
    {
      id: 2,
      dir: 'toRight'
    },
    {
      id: 3,
      dir: 'toLeft'
    },
    {
      id: 4,
      dir: 'toRight'
    },
    {
      id: 5,
      dir: 'toLeft'
    },
    {
      id: 6,
      dir: 'toRight'
    }
  ]
  const myColors = {
    black: 'rgb(14, 14, 14)',
    white: 'rgb(248, 248, 248)',
    yellow: '#ffd31d'
  }
  
  useEffect(() => {
    HeroAnimation()
  }, [])

  return (
    <>
      <MainLayout siteData={{name: 'Home'}}>
        <Navigation />
        <SmoothScroll>
          <main className="container">
            <Hero />
            <BriefAbout />
            <Works myColors={myColors}/>
          </main>
        </SmoothScroll>
      </MainLayout>
      <style jsx>
        {`

            @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

            .container {
              background-color: #fafafa;
              height: 200vh;
              width: 100%;
            }

        `}
      </style>
    </>
  )
}
