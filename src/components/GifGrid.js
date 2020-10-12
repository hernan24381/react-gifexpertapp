import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

   /*  const [images, setImages] = useState([]);

    useEffect(() => {
        //GetGifs(category).then(imgs => setImages(imgs));
        getGifs(category).then(setImages);  // es lo mismo que la anterior linea
    }, [category]) */

    const {data:images, loading} = useFetchGifs( category );
    //console.log(loading);
    //console.log(data);
  
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                <ol>
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img} 
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
