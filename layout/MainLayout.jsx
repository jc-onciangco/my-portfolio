import Link from 'next/link'
import Head from 'next/head'
import {useEffect, useRef, useState} from 'react'
import {screenSizeContext} from '../context/ScreenSizeProvider'
import {animationContext} from '../context/AnimationProvider'
import {AnimatePresence, motion} from 'framer-motion'
import {gsap} from 'gsap' 
import MessengerCustomerChat from 'react-messenger-customer-chat'

const MainLayout = ({children, siteData}) => {

    const cursorRef = useRef()
    const cursorDotRef = useRef()
    const {isLoading, loadingFinished} = animationContext()

    useEffect(() => {
        window.addEventListener('mousemove',e => {
            const cursor = document.querySelector('.cursor-style')
            const cursorDot = document.querySelector('.cursor-style-dot')
            const x = e.pageX
            const y = e.pageY

            cursor.style.top = y + 'px'
            cursor.style.left = x + 'px'
            cursorDot.style.top = y + 'px'
            cursorDot.style.left = x + 'px'
        })

        gsap.from('.loading > h1', {
            y: '-100%',
            opacity: 0,
        })

        window.addEventListener('load', () => {
            const tl = gsap.timeline()
            console.log('hahaha')
            tl.to('.loading > h1', {
                y: '100%',
                opacity: 0,
            }).to('.loading', {
                y: '100%',
                duration: 0.5
            }).add(() => {
                loadingFinished()
            })
        })
    }, [])

    useEffect(() => {
        gsap.from('.loading > h1', {
            y: '-100%',
            opacity: 0,
        })
    }, [isLoading])

    return (
        <>
            <div className="main-container">
                <Head>
                    <title>{siteData.name}</title>
                    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <MessengerCustomerChat pageId="113254777524229" appId="1253077365086541"/>
                {children}
                <div className="noisy-style"></div>
                <div ref={cursorRef} className="cursor-style"></div>
                <div ref={cursorDotRef} className="cursor-style-dot"></div>
                <AnimatePresence>
                    {
                        isLoading &&
                            <motion.div
                                    initial={{scale: 1}}
                                    end={{scale: 0}}
                                >
                                <div className="loading">
                                    <h1>{'<LOADING.../>'}</h1>
                                </div>
                            </motion.div>
                    }
                </AnimatePresence>
            </div>
            <style jsx>
                {`  
                    .loading {
                        position: fixed;
                        top: 0;
                        left: 0;
                        background-color: #FFFB05;
                        height: 100vh;
                        width: 100%;
                        z-index: 80;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .loading > h1 {
                        font-size: 3rem;
                        font-family: DelaGothicOne;
                    }

                    .noisy-style {
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background-image: url('/noisy.gif');
                        z-index: 100;
                        pointer-events: none;
                        mix-blend-mode: multiply;
                        opacity: 0.15;
                    }

                    .cursor-style {
                        position: fixed;
                        left: 0;
                        top: 0;
                        transform: translate(-50%, -50%) scale(1);
                        height: 50px;
                        width: 50px;
                        background-color: #FFFB05;
                        z-index: 50;
                        pointer-events: none;
                        border-radius: 50%;
                        mix-blend-mode: difference;
                        transition: 0.1s linear;
                    }

                    .cursor-style::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        height: 105%;
                        width: 105%;
                        border-radius: 50%;
                        background-color: transparent;
                        border: 1px solid white;
                    }

                    .cursor-style-dot {
                        position: fixed;
                        left: 0;
                        top: 0;
                        transform: translate(-50%, -50%);
                        height: 6px;
                        width: 6px;
                        background-color: #FFFFFF;
                        z-index: 55;
                        pointer-events: none;
                        border-radius: 50%;
                    }

                `}
            </style>
        </>
    )
}

export default MainLayout