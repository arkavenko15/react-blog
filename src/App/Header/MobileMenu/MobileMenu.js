import React from 'react'
import './mobile-menu.css'
const MobileMenu= ()=>
{
    function showMenu()
    {
        let mobileMenu = document.querySelector(".hidden-menu");
        let dropDownMenu  = document.querySelector(".drop-down-menu");
        mobileMenu.classList.toggle("active-menu");
        dropDownMenu.classList.toggle("visible-menu");

    }


    return(
        <>
            <ul className="drop-down-menu">
                    <li><a href="/">home</a></li>
                    <li><a href="/">posts</a></li>
                    <li><a href="/">features</a></li>
                    <li><a href="/">travel</a></li>
                    <li><a href="/">health</a></li>
                    <li><a href="/">music</a></li>
                    <li><a href="/">contact</a></li>
            </ul>
            <div className="hidden-menu" >
                <div className="mobile-menu "onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )

}
export default MobileMenu