import React from 'react'
import twitter from'./post-contacts-img/twitter.png'
import facebook from'./post-contacts-img/facebook.png'
import linkedin from'./post-contacts-img/linkedin.png'
import share from'./post-contacts-img/share.png'
import './post-contacts.css'
const PostContacts = () =>
{
    return(
        <>
            <div className="author-contacts">
                <div className="contact facebook">
                    <a href="/"><img src={facebook} alt=""/></a>
                </div>
                <div className="contact twitter">
                    <a href="/"><img src={twitter} alt=""/></a>
                </div>
                <div className="contact linkedin">
                    <a href="/"><img src={linkedin} alt=""/></a>
                </div>
                <div className="share-btn">
                    <a href="/"><img src={share}  alt=""/></a>
                </div>
            </div>
        </>
    )
}
export default PostContacts