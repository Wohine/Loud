import React from 'react'
function SpillerDetail(props) {
   return (
       <div className="spillerDetail">
           <div className="spillerDetail__img">
               <img src={props.image} alt=""></img>
           </div>
           <h3 className="spillerDetail__title">{props.title}</h3>
           <h2 className='spillerDetail__artist'>{props.artist}</h2>
       </div>
  )
}
export default SpillerDetail