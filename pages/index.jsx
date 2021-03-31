import styles from '../styles/Home.module.css'
import {gsap} from 'gsap'
import {useRef, useEffect, useState} from 'react'
import MainLayout from '../layout/MainLayout'
import {screenSizeContext} from '../context/ScreenSizeProvider'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../layout/Navigation'
import {useRouter} from 'next/router'
import {animationContext} from '../context/AnimationProvider'

export default function Home() {

  const {innerWidth} = screenSizeContext()
  const {loadingFinished, setLoading, allowNonInitial, allowNonInitialAnimation} = animationContext()
  const router = useRouter()
  console.log(router)

  const animateHome = () => {
    const tl = gsap.timeline()
    tl.from('.right-design',{
      x: '100%',
      delay: 0.5
    }).from('.name', {
      y: 100,
      stagger: 0.35,
      opacity: 0
    }).from('.small-details', {
      scale: 0,
      ease: 'back.out(1.7)',
      rotate: 180
    })
    
    gsap.from('.nav-link', {
      y: '100%',
      delay: 1.2,
      duration: 0.1
    })
    
    gsap.from('.left-design', {
      scale: 0,
      ease: 'back.out(1.5)',
      duration: 1.5,
      delay: 1
    })
  }

  useEffect(() => {  

    if (allowNonInitialAnimation) {
      setLoading()
      setTimeout(() => {
        const tl = gsap.timeline()
        tl.to('.loading > h1', {
          y: '100%',
          opacity: 0,
        }).add(() => {
          animateHome()
        }).to('.loading', {
            y: '100%',
            duration: 0.5
        }).add(() => {
            loadingFinished()
        })
      }, 1500)
    }

    window.addEventListener('load', () => {
      animateHome()
      allowNonInitial()
    })
    
  }, [])

  return (
    <>
      <MainLayout siteData={{name: 'Home'}}>
        <section className="container">
          <div className="left-design">
            <div className="img-container">
              <img src="/me.jpg" />
            </div>
            <div className="gradient"></div>
          </div>
          <Navigation pathname={router.pathname}> 
            <div className="my-name">
              <h1 className="name firstname juan">JUAN</h1>
              <h1 className="name firstname carlo">CARLO</h1>
              <h1 className="name lastname onciangco">ONCIANGCO</h1>
              <p className="small-details">
                <div className="border-style"><div className="inner-border-style"></div></div>
                  A self-taught web developer specializing in front-end development and creative design.
              </p>
            </div>
          </Navigation>
        </section>
      </MainLayout>
      <style jsx>
        {`
        
          .container {
            position: relative;
            height: 100vh;
            width: 100%;
            background-color: #2E3632;
            overflow: hidden;
          }

          .left-design {
            position: absolute;
            top: 0;
            left: 0;
            width: 30%;
            height: 100%;
            background-color: #2E3632;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            z-index: 0;
          }

          .gradient {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-image: radial-gradient(rgba(0,0,0,0.1), rgba(0,0,0,1));
            z-index: 4;
            pointer-events: none;
            opacity: 1;
          }

          .img-container {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: #fffb05;
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }

          .img-container > img {
            width: 100%;
            height: 100%;
            mix-blend-mode: multiply;
            transform: scale(1);
            transition: 0.3s linear;
            object-fit: cover;
            filter: grayscale(100%) contrast(1) blur(0);
          }

          .img-container::before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            height: 100;
            width: 100%;
            z-index: 1;
            mix-blend-mode: lighten;
            background-color: #2e3632;
          }

          .img-container:hover ~ .gradient {
            opacity: 1;
          }

          .img-container:hover img{
            transform: scale(1.1);
            mix-blend-mode: unset;
            filter: unset;
          }

          .my-name {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translate(0, -50%);
          }

          .my-name > .name {
            position: relative;
            line-height: 0;
            font-size: 8vw;
            font-family: DelaGothicOne;
            z-index: 1;
          }

          .my-name > p {
            position: relative;
            display: inline-block;
            font-size: 1.8vw;
            transform: translate(-20px, -4vw) rotateZ(-5deg);
            font-weight: 400;
            font-family: bebas;
            background-color: #2E3632;
            color: white;
            width: 50%;
            padding: 14px 16px;
            box-shadow: -3px 3px 10px rgba(0,0,0,0.5);
            z-index: 10;
          }

          .border-style {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 5px;
          }

          .border-style > div {
            height: 100%;
            width: 100%;
            background-color: transparent;
            border: 1px dashed white;
          }



        `}
      </style>
    </>
  )
}
