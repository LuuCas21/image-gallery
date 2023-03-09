import { useState } from 'react'; 
import './GalleryImages.css';
import GalleryOptions from './GalleryOptions';

const GalleryImages = (props) => {
    const [onHover, setOnHover] = useState(false);

    return (
        <div className='gallery__images' onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            {onHover === true && <GalleryOptions onGetUserLink={props.userLink} onGetDownloadLink={props.downloadLink}/>}
            <img src={props.imageUrl} alt={props.imageAlt}/>
        </div>
    );
};

export default GalleryImages;