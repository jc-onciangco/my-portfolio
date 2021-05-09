const Hero = () => {
    const gridBoxes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const withInnerBox = [3,5,11,13,9,7]
    const transparentParentBox = [12,8,2,10,...withInnerBox]

    return (
        <>
            <section className="hero">
              <div className="circle"></div>
              <div className="grids">
                {
                  gridBoxes.map(g => {
                    return (
                      <div style={{backgroundColor: g===4? 'white' : (transparentParentBox.includes(g)? 'transparent' : '#ffd31d')}} className={`box box-${g}`} key={g}>
                        {
                          g===4 &&
                          <div className="text-skill">
                            <div className="text-skill-child">WEB</div>
                            <div className="text-skill-child">DEV</div>
                            <div className="text-skill-child">ELO</div>
                            <div className="text-skill-child">PER</div>
                          </div>
                        }
                        {
                          withInnerBox.includes(g) && <div className={`inner-box inner-box-${g}`}></div>
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className="title">
                <h1 className="firstname"><span>JUAN CARLO</span></h1>
                <h1 className="lastname"><span>ONCIANGCO</span></h1>
              </div>
            </section>
            <style jsx>
                {`
                
                    .hero {
                        position: relative;
                        height: 100vh;
                        width: 100%;
                        overflow: hidden;
                        background-color: rgb(14, 14, 14);
                    }

                    .hero::before {
                        background-image: url(https://www.photoshopsupply.com/wp-content/uploads/2020/01/grunge-overlay.jpg);
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        mix-blend-mode: soft-light;
                        opacity: 0.4;
                    }

                    .title {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        margin: 0 0 0 calc(3vw + 60px);
                    }

                    .title  h1 {
                        line-height: 0;
                        font-family: 'Archivo Black', sans-serif;
                        color: #ffd31d;
                        font-weight: 900;
                        mix-blend-mode: difference;
                    }

                    .title .firstname {
                        font-size: 6vw;
                        margin: 0 0 -2vw 0.5vw;
                    }

                    .title .lastname {
                        font-size: 12vw;
                        -webkit-text-fill-color: transparent;
                        -webkit-text-stroke-width: 1px;
                        -webkit-text-stroke-color: yellow;
                    }

                    .grids {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-40%, -50%) rotate(45deg);
                        display: grid;
                        grid-template-columns: repeat(5,1fr);
                        grid-template-rows: repeat(3,1fr);
                        grid-gap: 2px;
                        mix-blend-mode: difference;
                    }

                    .box {
                        position: relative;
                        height: 14vw;
                        width: 14vw;
                    }

                    .inner-box {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        bottom: 0;
                        left: 0;
                        background-color: #ffd31d;
                    }
                    .inner-box-11, .inner-box-13 {
                        top: 0;
                        right: 0;
                    }

                    .box:nth-child(2)::before {
                        content: '';
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        left: 0;
                        background-color: white;
                        transform: translate(0,-40%);
                    }

                    .box:nth-child(8) {
                        overflow: hidden;
                    }

                    .box:nth-child(8)::before {
                        content: '';
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        left: 0;
                        background-image: url(/me3.png);
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        transform: rotate(-45deg) scale(2) translate(10%,0);
                        filter: grayscale(100%);
                    }

                    .box:nth-child(8)::after {
                        content: '';
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        left: 0;
                        background-image: linear-gradient(45deg, rgba(0,0,0,0.8), transparent);
                    }

                    .box:nth-child(4) {
                        display: flex;
                        flex-wrap: wrap;
                        overflow: hidden;
                    }

                    .text-skill {
                        font-size: 3rem;
                        font-weight: 900;
                        line-height: 2.5rem;
                    }

                `}
            </style>
        </>
    )
}


export default Hero