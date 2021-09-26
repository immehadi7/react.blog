import React , { useState , useEffect } from 'react';
import Cart from '../Cart/Cart';
import People from '../People/People';
import './usershow.css'

const UserShow = () => {
    const [users , setUser] = useState([])
    const [cart, setCart] = useState([]);
    useEffect( ()=>{
        fetch('https://immehadi7.github.io/jsonapi/againJsonUpdateApi.json')
        .then(res => res.json() )
        .then(data => setUser(data))
    } ,[])
    const handleAddToCart = (user) => {
        console.log(user.salary)
        const newCart = [...cart, user];
        setCart(newCart);
       
    }
    return (
        <div > 
             <div className=''>
                    <div className='row '>
                            <div className="col-md-9">
                                <div  className="row g-4 ms-5">
                                {
                            users.map( user=>  <People  
                                key={user.key} 
                                handleAddToCart={handleAddToCart}
                                user={user} 
                            ></People> )
                                    }

                                </div>
                                
                            </div>
                            <div className='col-md-3'>
                                <Cart cart={cart}></Cart>
                           </div>
                    
                   </div>
                     
            </div>



            </div>
            
        
    );
};

export default UserShow;