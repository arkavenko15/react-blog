import React from 'react'
import PostContacts from './PostContacts/PostContacts'
import image from './post-img/image-1.jpg'
import './post.css'
const Post = () =>
{
    return(
        <>
            <div className="post-item">
                <div className="post-img">
                    <img src={image} alt=""/>
                    <div className="post-categoria">
                         DESIGN
                    </div>
                </div>
                <div className="post-title">
                    Exploring San Francisco’s Cuisine
                </div>
                <div className="post-info"><span>BY   </span><span className="author">JHONE DOE</span><span className="date">SEPTAMBER 11 2015.</span></div>
                <div className="title-underline">
                    <hr className="title-underline-1"></hr>
                    <hr className="title-underline-2"></hr>
                </div>
                <div className="post-description">
                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                    lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                    nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. 
                    Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra.
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