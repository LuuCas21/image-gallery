import './GalleryImages.css';

const GalleryImages = (props) => {
    return (
        <div className='gallery__images'>
            <img src={props.imageUrl} alt={props.imageAlt} />
        </div>
    );
};

export default GalleryImages;