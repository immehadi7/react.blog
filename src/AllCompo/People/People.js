import React from 'react';
import './people.css';

const People = (props) => {
    console.log(props.user)
    const {name , age ,img ,profession, salary , country} = props.user 
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


    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>

        </div>
        
       
         
                                           
                                                                                     
    );
};

export default People;