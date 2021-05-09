import MainLayout from '../layout/MainLayout'
import {screenSizeContext} from '../context/ScreenSizeProvider'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {useRouter} from 'next/router'
import Navigation from '../layout/Navigation'
import SmoothScroll from '../layout/SmoothScroll'
import {useEffect, useRef, useState} from 'react'
import {animationContext} from '../context/AnimationProvider'
import {gsap} from 'gsap'


const Work = () => {
    const router = useRouter()
    const {loadingFinished, setLoading} = animationContext()

    useEffect(() => {
      setLoading()
      setTimeout(() => {
        const tl = gsap.timeline()
        tl.to('.loading > h1', {
          y: '100%',
          opacity: 0,
        }).to('.loading', {
            y: '100%',
            duration: 0.5
        }).add(() => {
            loadingFinished()
        })
      }, 1500)
    }, [])

    return (
        <>
            <MainLayout siteData={{name: 'Home'}}>
              <SmoothScroll>
                <section className="container">
                  <Navigation pathname={router.pathname}>
        
                  </Navigation>
                </section>
              </SmoothScroll>
            </MainLayout>
            <style jsx>
        {`
          .container {
            position: relative;
            height: 100vh;
            width: 100%;
            background-color: #2E3632;
          }

          .cursor-style {
            position: absolute;
            top: 0;
            left: 0;
            height: 50px;
            width: 50px;
            background-color: red;
            z-index: 50;
            pointer-events: none;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .work-details {
            position: absolute;
            top: 10%;
            left: 0;
            transform: translate(0, 0);
            width: 100%;
            padding: 0 0 0 12vw;
            display: flex;
            flex-direction: column;
          }

          .work-details > h1 {
            font-size: 3vw;
            font-family: DelaGothicOne;
            margin: 0 0 90px 0;
          }

          .work {
            position: relative;
            height: 300px;
            width: 50vw;
            background-color: white; 
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            margin: 0 0 80px 0;
          }

          .work > .work-title {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(0, -160%);
            font-size: 3vw;
            font-family: DelaGothicOne;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
            -webkit-text-fill-color: transparent;
            white-space: nowrap;
          }
          .work > .work-title > span {
            -webkit-text-fill-color: black;
            letter-spacing: 2px;
          }

        `}
      </style>
        </>
    )
}

export default Work