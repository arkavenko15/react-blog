import React from 'react'
import logo from './logo.png'
import './logo.css'
import '../../../common/base.css'
const Logo =()=>
{
    return(
        <>
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt=""/>
                </div>
                <div className="logo-description"><span>Let's make history</span></div>
            </div>
        </>
    )
}
export default Logo