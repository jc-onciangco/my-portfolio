import Link from 'next/link'

const Navigation = ({children, pathname}) => {
    var gridBox = []
    const whatPathname = pathname==='/work' || pathname==='/about'
    const currentRouteStyle = {
        color: '#FFFB05',
        backgroundColor: '#2E3632'
    }
    const countData = {
        gridLimit: whatPathname? 50 : 25,
        rows: whatPathname? '10' : '5'
    }

    for(var i = 0; i < countData.gridLimit; i++) {
      gridBox = [...gridBox, i]
    }

    const cursorGrow = () => {
      const cursor = document.querySelector('.cursor-style')
      cursor.style.transform = 'translate(-50%, -50%) scale(1.3)'
    }

    const cursorShrink = () => {
      const cursor = document.querySelector('.cursor-style')
      cursor.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    return (
        <>
        <div className="right-design">
            <div className="grid-design-container">
              {
                gridBox.map(box => {
                  return (
                    <div className={`box box-${box}`} key={box}>
                      {
                        box===3 &&
                        (
                          <Link href="/">
                            <a onMouseOver={cursorGrow} onMouseLeave={cursorShrink}  className="nav-link work-link"
                                style={pathname==='/'? currentRouteStyle : {}}>HOME</a>
                          </Link>
                        )
                      }
                      {
                        box===4 &&
                        (
                          <Link href="/work">
                            <a onMouseOver={cursorGrow} onMouseLeave={cursorShrink}  className="nav-link work-link"
                                style={pathname==='/work'? currentRouteStyle : {}}>WORK</a>
                          </Link>
                        )
                      }
                      {
                        box===9 &&
                        (
                          <Link href="/about">
                            <a onMouseOver={cursorGrow} onMouseLeave={cursorShrink}  className="nav-link about-link"
                                style={pathname==='/about'? currentRouteStyle : {}}>ABOUT</a>
                          </Link>
                        )
                      }
                    </div>
                  )
                })
              }
            </div>
            {children}
          </div>
          <style jsx>
              {`
              
                .right-design {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: ${whatPathname? '90%' : '70%'};
                    height: 100%;
                    background-color: #FFFB05;
                }

                .grid-design-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    grid-template-rows: repeat(${countData.rows}, 1fr);
                    grid-gap: 1px;
                    background-color: #2E3632;
                }

                .box {
                    position: relative;
                    background-color: #FFFB05;
                }

                .nav-link {
                    display: inline-block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: DelaGothicOne;
                    font-size: 2rem;
                    transition: 0.4s linear;
                    z-index: 15;
                    font-size: 2.5vw;
                }

                .work-link:hover,
                .about-link:hover {
                    color: #FFFB05;
                    background-color: #2E3632;
                }

              `}
          </style>
        </>
    )
}

export default Navigation