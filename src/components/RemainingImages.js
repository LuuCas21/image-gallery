import { useState } from 'react';
import './RemainingImages.css';
import GalleryOptions from './GalleryOptions';

const RemainingImages = (props) => {
    const [onHover2, setOnHover2] = useState(false); 

    return (
        <div className='remaining__images' onMouseEnter={() => setOnHover2(props.childToParent(true))} onMouseLeave={() => setOnHover2(props.childToParent(false))}>
            {onHover2 === true && <GalleryOptions onGetUserLink={props.userLinkPage} onGetDownloadLink={props.downloadLinkPage}/>}
            <img src={props.imageSource} alt ='' />
        </div>
    );
};

export default RemainingImages;