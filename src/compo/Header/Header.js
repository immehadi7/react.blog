import React, { useEffect, useState } from 'react';
import UserShow from '../UserShow/UserShow';
import './header.css'

const Header = () => {
        const [users , setUser] = useState([]) 
            useEffect( ()=>{
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(res=> res.json())
                .then(data=> setUser(data))
            } ,[]);

    return (
            <div> 
                <h1 style={{textAlign:'center'}}>I have total friends: {users.length}</h1>
                 <div className='friend-container'>
                 {
                  users.map(user  =>  <UserShow user={user} key={user.id}
                  ></UserShow>)}
                     </div> 
                   
            </div>
                
        
      
    );
};

export default Header;