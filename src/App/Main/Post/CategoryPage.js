import React from 'react'
import posts from './posts'
import Post from './Post'
const CategoryPage = ({
    match,
}
)=>{

    return(
        <>
            <h2 className="page-title">{match.params.categoria}</h2>
<div className="row">

            {
                posts.filter(item=>{
                        return item.categoria===match.params.categoria
                    }).map((  {
                    id,
                    categoria,
                    title,
                    author,
                    date,
                    description,
                    image
                } )=>(

                    <div className="col-lg-12 col-xl-12 col-md-12 col-xs-12 col-sm-12"> 
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
export default CategoryPage