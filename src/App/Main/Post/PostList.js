import React, {Component} from 'react'
import Post from './Post'
import posts from './postArr'
class  PostList  extends Component
{

render(){

    return(
        <>

            <div className="row">
            {
                posts.map((  {
                    categoria,
                    title,
                    author,
                    date,
                    description,
                } )=>(

                    <div className="col-lg-12 col-xl-12 col-md-12 col-xs-12 col-sm-12"> 
                        <Post
                            categoria={categoria}
                            title={title}
                            author={author}
                            date={date}
                            description={description}
                        />
                    </div>
   
                ))
                

            }
            </div>
        </>
    )
}
   
}

export default PostList