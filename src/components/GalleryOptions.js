import { FaDownload, FaUserAstronaut } from 'react-icons/fa';
import './GalleryOptions.css';

const GalleryOptions = (props) => {
    const iconStyles = {
        color: '#fff',
        cursor: 'pointer',
        fontSize: '30px',
        margin: '0 10px'
    };

    const anchorDownloadLink = () => {
        window.open(props.onGetDownloadLink);
    };

    const anchorUserLink = () => {
        window.open(props.onGetUserLink);
    };

    return (
        <div className='gallery__images_options'>
            <FaDownload onClick={anchorDownloadLink} style={iconStyles}/>
            <FaUserAstronaut onClick={anchorUserLink} style={iconStyles}/>
        </div>
    );
}

export default GalleryOptions;