import {gsap} from 'gsap'

export const HeroAnimation = () => {
    const scrollTriggerData = {
      trigger: '.hero',
      start: 'center center',
      scrub: 1
    }

    gsap.to('.title h1', {
        scrollTrigger: scrollTriggerData,
        y: 100,
        opacity: 0,
      })
  
      gsap.to('.inner-box-3', {
        scrollTrigger: scrollTriggerData,
        y: -100
      })
  
      gsap.to('.inner-box-5', {
        scrollTrigger: scrollTriggerData,
        y: 100
      })
  
      gsap.to('.inner-box-7', {
        scrollTrigger: scrollTriggerData,
        height: '0%'
      })
  
      gsap.to('.inner-box-9', {
        scrollTrigger: scrollTriggerData,
        x: -100
      })
  
      gsap.to('.inner-box-11', {
        scrollTrigger: scrollTriggerData,
        height: '0%'
      })
  
      gsap.to('.inner-box-13', {
        scrollTrigger: scrollTriggerData,
        x: -100
      })

      gsap.to('.box-8', {
        scrollTrigger: scrollTriggerData,
        opacity: 0
      })
  
      gsap.to('.text-skill-child', {
        scrollTrigger: scrollTriggerData,
        x: -100,
        stagger: 0.05
      })
  
      // gsap.to('.grids', {
      //   scrollTrigger: scrollTriggerData,
      //   rotate: 10,
      //   scale: 1.3,
      //   x: '-50%'
      // })

      const scrollTriggerDataAbout = {
        trigger: '.brief-about',
        start: 'top 80%',
        end: 'center center',
        scrub: 1,
        marks: true
      }

      gsap.set('.about-text-content', {x: -100})
      gsap.set('.img-container', {scale: 0, rotate: 180})
      gsap.set('.brief-about', {backgroundColor: 'rgb(14, 14, 14)'})

      gsap.to('.img-container', {
        scrollTrigger: scrollTriggerDataAbout,
        scale: 1,
        rotate: 0,
        ease: 'back.out(0.5)'
      })

      gsap.to('.about-text-content', {
        scrollTrigger: scrollTriggerDataAbout,
        x: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      })

      gsap.to('.brief-about', {
        scrollTrigger: scrollTriggerDataAbout,
        backgroundColor: 'rgb(248, 248, 248)'
      })


      const scrollTriggerWorks = {
        trigger: '.works',
        start: 'top 80%',
        end: 'center center',
        scrub: 1,
        marks: true
      }

      gsap.to('.content-container', {
        scrollTrigger: {
          trigger: '.works',
          start: 'top 80%',
          end: 'center center',
          scrub: 1
        },
        y: 100
      })

      gsap.to('.about-text', {
        scrollTrigger: {
          trigger: '.works',
          start: 'top 90%',
          scrub: 1
        },
        scale: 5,
        opacity: 0
      })

      gsap.set('.section-title', {
        y: 100
      })
      gsap.set('.section-title-top', {
        y: 0
      })
      gsap.set('.section-title-bottom', {
        y: 0
      })
      gsap.set('.section-title-most-top', {
        y: 0
      })
      gsap.set('.section-title-most-bottom', {
        y: 0
      })


      gsap.to('.section-title', {
        scrollTrigger: {
          trigger: '.works',
          start: 'top 60%',
          end: 'top 50%',
          scrub: 1,
          marks: true
        },
        y: 0
      })

      const worksTitleScrollTrigger =  {
        trigger: '.works',
        start: 'top 50%',
        end: 'top 40%',
        scrub: 1,
        marks: true
      }

      const topSide = gsap.timeline({    
        scrollTrigger: worksTitleScrollTrigger
      })
      const bottomSide = gsap.timeline({
        scrollTrigger: worksTitleScrollTrigger
      })

      topSide.to('.section-title-top', {
        y: -25
      }).to('.section-title-most-top', {
        y: -44,
        ease: 'back.out(2)'
      })
      bottomSide.to('.section-title-bottom', {
        y: 35
      }).to('.section-title-most-bottom', {
        y: 52,
        ease: 'back.out(2)'
      })

}



