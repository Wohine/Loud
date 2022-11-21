import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
function SpillerControls(props) {
 return (
   <div className="spillerControls">
     <AudioPlayer
       autoPlay
       src={props.song.src}
       onPlay={(e) => console.log("onPlay")}
       // other props here
       showSkipControls
       autoPlayAfterSrcChange

     />
   </div>
);
}
export default SpillerControls;