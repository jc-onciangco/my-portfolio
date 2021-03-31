import '../styles/globals.css'
import ScreenSizeProvider from '../context/ScreenSizeProvider'
import AnimationProvider from '../context/AnimationProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AnimationProvider>
      <ScreenSizeProvider>
        <Component {...pageProps} />
      </ScreenSizeProvider>
    </AnimationProvider>
  ) 
}

export default MyApp
