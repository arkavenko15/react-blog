import React, {Component} from 'react'
import Post from './Post'
import posts from './posts'
class  PostList  extends Component
{

render(){

    return(
        <>

            <div className="row">
            {
                posts.map((  {
                    id,
                    image,
                    categoria,
                    title,
                    author,
                    date,
                    description,

                } )=>(

                    <div className="col-lg-12 col-xl-12 col-md-12 col-xs-12 col-sm-12" key={id}> 
                        <Post
                            id={id}
                            categoria={categoria}
                            title={title}
                            author={author}
                            date={date}
                            description={description}
                            image={image}
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