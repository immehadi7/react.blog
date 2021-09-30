import React from 'react';
import './usershow.css';
import { Link , useHistory } from 'react-router-dom';

const UserShow = (props) => {
    let  { id , name, username , email , phone , website } = props.user ;
        let history = useHistory();
           let url = `/${id}` ;
           
    let handleClick = () => {
        history.push(`/${id}`);
    }
    return (
        <div className='friends-style'>
            <h1> Name: {name} </h1>
            <h5>User Name: {username} </h5>
            <h5>email: {email} </h5>
            <h3>Phone: {phone} </h3>
            <h6> Website: {website} </h6>
            <Link to={url}>Click me </Link>
            <br />
            <Link to={url}>
                <button>Visit bangla system</button>
            </Link>
            <br />
            <button onClick={handleClick} > Visit system 3</button>
        </div>
    );
};

export default UserShow;