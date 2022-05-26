import React from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'      


const FaButton = (props) => {

    const {
        url,
        id,
        faId

    }  = 
    props;


    const navigate = useNavigate()
    
    return (
        <button id={id} onClick={() => navigate(url)}><i className={`fa-brands fa-${faId}`}></i></button>
    );
};

FaButton.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    faId: PropTypes.string.isRequired,
}

export default FaButton;