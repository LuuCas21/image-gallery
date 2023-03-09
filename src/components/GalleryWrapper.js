import React, { useState, useEffect} from 'react';
import './GalleryWrapper.css';
import GalleryImages from './GalleryImages';
import RemainingImages from './RemainingImages';

const GalleryWrapper = (props) => {
    const [images, setImages] = useState([]);
    const [secondPage, setSecondPage] = useState([]);
    const [thirdPage, setThirdPage] = useState([]);
    const [fourthPage, setFourthPage] = useState([]);
    const [fifthPage, setFifthPage] = useState([]);
    
    const getImagesData = () => {

        Promise.all([
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${props.onReturnUserName}&client_id=`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=2&query=${props.onReturnUserName}&client_id=`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=3&query=${props.onReturnUserName}&client_id=`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=4&query=${props.onReturnUserName}&client_id=`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=5&query=${props.onReturnUserName}&client_id=`).then(value => value.json())
        ])
        .then(data => {
            setImages(data[0].results);
            setSecondPage(data[1].results);
            setThirdPage(data[2].results);
            setFourthPage(data[3].results);
            setFifthPage(data[4].results);
        })
        .catch(err => {
            console.log(err);
        })
    };

    //console.log(images[0].urls.small)
    props.onGetPageValue(fourthPage);
    props.onGetPageSecondValue(fifthPage);

    useEffect(() => {
        getImagesData(); 
    }, [props.onReturnUserName]);

    return (
        <div className='gallery__wrapper'>
            {images.map(image => <GalleryImages key={image.id} imageUrl={image.urls.small} imageAlt={image.alt_description}/>)}
            {secondPage.map(secondImage => <GalleryImages key={secondImage.id} imageUrl={secondImage.urls.small} imageAlt={secondImage.alt_description}/>)}
            {thirdPage.map(thirdImage => <GalleryImages key={thirdImage.id} imageUrl={thirdImage.urls.small} imageAlt={thirdImage.alt_description}/>)}
            {(images.length > 1) ? <RemainingImages imageSource={images[2].urls.small}/> : false}
            {(images.length > 1) ? <RemainingImages imageSource={images[3].urls.small}/> : false}
        </div>
    );
};

export default GalleryWrapper;
