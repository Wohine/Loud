import React, { Fragment, useEffect, useState } from 'react';
import "../Styles/Footer.css"
import Spiller from './Spiller';
import SpillerDetail from "./SpillerDetail"
import SpillerControls from "./SpillerControls"

function Footer(props) {

  return (
    <Fragment>
      <div className="footer">
        <div className='mobileInfo'>
          <SpillerDetail title={props.title} image={props.image} artist={props.artist}/>
        </div>
        <audio></audio>
        <div className='footer__left'>
          <SpillerDetail title={props.title} image={props.image} artist={props.artist}/>
        </div>
        <div className='footer__center'>
          <SpillerControls song={props.play}/>
        </div>
        <div className='footer__right'></div>
      </div>
    </Fragment>
 )
}
export default Footer