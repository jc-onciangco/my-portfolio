import Link from 'next/link'

const Navigation = () => {

    const links = [
      {
        id: 0,
        name: 'home',
        url: '/'
      },
      {
        id: 1,
        name: 'works',
        url: '/works'
      },
      {
        id: 2,
        name: 'about',
        url: '/about'
      }
    ]

    return (
        <>
        <div className="right-design">
          <div className="fixed-container">
          <div className="msg">
            <div>!!!NOT DONE YET!!!</div>
            <div style={{fontSize: '1.5rem'}}>- I am currently developing my portfolio. Thank you.-</div>
          </div>
            <div className="fixed-box">
              <nav>
                <div className="title">JC</div>
                <div className="nav-links">
                  {
                    links.map(link => {
                      return (
                        <Link href={link.url} key={link.id}>
                          <a className="link">{link.name}</a>
                        </Link>
                      )
                    })
                  }
                </div>
              </nav>
            </div>
          </div>
        </div>
          <style jsx>
              {`
              
                .fixed-container {
                  position: fixed;
                  height: 100vh;
                  width: 100%;
                  padding: 1vw;
                  z-index: 20;
                  mix-blend-mode: exclusion;
                  pointer-events: none;
                }

                .msg {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  font-size: 4rem;
                  font-weight: 700;
                  color: white;
                }

                .fixed-box {
                  height: 100%;
                  width: 100%;
                  border: 2px solid rgb(248, 248, 248);
                }

                nav {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  padding: 0.8vw;
                }

                .title {
                  display: flex;
                  align-items: center;
                  background-color: rgb(248, 248, 248);
                  width: 60px;
                  height: 60px;
                  color: rgb(20, 20, 20);
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-end;
                  padding: 5px 10px;
                  font-weight: 700;
                  font-size: 1.3rem;
                }

                .nav-links {
                  display: flex;
                  flex-direction: column;
                }

                .link {
                  background-color: transparent;
                  transition: 0.2s linear;
                  font-family: DelaGothicOne;
                  text-transform: uppercase;
                  font-size: 0.95rem;
                  text-align: right;
                  margin: 0 0 4px 0;
                  color: rgb(248, 248, 248);
                  pointer-events: all;
                }

                .link:hover {
                  color: yellow;
                }


              `}
          </style>
        </>
    )
}

export default Navigation