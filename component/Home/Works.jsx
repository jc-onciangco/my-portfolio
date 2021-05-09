import Link from 'next/link'

const Works = ({myColors}) => {
    const works = [
        {
          id: 1,
          name: 'chatout',
          description: "A chat application with some features of FB's messenger app. A user should create an account to use this app.",
          imageUrl: '/chatout-desktop.png',
          slug: 'chatout',
          responsiveness: ['desktop', 'mobile']
        },
        {
          id: 2,
          name: 'wooz that pokemon',
          description: `A browser game inspired by Pokemon's mini-game segment "Who's that Pokemon" where the player guess the pokemon behind its silhouette form.`,
          imageUrl: '/wtp-home.png',
          slug: 'wooz that pokemon',
          responsiveness: ['desktop']
        }
    ]


    return (
        <>
            <section className="works">
                <div className="section-title-container">
                  <div className="section-title">
                    MY SELECTED WORKS
                    <div className="section-title-top">MY SELECTED WORKS</div>
                    <div className="section-title-bottom">MY SELECTED WORKS</div>
                    <div className="section-title-most-top">MY SELECTED WORKS</div>
                    <div className="section-title-most-bottom">MY SELECTED WORKS</div>
                  </div>
                </div>
                <div className="works-container">
                  {
                    works.map(work => {
                      return (
                        <div className="example-work" key={work.id}>
                          <div className="img-work-container">
                              <div className="view-details-container">
                                  <Link href={`/works/${work.slug.replace(' ','-')}`}>
                                      <a className="view-details">View details</a>
                                  </Link>
                              </div>
                            <div className="img-cover-design"></div>
                            <img src={work.imageUrl} alt={work.name}/>
                          </div> 
                          <div className="work-details">
                            <div className="work-details-inner">
                              <div className="work-count">{work.id}</div> 
                              <div className="work-title">
                                  {work.name}
                                <div className="right-line-design"></div>
                              </div>
                              <div className="work-line-design"></div>
                              <div className="work-description">{work.description}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
            </section>
            <style jsx>
                {`
                
                     @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                    .works {
                        position: relative;
                        height: 200vh;
                        width: 100%;
                        background-color: ${myColors.black};
                        overflow: hidden;
                    }


                    .section-title-container {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 10vw;
                    }

                    .section-title {
                        position: relative;
                        font-size: 5vw;
                        font-weight: 900;
                        color: ${myColors.white};
                    }

                    .section-title-top, 
                    .section-title-bottom,
                    .section-title-most-top,
                    .section-title-most-bottom {
                        position: absolute;
                        -webkit-text-fill-color: transparent;
                        -webkit-text-stroke-width: 2px;
                        -webkit-text-stroke-color: ${myColors.yellow};
                        left: 0;
                        height: 100%;
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                    }

                    .section-title-top {
                        top: 0;
                        transform: translate(0,-25%);
                        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
                    }

                    .section-title-bottom {
                        bottom: 0;
                        transform: translate(0,35%);
                        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
                    }

                    .section-title-most-top {
                        top: 0;
                        transform: translate(0,-44%);
                        clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
                    }

                    .section-title-most-bottom {
                        bottom: 0;
                        transform: translate(0,52%);
                        clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
                    }


                    .example-work {
                        padding: 6vw 10vw;
                        display: flex;
                        color: rgb(248, 248, 248);
                        transition: 0.2s linear;
                    }

                    .example-work:hover {
                        background-color: ${myColors.yellow};
                        color: ${myColors.black};
                    }

                    .img-work-container {
                        position: relative;
                        height: 18vw;
                        transition: 0.2s linear;
                    }

                    .view-details-container {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background-color: rgba(255,255,255,0);
                        backdrop-filter: blur(0px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .img-work-container:hover .view-details-container {
                        background-color: rgba(255,255,255,0.3);
                        backdrop-filter: blur(3px);
                    }

                    .view-details {
                        font-size: 2vw;
                        color: ${myColors.black};
                        font-weight: 700;
                        opacity: 0;
                        transition: 0.2s ease-in;
                    }

                    .img-work-container:hover .view-details {
                        opacity: 1;
                    }

                    .view-details:hover {
                        text-decoration: underline;
                    }

                    .img-cover-design {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background-color: ${myColors.yellow};
                        mix-blend-mode: hue;
                        transition: 0.2s linear;
                        pointer-events: none;
                    }

                    .example-work:hover  .img-cover-design{
                        opacity: 0;
                    }


                    .example-work:hover  .img-work-container{
                        transform: scale(1.1);
                        box-shadow: 0 4vw 5vw -3vw rgba(0,0,0,0.8);
                    }

                    .img-work-container img {
                        height: 100%;
                    }

                    .work-details {
                        flex: 1;
                        height: auto;
                        padding: 0 0 0 4.5vw;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                    }

                    .work-details-inner {
                        position: relative;
                        text-align: right;
                    }

                    .work-count {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 100%;
                        transform: translate(0, -100%);
                        font-weight: 900;
                        font-size: 1.5vw;
                    }

                    .work-title {
                        position: relative;
                        font-size: 3vw;
                        font-weight: 900;
                        text-transform: uppercase;
                        -webkit-text-fill-color: transparent;
                        -webkit-text-stroke-width: 1.5px;
                        -webkit-text-stroke-color: ${myColors.yellow};
                    }

                    .example-work:hover  .work-title{
                        -webkit-text-stroke-color: ${myColors.black};
                        -webkit-text-fill-color: ${myColors.black};
                    }

                    .right-line-design {
                        position: absolute;
                        bottom: 0;
                        right: -20px;
                        height: 150%;
                        width: 5px;
                        background-color:  ${myColors.yellow};
                        transition: 0.2s linear;
                    }

                    .example-work:hover  .right-line-design{
                        background-color:  ${myColors.black};
                    }

                    .work-description {
                        font-family: 'Roboto', sans-serif;
                        font-size: 1.4vw;
                        padding: 10px 0 0 0;
                    }

                `}
            </style>
        </>
    )
}

export default Works