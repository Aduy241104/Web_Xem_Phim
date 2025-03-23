import React from 'react'
import '../StyleHeader.css'
import IntroComponent from './IntroComponent'


function Banner() {
    return (
        <div style={ { marginTop: '48px' } }>
            <div className='layout-header'>
                <div className='intro-content-header'>
                    <IntroComponent />
                </div>
            </div>
        </div>
    )
}

export default Banner