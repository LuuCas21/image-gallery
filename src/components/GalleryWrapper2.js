import GalleryImages from './GalleryImages';
import RemainingImages from './RemainingImages';
import './GalleryWrapper2.css';

const GalleryWrapper2 = (props) => {
    const childToParentEnter = (setValue) => {
        return setValue;
    };

    return (
        <div className='gallery__wrapper2'>
            {props.onReturnPageValue.map(image => <GalleryImages  key={image.id} imageUrl={image.urls.small} imageAlt={image.alt_description} userLink={image.user.links.html} downloadLink={image.links.download}/>)}
            {props.onReturnPageSecondValue.map(secondPage => <GalleryImages key={secondPage.id} imageUrl={secondPage.urls.small} imageAlt={secondPage.alt_description} userLink={secondPage.user.links.html} downloadLink={secondPage.links.download}/>)}
            {props.onReturnPageThirdValue.map(thirdPage => <GalleryImages key={thirdPage.id} imageUrl={thirdPage.urls.small} imageAlt={thirdPage.alt_description} userLink={thirdPage.user.links.html} downloadLink={thirdPage.links.download}/>)}
            {(props.onReturnPageValue.length > 1) ? <RemainingImages childToParent={childToParentEnter} imageSource={props.onReturnPageValue[2].urls.small} userLinkPage={props.onReturnPageValue[2].user.links.html} downloadLinkPage={props.onReturnPageValue[2].links.download}/> : false}
            {(props.onReturnPageValue.length > 1) ? <RemainingImages childToParent={childToParentEnter} imageSource={props.onReturnPageValue[3].urls.small} userLinkPage={props.onReturnPageValue[3].user.links.html} downloadLinkPage={props.onReturnPageValue[3].links.download}/> : false}
        </div>
    );
};

export default GalleryWrapper2;