import React from 'react'
function SpillerDetail(props) {
   return (
       <div className="spillerDetail">
           <div className="spillerDetail__img">
               <img src={props.song.img_src} alt=""></img>
           </div>
           <h3 className="spillerDetail__title">{props.song.title}</h3>
           <h3 className="spillerDetail__artist">{props.song.artist}</h3>
       </div>
  )
}
export default SpillerDetail