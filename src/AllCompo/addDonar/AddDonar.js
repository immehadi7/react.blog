import React from 'react';

const AddDonar = (props) => {
    const { img } = props;
    console.log(props.name);
    return (
        <div>
            <div className="add">
                <p>{img}</p>
            </div>
        </div>
    );
};

export default AddDonar;