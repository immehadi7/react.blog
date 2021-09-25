import React from 'react';
import './people.css'

const People = (props) => {
    console.log(props.user)
    const {name , age ,img ,profession, salary , country} = props.user 
    return (
        <div>
            
            <div  >
                    
                  {/*   <img src={img} alt="..."/>    
                   <h5 > Name:{name} </h5>
                     <h6>Age:{age}</h6>
                     <h3>Profession: {profession} </h3>
                         <h3>Country: {country} </h3>
                             <h4>Salary: {salary} </h4> */}
                    
             

             <div className="row row-col-3 peopleShow">
                 <div className="col-3">
                  <div className="card h-100">
                   <img src={img} alt="..."/>
                   
                      <h5 > Name:{name} </h5>
                        <h6>Age:{age}</h6>
                        <h3>Profession: {profession} </h3>
                            <h3>Country: {country} </h3>
                                <h4>Salary: {salary} </h4>
                          
                             </div>
                                 </div>
                                         </div>  
                                         </div>
                                           
                                                 </div>
                                                    
    );
};

export default People;