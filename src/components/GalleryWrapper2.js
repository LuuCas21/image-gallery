import GalleryImages from './GalleryImages';
import RemainingImages from './RemainingImages';
import './GalleryWrapper2.css';

const GalleryWrapper2 = (props) => {

    return (
        <div className='gallery__wrapper2'>
            {props.onReturnPageValue.map(image => <GalleryImages  key={image.id} imageUrl={image.urls.small} imageAlt={image.alt_description}/>)}
            {props.onReturnPageSecondValue.map(secondPage => <GalleryImages key={secondPage.id} imageUrl={secondPage.urls.small} imageAlt={secondPage.alt_description}/>)}
            {(props.onReturnPageValue.length > 1) ? <RemainingImages imageSource={props.onReturnPageValue[2].urls.small} /> : false}
            {(props.onReturnPageValue.length > 1) ? <RemainingImages imageSource={props.onReturnPageValue[3].urls.small} /> : false}
        </div>
    );
};

export default GalleryWrapper2;