import React from 'react';
import './people.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const People = (props) => {
    console.log(props.user)
    const {name , age ,img ,profession, salary , country} = props.user ;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        
                 <div className='col-md-4 peopleShow'>
            <div className="card" style={{width: '18rem'}}>
         <img className="card-img-top" src={img} alt="Card image cap"/>
         <div className="card-body">
       <h2 className="card-title"> Name:{name} </h2>
          <h2 className="card-title">Profession: {profession} </h2>
              <h2 className="card-title"> Country: {country} </h2>
                   <h6 className="card-text">Age:{age}</h6>
                   <h4 className='card-title' >Salary: {salary} </h4>


    <a href="#" class="btn btn-primary" > {element} Add to Cart</a>
  </div>
</div>

        </div>
        
       
         
                                           
                                                                                     
    );
};

export default People;