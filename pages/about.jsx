import MainLayout from '../layout/MainLayout'
import SmoothScroll from '../layout/SmoothScroll'
import Navigation from '../layout/Navigation'
import {useRouter} from 'next/router'

const About = () => {
    const router = useRouter()

    return (
        <>
            <MainLayout siteData={{name: 'About'}}>
                <SmoothScroll>
                    <section className="container">
                        <Navigation pathname={router.pathname}>

                        </Navigation>
                    </section>
                </SmoothScroll>
            </MainLayout>
            <style jsx>
                {`
                
                    .container {
                        position: relative;
                        height: 200vh;
                        width: 100%;
                        background-color: #2E3632;
                    }

                `}
            </style>
        </>
    )
}

export default About