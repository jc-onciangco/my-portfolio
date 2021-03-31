import React, {useContext, useEffect, useState} from 'react'
import {gsap} from 'gsap'

const AnimationContext = React.createContext()

export const animationContext = () => {
    return useContext(AnimationContext)
}

const AnimationProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(() => true)

    useEffect(() => {

    }, [])

    const loadingFinished = () => {
        setIsLoading(false)
    }

    const setLoading = () => {
        setIsLoading(true)
    }

    const value = {
        isLoading,
        loadingFinished,
        setLoading
    }

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    )
}

export default AnimationProvider