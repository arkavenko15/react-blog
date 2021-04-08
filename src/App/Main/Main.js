import React from 'react'
import Logo from './Logo/Logo'
import Slider from './Slider/Slider'
import Sidebar from './Sidebar/Sidebar'
import Post from './Post/Post'
const Main=()=>
{
    return(
        <>
            <div className="container logo-block">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Logo/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 slider">
                        <Slider/>
                    </div>
                </div>
            </div>
            <div className="container ">
            <div className="row ">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 posts">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="main-title">
                            RECENT POST
                            <div className="title-underline">
                                <hr className="title-underline-1"></hr>
                                <hr className="title-underline-2"></hr>
                            </div>
                        </div>
                                <Post/>
                        </div>
                    </div>

                <div className="row two-post">
                <div className="col-xl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <Post/>
                </div>                   
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Post/>
                </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 inside">
                            <Post/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 inside">
                        <Post/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 inside">
                        <Post/>
                    </div>
                </div>
                <div className="row">  
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 inside">
                        <Post/>
                    </div>
                </div>  
                </div>
                
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 sidebar">
                        <Sidebar/>
                </div>
                </div>
            </div>    


        </>
    )
}
export default Main