import React from 'react';
import { Link } from 'react-router-dom';
import './postshow.css'

const PostShow = (props) => {
    let {title , body , id} = props.user ;

      let url = `/${id}`;
    return (
        <div  className='postshowStyle'>
            <h2> Tittle: {title} </h2>
            <h3> {body} </h3>
           <Link to={url}>Read More</Link>
            
        </div>
    );
};

export default PostShow;