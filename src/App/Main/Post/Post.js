import React, { Component } from 'react'
import PostContacts from './PostContacts/PostContacts'
import image from './post-img/image-1.jpg'
import './post.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
class Post extends Component
{
    render()
    {
        const
        {
            id,
            categoria,
            title,
            author,
            date,
            description
        } =this.props;
        return(
            <>
                <div className="post-item">
                    <div className="post-img">
                        <img src={image} alt=""/>
                        <div className="post-categoria">
                            <Link to="/categoria">{categoria}</Link>
                        </div>
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
            </>
        )
    }
}
Post.propTypes = {
    categoria:PropTypes.string.isRequired,
    title:PropTypes.string,
    author:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
}
export default Post