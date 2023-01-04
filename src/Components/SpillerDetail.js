import React from 'react'
function SpillerDetail(props) {
   return (
       <div className="footer__left">
           <div className="footer__albumLogo">
               <img className='footer__img' src={props.image} alt=""></img>
           </div>
           <h3 className="footer__songTitle">{props.title}</h3>
           <h3 className='footer__artist'>{props.artist}</h3>
       </div>
  )
}
export default SpillerDetail