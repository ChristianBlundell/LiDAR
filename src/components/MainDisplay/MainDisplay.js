import "./MainDisplay.css";
import ReactPlayer from 'react-player';


export const MainDisplay = (props) => {

  function importAll(r) {
    let videos = {};
     r.keys().forEach((item, index) => { videos[item.replace('./', '')] = r(item); });
    return videos
   }

  const videos = importAll(require.context('../../assets', false, /\.(mp4|jpe?g|svg|png)$/));
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
