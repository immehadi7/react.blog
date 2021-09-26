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
             <div className=''>
                    <div className='row '>
                            <div className="col-md-9">
                                <div  className="row g-4 ms-5">
                                {
                            users.map( user=>  <People  user={user} ></People> )
                                    } 
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <h3>Money</h3>
                           </div>
                    
                   </div>
                     
            </div>



            </div>
            
        
    );
};

export default UserShow;