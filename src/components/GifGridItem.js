import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {

    //console.log({img});

    return (
        <div className="card animate__animated animate__fadeOut">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}



GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}
