import React from 'react'
import PostContacts from './PostContacts/PostContacts'
import './post.css'
import {Link} from "react-router-dom"



const Post =(
    { 
        id,
        categoria,
        title,
        author,
        date,
        description,
        image,
    }
)=>
{
    console.log(image)
        return(
            <>
                    <div className="post-item">
                        <div className="post-img">
                            <img src={image} alt=""/>
                        </div>
                        <Link to={`/category/${categoria}` }>
                            <div className="post-categoria">{categoria}</div>                             
                        </Link>
                        <Link to={`/posts/${id}`}>
                            <div className="post-title">
                                {title}
                            </div>
                        </Link>
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
            </>
        )
  
}

export default Post