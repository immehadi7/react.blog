import React from 'react';

const NewShow = (props) => {
    const {tittle , userId , body  } = props.user ;
    return (
        <div>
            
            <h3> {tittle}  </h3>
        </div>
    );
};

export default NewShow;