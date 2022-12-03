import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useStateValue } from "./StateProvider";
function SpillerControls(props) {

 return (
   <div className="spillerControls">
    <AudioPlayer
      src={props.song}
      showSkipControls
      autoPlayAfterSrcChange   
    />
   </div>
);
}
export default SpillerControls;