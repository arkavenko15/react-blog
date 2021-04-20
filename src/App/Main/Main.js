import React from 'react'
import Logo from './Logo/Logo'
import Slider from './Slider/Slider'
import Sidebar from './Sidebar/Sidebar'
import PostList from './Post/PostList'
import PostPage from './Post/PostPage'
import {Route} from 'react-router-dom'
import CategoryPage from './Post/CategoryPage'
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
                <div className="row">  
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 inside">
                        <Route path="/"exact component={PostList} />
                        <Route path="/posts/:id" exact component={PostPage} />
                        <Route path="/category/:categoria" exact component={CategoryPage}/>


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