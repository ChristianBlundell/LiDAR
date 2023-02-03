
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { MainDisplay } from './components/MainDisplay/MainDisplay';
import { FileSelect } from './components/FileSelect/FileSelect';
import { useState } from 'react';

function App() {

  const [video, setVideo] = useState('complete_view1');

  let myCallback = (dataFromChild) => {
    console.log(dataFromChild);
    setVideo(dataFromChild);

  }
  return (
    <div className="App">
      <NavBar />
      <MainDisplay selectedVideo = {video} videoKey = {video}/>
      <FileSelect callbackFromParent = {myCallback}/>
    </div>
  );
}

export default App;
