import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';
import Question from './components/Question/Question';
import { useState } from 'react';
import Time from './components/Time/Time';


function App() {
  const [value, setValue] = useState([]);
  const [marks, setMarks] = useState([]);

  const handleTitle = (title) => {
    const newValue = [...value, title];
    setValue(newValue);
  };

  const handleMarks = (readTime) => {
    const newMarks = [...marks, readTime];
    // console.log(readTime);
    setMarks(newMarks);
  }

  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
      </div>
      <div className='container'>
        <div className="row flex">
          <div className="body-container mx-10 my-2">
            <Body
              handleTitle={handleTitle}
              handleMarks={handleMarks}>     
            </Body>
          </div>
          <div className="">
            <div>
            <Time marks={marks}>
                
              </Time>
            </div>
            <div className=''>
              <Cart value={value}>

              </Cart>
            </div>
          </div>
        </div>
      </div>
      <div className='px-10'>
        <Question></Question>
      </div>
    </div>
  );
}

export default App;
