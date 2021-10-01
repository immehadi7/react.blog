import {React , useEffect, useState}from 'react';
import NewShow from '../NewsShow/NewShow';
import PostShow from './PostShow/PostShow';
import './firstCompo.css'

const FirstCompo = () => {
    const [userPost, setUserPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUserPost(data))
    },[]);


    return (
        <div className=''>
            <h1>Total Post: {userPost.length} </h1>

                <div className="postStyle"> 
                    {
                        userPost.map(user =>  <PostShow user={user} key={user.id}  > </PostShow>  )
                    }
                </div>
                
            

        </div>
    );
};

export default FirstCompo;