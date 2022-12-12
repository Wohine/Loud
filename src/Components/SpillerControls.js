import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../Styles/Footer.css"
function SpillerControls(props) {

 return (
   <div className="">
    <AudioPlayer
      src={props.song}
      showSkipControls
      autoPlayAfterSrcChange   
    />
   </div>
);
}
export default SpillerControls;