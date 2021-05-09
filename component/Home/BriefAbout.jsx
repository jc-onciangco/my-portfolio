import Image from 'next/image'

const BriefAbout = () => {
    return (
        <>
            <section className="brief-about">
              {/* <div className="ticker-container">
                {
                  tickers.map(ticker => {
                    return (
                      <div key={ticker.id}>
                        <Ticker direction={ticker.dir} speed={1}>
                            {({ index }) => (
                                <>
                                    <div className="bit">
                                      010010100101010101000001010011100100001101000001010100100100110001001111010011110100111001000011010010010100000101001110010001110100001101001111
                                    </div>
                                </>
                            )}
                        </Ticker>
                      </div>
                    )
                  })
                }
              </div> */}
              <div className="content-container">
                <div className="img-container">
                  <Image src="/me2.jpg" height="300" width="300"/>
                </div>
              </div>
              <div className="about-text">
                <div className="first-text about-text-content">A self-taught</div>
                <div className="second-text about-text-content">web developer</div>
                <div className="third-text about-text-content">specializing in</div>
                <div className="fourth-text about-text-content">frontend development</div>
                <div className="fifth-text about-text-content"> <span>and</span> creative design</div>
              </div>
              <svg style={{position: 'absolute'}}>
                <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                  <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
                  <feDisplacementMap scale="5" in="SourceGraphic"></feDisplacementMap>
                </filter>
                <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
              </svg>
            </section>
            <style jsx>
                {`

                    .ticker-container {
                        position: fixed;
                        width: 100%;
                        height: 100vh;
                        padding: 1vw 0 0 0;
                    }

                        .bit {
                        font-size: 6vw;
                        font-weight: 900;
                        color: rgba(0,0,0,0.025);
                        margin: -1vw 0;
                    }

                    {/* .bit:hover {
                        color: red;
                    } */}
                
                    .brief-about {
                        position: relative;
                        height: 100vh;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: rgb(14, 14, 14);
                        overflow: hidden;
                    }

                    .brief-about::before {
                        background-image: url(https://www.photoshopsupply.com/wp-content/uploads/2020/01/grunge-overlay.jpg);
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        mix-blend-mode: color-burn;
                        opacity: 0.1;
                    }

                    .content-container {
                        position: relative;
                    }

                    .img-container {
                        filter: grayscale(100%);
                    }

                    .about-text {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) rotate(-5deg);
                        color: rgb(248, 248, 248);
                        text-align: center;
                        mix-blend-mode: difference;
                        font-weight: 900;
                        text-transform: uppercase;
                        font-size: 3rem;
                        filter: url("#turbulence");
                    }

                    .first-text {
                        font-size: ${0.6*1.2}em;
                    }
                    .second-text {
                        font-size: ${0.9*1.2}em;
                    }
                    .third-text {
                        font-size: ${0.5*1.2}em;
                    }
                    .fourth-text {
                        font-size: ${0.9*1.2}em;
                    }
                    .fifth-text {
                        font-size: ${0.9*1.2}em;
                    }
                    .fifth-text > span {
                        font-size: ${0.5*1.2}em;
                    }
                
                `}
            </style>
        </>
    )
}

export default BriefAbout