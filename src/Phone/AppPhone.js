import React from 'react'
import {useMediaQuery} from "react-responsive";

// components
import Header from "./phone-components/Header";
import NewGames from "./phone-components/NewGames";

export default function() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 768px)'
    })

    return (
        <>
            <div>{isTabletOrMobileDevice
                ? <div className={'phone-app'}>
                    <div>{ <Header/> }</div>
                    <div> <NewGames /> </div>
                </div>
                : 'nothing devices'}</div>
        </>
    )
}