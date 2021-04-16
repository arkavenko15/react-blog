import React, {Component} from 'react'
import PostContacts from './PostContacts/PostContacts'
import image from './post-img/image-1.jpg'
import './post.css'
import {Link,Route} from "react-router-dom"
import posts from './postArr'
class Post extends Component
{
    render()
    {
        const
        {
            categoria,
            title,
            author,
            date,
            description,
        } =this.props;
        return(
            <>
                <Route path="react-blog/" exact>
                    <div className="post-item">
                        <div className="post-img">
                            <img src={image} alt=""/>
                            <Link to={categoria}>
                            <div className="post-categoria">{categoria}</div>
                            </Link>
                        </div>
                        <div className="post-title">
                            {title}
                        </div>
                        <div className="post-info"><span>BY   </span><span className="author">{author}</span><span className="date">{date}</span></div>
                        <div className="title-underline">
                            <hr className="title-underline-1"></hr>
                            <hr className="title-underline-2"></hr>
                        </div>
                        <div className="post-description">
                            {description}
                        </div>
                        <div className="post-nav">
                            <input type="button" value="CONTINUE READING" className="continue-btn"/>
                                <PostContacts/>
                        </div>
                    </div>
                </Route>    
                <Route path={"react-blog/"+categoria} exact>
                <h1 className="page-title">{categoria}</h1>
                {      
                
                    posts.filter(function (e) {
                        return e.categoria === categoria
                    }).map((  {
                        categoria,
                        title,
                        author,
                        date,
                        description,
                    } )=>(
                
                    <>

                        <div className="post-item">
                            <div className="post-img">
                                <img src={image} alt=""/>
                                <div className="post-categoria">{categoria}</div>
                            </div>
                            <div className="post-title">
                                {title}
                            </div>
                            <div className="post-info"><span>BY   </span><span className="author">{author}</span><span className="date">{date}</span></div>
                            <div className="title-underline">
                                <hr className="title-underline-1"></hr>
                                <hr className="title-underline-2"></hr>
                            </div>
                            <div className="post-description">
                                {description}
                            </div>
                            <div className="post-nav">
                                <input type="button" value="CONTINUE READING" className="continue-btn"/>
                                    <PostContacts/>
                            </div>
                        </div>


                    </>))}
                
                </Route>
            </>
        )
    }
}

export default Post