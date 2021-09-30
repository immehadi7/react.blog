import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const UserDetail = () => {
    let {id} = useParams() ;
        let [friend, setFriend] = useState({})
            let history = useHistory()

        useEffect(()=>{
            let url = `https://jsonplaceholder.typicode.com/users/${id}` ;
            fetch(url)
            .then(res=> res.json())
            .then(data => setFriend(data))
        } ,[])
        let seeAllFriends = () => {
            history.push(`/header`);

        }
       
    return (
        <div style={{textAlign:'center'}}>
            <h1>Details of friend {friend.id}  </h1>
            <h2>Name: {friend.name} </h2>
            <h4>email: {friend.email}</h4>
            <h5>Phone: {friend.phone} </h5>
            <h6>website: {friend.website}</h6>
            <h5>Works at : {friend.company?.name} </h5>
            <button onClick={seeAllFriends} >See all friends </button>
        </div>
    );
};

export default UserDetail;