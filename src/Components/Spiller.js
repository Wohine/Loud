import React from 'react'
import SpillerDetail from './SpillerDetail'
import SpillerControls from './SpillerControls'
import "../Styles/Spiller.css"

function Spiller(props) {


   return (
      <div className="spiller">
        <audio></audio>
        <h4>Playing now</h4>
        <SpillerDetail title={props.title} image={props.image} artist={props.artist}/>
        <SpillerControls song={props.play}/>
      </div>
  )
}
export default Spiller