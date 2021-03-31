import React, {useContext, useEffect, useState} from 'react'

const ScreenSizeContext = React.createContext()

export const screenSizeContext = () => {
    return useContext(ScreenSizeContext)
}

const ScreenSizeProvider = ({children}) => {
    const [innerWidth, setInnerWidth] = useState(null)

    useEffect(() => {
        setInnerWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [])

    const value = {
        innerWidth
    }

    return (
        <ScreenSizeContext.Provider value={value}>
            {children}
        </ScreenSizeContext.Provider>
    )
}

export default ScreenSizeProvider