import React from 'react'

export const GifGridItem = ({title, url}) => {

    //console.log({img});

    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
