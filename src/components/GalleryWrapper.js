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
    const [sixthPage, setSixthPage] = useState([]);
    
    const getImagesData = () => {

        Promise.all([
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${props.onReturnUserName}&client_id=vh6ZMVPG_1Uv3mdAfdLGefF7gOwA5HiwdeFETQcoNnc`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=2&query=${props.onReturnUserName}&client_id=vh6ZMVPG_1Uv3mdAfdLGefF7gOwA5HiwdeFETQcoNnc`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=3&query=${props.onReturnUserName}&client_id=vh6ZMVPG_1Uv3mdAfdLGefF7gOwA5HiwdeFETQcoNnc`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=4&query=${props.onReturnUserName}&client_id=vh6ZMVPG_1Uv3mdAfdLGefF7gOwA5HiwdeFETQcoNnc`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=5&query=${props.onReturnUserName}&client_id=vh6ZMVPG_1Uv3mdAfdLGefF7gOwA5HiwdeFETQcoNnc`).then(value => value.json()),
        fetch(`https://api.unsplash.com/search/photos?page=6&query=${props.onReturnUserName}&client_id=vh6ZMVPG_1Uv3mdAfdLGefF7gOwA5HiwdeFETQcoNnc`).then(value => value.json())
        ])
        .then(data => {
            setImages(data[0].results);
            setSecondPage(data[1].results);
            setThirdPage(data[2].results);
            setFourthPage(data[3].results);
            setFifthPage(data[4].results);
            setSixthPage(data[5].results)
        })
        .catch(err => {
            console.log(err);
        })
    };

    props.onGetPageValue(fourthPage);
    props.onGetPageSecondValue(fifthPage);
    props.onGetPageThirdValue(sixthPage);

    const childToParentEnter = (setValue) => {
        return setValue;
    }

    useEffect(() => {
        getImagesData(); 
    }, [props.onReturnUserName]);

    return (
        <div className='gallery__wrapper'>
            {images.map(image => <GalleryImages key={image.id} imageUrl={image.urls.small} imageAlt={image.alt_description} userLink={image.user.links.html} downloadLink={image.links.download}/>)}
            {secondPage.map(secondImage => <GalleryImages key={secondImage.id} imageUrl={secondImage.urls.small} imageAlt={secondImage.alt_description} userLink={secondImage.user.links.html} downloadLink={secondImage.links.download}/>)}
            {thirdPage.map(thirdImage => <GalleryImages key={thirdImage.id} imageUrl={thirdImage.urls.small} imageAlt={thirdImage.alt_description} userLink={thirdImage.user.links.html} downloadLink={thirdImage.links.download}/>)}
            {(images.length > 1) ? <RemainingImages childToParent={childToParentEnter} imageSource={images[2].urls.small} userLinkPage={images[2].user.links.html} downloadLinkPage={images[2].links.download}/> : false}
            {(images.length > 1) ? <RemainingImages childToParent={childToParentEnter} imageSource={images[3].urls.small} userLinkPage={images[3].user.links.html} downloadLinkPage={images[3].links.download}/> : false}
        </div>
    );
};

export default GalleryWrapper;