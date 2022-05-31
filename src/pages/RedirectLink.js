import React from 'react';
import PropTypes from 'prop-types'


const RedirectLink = (props) => {

    const {
      url
    } = props

    window.location.href = url;

    return (
      <canvas className='snakegame' width="300" height="100">

      </canvas>
    );
};

RedirectLink.propTypes = {
  url: PropTypes.string.isRequired
}

export default RedirectLink;

