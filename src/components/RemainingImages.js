import './RemainingImages.css';

const RemainingImages = (props) => {
    return (
        <div className='remaining__images'>
            <img src={props.imageSource} alt ='' />
        </div>
    );
};

export default RemainingImages;