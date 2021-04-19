import React from 'react'
import posts,{getPostObject} from "./posts"
import PostContacts from "../Post/PostContacts/PostContacts"
const PostPage = ({
    match,
    postItem = getPostObject(posts)
})=>{

    const id = match.params.id;
    return(
    <>
        <div className="post-item">
                        <div className="post-img">
                            <img src={postItem[id].image} alt=""/>
                            <div className="post-categoria">{postItem[id].categoria}</div>
                            
                        </div>

                        <div className="post-title">{postItem[id].title}</div>
                        <div className="post-info"><span>BY   </span><span className="author">{postItem[id].author}</span><span className="date">{postItem[id].date}</span></div>
                        <div className="title-underline">
                            <hr className="title-underline-1"></hr>
                            <hr className="title-underline-2"></hr>
                        </div>
                        <div className="post-full-description">
                        {postItem[id].fullDescription}
                        </div>
                        <div className="post-nav">
                                <PostContacts/>
                        </div>
                    </div>
    </>
    )
}
export default PostPage