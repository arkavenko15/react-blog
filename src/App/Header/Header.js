import React from 'react'
import Search from './Search/Search'
import Menu from './Menu/Menu'
import Contacts from './Contacts/Contacts'
import MobileMenu from './MobileMenu/MobileMenu'
import './header.css'
const Header = ()=>
{

    return(
        <>
            <header>
                    <div className="container menu">
                        <div className="row header-row">
                            <div className="col-md-2 col-sm-4 col-xs-4 col-lg-4 hidden-menu">
                                <MobileMenu/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4 search-block">
                                    <Search/>
                            </div>
                            <div className="col-xl-6 col-lg-6 header-menu head-menu">
                                <Menu/>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-xs-4 head-menu contacts-block">
                                <Contacts/>
                            </div>
                        </div>
                    </div>
                </header>
        </>
    )


}
export default Header