import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const BlogDetail = () => {
    let {id} = useParams() ;
        let history = useHistory() ;
        const [detail , setDetail] = useState({}) ;
            useEffect(()=>{
                let url =`https://jsonplaceholder.typicode.com/posts/${id}` ;
                    fetch(url)
                        .then(res=>res.json())
                            .then(data=> setDetail(data))          
                
            },[]) 
            let seAllBlogs =() =>{
                history.push(`/blog`)
            }
    return (
        <div>
           
          <h1> Details of {id} </h1>
                <h3> {detail.title} </h3>
                    <p> {detail.body} </p> 
                        <button onClick={seAllBlogs} >See all blogs</button>
        </div>
    );
};

export default BlogDetail;