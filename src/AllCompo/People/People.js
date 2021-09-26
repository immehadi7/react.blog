import React from 'react';
import './people.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import {  faFacebook , faTwitter } from '@fortawesome/free-brands-svg-icons';

const People = (props) => {
    console.log(props.user)
    const {name , age ,img ,profession, salary , country} = props.user ;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitIcon = <FontAwesomeIcon icon={faTwitter} />
    return (
        
                 <div className='col-md-4 peopleShow'>
            <div className="card" style={{width: '18rem'}}>
         <img className="card-img-top" src={img} alt="Card image cap"/>
         <div className="card-body">
       <h2 className="card-title"> Name:{name} </h2>
          <h2 className="card-title">Profession: {profession} </h2>
              <h2 className="card-title"> Country: {country} </h2>
                   <h6 className="card-text">Age:{age}</h6>
                   <h4 className='card-title' > Donation Amount : $ {salary} </h4>
                   <div className='icon-style'>
                       <a href="#" > {fbIcon} </a>
                       { <a href="#" > {twitIcon} </a>}

                   </div>
               

    <button  onClick={() => props.handleAddToCart(props.user)}
     class="btn btn-primary" > {element} Add to Cart</button>
  </div>
</div>

        </div>
        
       
         
                                           
                                                                                     
    );
};

export default People;