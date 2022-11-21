import React from 'react'
import SpillerDetail from './SpillerDetail'
import SpillerControls from './SpillerControls'
import "./Spiller.css"

function Spiller(props) {
   return (
       <div className="spiller">
           <audio></audio>
           <h4 className='spiller__element'>Playing now</h4>
          {/*music search functionality */}
          <SpillerDetail className='spiller__element' song={props.song}/>
          <SpillerControls className='spiller__element' song={props.song}/>
          <p className='spiller__element'><strong>Next up: </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
       </div>
  )
}
export default Spiller