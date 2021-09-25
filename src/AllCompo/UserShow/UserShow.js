import React , { useState , useEffect } from 'react';
import People from '../People/People';
import './usershow.css'

const UserShow = () => {
    const [users , setUser] = useState([])
    useEffect( ()=>{
        fetch('https://immehadi7.github.io/jsonapi/donerList.json')
        .then(res => res.json() )
        .then(data => setUser(data))
    } ,[])
    return (
        <div > 
             <div className='user-part'>
                    <div className='donar-part'>
                    {
                     users.map( user=>  <People  user={user} ></People> )
                     }
                   </div>
                     <div className='donar-money'>
                         <h3>Money</h3>
                     </div>
            </div>

            {/* 
             */}


            </div>
            
        
    );
};

export default UserShow;