import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    const { src, alt, height, width } = props;
  return (
    <img src={src} alt={alt} height={ height ?? '100%'} width={ width ?? "100%"} />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

export default Image;

