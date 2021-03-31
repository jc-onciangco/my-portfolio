import styles from '../styles/Home.module.css'
import {gsap} from 'gsap'
import {useRef, useEffect, useState} from 'react'
import MainLayout from '../layout/MainLayout'
import {screenSizeContext} from '../context/ScreenSizeProvider'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../layout/Navigation'
import {useRouter} from 'next/router'

export default function Home() {

  const {innerWidth} = screenSizeContext()
  const router = useRouter()
  console.log(router)

  useEffect(() => {
    window.addEventListener('load', () => {
      gsap.from('.name', {
        y: 100,
        stagger: 0.35,
        opacity: 0,
        delay: 0.5
      })
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
          </div>
          <Navigation pathname={router.pathname}> 
            <div className="my-name">
              <h1 className="name firstname">JUAN</h1>
              <h1 className="name firstname">CARLO</h1>
              <h1 className="name lastname">ONCIANGCO</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima sed dolore excepturi iusto ad.</p>
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
          }

          .img-container {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: white;
            background-image: url('/giphy.webp');
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }

          .img-container > img {
            width: 100%;
            mix-blend-mode: multiply;
            transform: scale(1);
            transition: 0.3s linear;
          }

          .img-container:hover img{
            transform: scale(1.1);
            mix-blend-mode: unset;
          }

          .my-name {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translate(0, -50%);
          }

          .my-name > .name {
            line-height: 0;
            font-size: 8vw;
            font-family: DelaGothicOne;
          }

          .my-name > p {
            display: inline-block;
            font-size: 1.8vw;
            transform: translate(0, -4vw);
            font-weight: 600;
            font-family: bebas;
            color: #2E3632;
            width: 90%;
          }

        `}
      </style>
    </>
  )
}
