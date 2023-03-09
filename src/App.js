import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import GalleryWrapper2 from './components/GalleryWrapper2';
import GalleryWrapper from './components/GalleryWrapper';
import SearchByUser from './components/SearchByUser';
import './App.css';

function App() {
  const [show, setShow] = useState();
  const [userName, setUserName] = useState('random');
  const [pageValue, setPageValue] = useState([]);
  const [pageSecondValue, setPageSecondValue] = useState([]);
  const [pageThirdValue, setPageThirdValue] = useState([]);

  const toggleComponent = () => {
    setShow(!show);
  };

  const getUserName = (userNameValue) => {
    setUserName(userNameValue);
  }

  const getPageValues = (valuePage) => {
    setPageValue(valuePage);
  }

  const getPageSecondValues = (secondValuePage) => {
    setPageSecondValue(secondValuePage);
  }

  const getPageThirdValues = (thirdValuePage) => {
    setPageThirdValue(thirdValuePage);
  }

  const styles = {
    fontSize: '17px',
    cursor: 'pointer',
    color: '#fff'
  }

  return (
    <div className="App">
      <h2>Images from <u>Unsplash API</u></h2>
      <SearchByUser onGetUserName={getUserName}/>
      <GalleryWrapper onReturnUserName={userName} onGetPageValue={getPageValues} onGetPageSecondValue={getPageSecondValues} onGetPageThirdValue={getPageThirdValues}/>
      {(show) ? <GalleryWrapper2 onReturnPageValue={pageValue} onReturnPageSecondValue={pageSecondValue} onReturnPageThirdValue={pageThirdValue}/> : false}
      <button onClick={toggleComponent}>{(show) ? <FaChevronUp style={styles}/> : <FaChevronDown style={styles}/>}</button>
    </div>
  );
}

export default App;