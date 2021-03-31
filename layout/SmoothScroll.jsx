import {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

const SmoothScroll = ({children}) => {
    const scrollContainerRef = useRef()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const scroller = scrollContainerRef.current
  
        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, alwaysShowTracks: false })
    
        ScrollTrigger.scrollerProxy(".scroll-container", {
          scrollTop(value) {
            if (arguments.length) {
              bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
          }
        })
    
        bodyScrollBar.track.xAxis.element.remove();
    
        bodyScrollBar.addListener(ScrollTrigger.update)
    
        ScrollTrigger.defaults({ scroller: scroller })
      }, [])

    return (
        <>
            <div style={{height: '100vh'}} ref={scrollContainerRef} className="scroll-container">
                {children}
            </div>
        </>
    )
}

export default SmoothScroll