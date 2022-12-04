import React, { useEffect, useState } from 'react';
import "./Footer.css"
import SearchBody from './SearchBody';
import Spiller from './Spiller';

export default function Footer(props) {

  const [a, b] = useState(null)
  const [song, newsong] = useState(null)
  const [image, newimage] = useState(null)
  const [Image, setImage] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [playing, setPlaying] = React.useState(null);

  const pull_data = (data) => {
    b(data);
  }
  const pull_song = (data) => {
    newsong(data);
  }
  const pull_img = (data) => {
    newimage(data);
  }

  return (
    <div className='footer'>
      <SearchBody  func={pull_data} song={pull_song} image={pull_img}/>
      <Spiller title={a} play={playing} image={Image}/>
    </div>
  )
}