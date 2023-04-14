import "./MainDisplay.css";
import ReactPlayer from 'react-player';


export const MainDisplay = (props) => {

  function importAll(r) {
    let videos = {};
     r.keys().forEach((item, index) => { videos[item.replace('./', '')] = r(item); });
    return videos
   }

<<<<<<< HEAD
  const videos = importAll(require.context('../../assets', false, /\.(mp4|jpe?g|svg)$/));
=======
  const videos = importAll(require.context('../../assets', false, /\.(mp4|jpe?g|svg|png)$/));
>>>>>>> 9ad9cf9c00afd313430a5d0d3dcec6ea4a326a6b
  let currentVideo = videos[`${props.selectedVideo}.mp4`];

  return (
    <div className="maindisplay-container d-flex justify-content-center">
      <div className="maindisplay-area">
          <video key={props.videoKey} className="main-video" autoPlay loop>
            <source src={currentVideo} type="video/mp4"></source>
          </video>
      </div>
    </div>
  );
};
