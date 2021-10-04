import React from 'react';

// this is a simple component for styling
const UnderLine = () => {
    const style = {
        backgroundColor : 'lightCoral',
        padding:'2px',
        borderRadius:'2px',
        width:'10rem',
        margin:'0.5rem'
    }
    return (
        <div  className="d-flex justify-content-center">
            <div style={style}>

            </div>
        </div>
    );
};

export default UnderLine;